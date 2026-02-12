import { getProducts } from "@/api/products";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import React from "react";
import ProductCard from "../products/Card";

const PopularProducts = async () => {
  const products = await getProducts({ category: "SmartPhone", limit: 4 });

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Popular Products
          </h2>
          <a
            href={PRODUCTS_ROUTE}
            className="text-primary hover:text-secondary"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
