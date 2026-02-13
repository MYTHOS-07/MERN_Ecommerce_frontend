"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000;

const ProductsFilter = ({ productBrands, productCategories }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);

  function filterProducts() {
    const params = new URLSearchParams();

    params.set("name", name);
    params.set("sort", sort);
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("category", category);
    params.set("brands", brands.join(","));

    router.push(`?${params.toString()}`);
  }

  function handlerBrandsFilterChange(brand) {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand],
    );
  }

  function resetFilter() {
    setName("");
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setBrands([]);

    router.push(PRODUCTS_ROUTE);
  }

  return (
    <aside className="shadow-md py-8 px-6 rounded-xl bg-white dark:bg-gray-900 dark:text-white">
      <h3 className="font-semibold text-xl">Product Filter</h3>

      {/* Search */}
      <div className="py-3">
        <h4 className="mb-1 font-semibold">Search</h4>
        <input
          name="name"
          id="name"
          value={name}
          className="border border-gray-300 rounded w-full px-2 py-1 mt-1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* date filter */}
      <div className="py-3">
        <h4 className="mb-2">Sort By:</h4>
        <select
          name="sort"
          id="sort"
          value={sort}
          className="border border-gray-300 rounded w-full px-2 py-1"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>
            Latest Products
          </option>
          <option value={JSON.stringify({ createdAt: 1 })}>
            Oldest Products
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name: A-Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z-A</option>
        </select>
      </div>

      {/* price */}
      <div className="py-3">
        <h4 className="mb-2">Price Range</h4>
        <label htmlFor="min" className="text-xs text-gray-600">
          Minimum Price
        </label>
        <input
          type="number"
          name="min"
          id="min"
          className="border border-gray-300 rounded w-full px-2 py-1 mt-1"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label htmlFor="max" className="text-xs text-gray-600">
          Maximum Price
        </label>
        <input
          type="number"
          name="max"
          id="max"
          className="border border-gray-300 rounded w-full px-2 py-1 mt-1"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* category filter */}
      <div className="py-3">
        <h4 className="mb-2">Category</h4>
        <select
          name="sort"
          id="sort"
          className="border border-gray-300 rounded w-full px-2 py-1"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value=" ">Select Category</option>
          {productCategories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="py-3">
        <h4 className="mb-2">Brands</h4>
        {productBrands?.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-start gap-2 py-0.5"
          >
            <input
              name={brand}
              id={brand}
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => handlerBrandsFilterChange(brand)}
            />
            <label htmlFor={brand} className="text-sm text-gray-600">
              {brand}
            </label>
          </div>
        ))}
      </div>

      <div className="py-3 space-y-2">
        <button
          onClick={filterProducts}
          className="bg-primary text-white px-5 py-1 rounded-md w-full cursor-pointer hover:bg-blue-700 transition duration-300"
        >
          Filter Products
        </button>
      </div>
      <div className="py-3">
        <button
          onClick={resetFilter}
          className="bg-red-500 text-white px-5 py-1 rounded-md w-full cursor-pointer hover:bg-red-700 transition duration-300"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilter;
