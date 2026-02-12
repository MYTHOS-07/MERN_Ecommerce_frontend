import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { getProductsByID } from "@/api/products";

const BestSeller = async () => {
  const bestSellerId = "698a2580423cef95a6952529";

  const product = await getProductsByID(bestSellerId);
  console.log(product);

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-center p-8 lg:p-12">
              <span className="bg-gray-100 bg-opacity-20 rounded-2xl w-max px-4 py-1 text-xs font-medium text-gray-800">
                Featured Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-2">
                {product.name}
              </h2>
              <p className="text-blue-100 mb-6">
                {product.description.slice(0, 300)}...
              </p>
              <div className="flex mb-4 items-center">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm ml-2 text-gray-200">
                  5/5 from 1,536 reviews
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-semibold text-white">
                  Rs {product.price}
                </span>
                <span className="text-xl text-blue-200 line-through ml-1">
                  Rs {product.price * 1.2}
                </span>
                <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  20% OFF
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link
                  href={`${PRODUCTS_ROUTE}/${product._id}`}
                  className="bg-white text-primary hover:underline px-6 py-2 rounded-lg font-semibold transition duration-300 flex justify-center items-center gap-2"
                >
                  Buy Now <FaShoppingCart />
                </Link>
                <Link
                  href={`${PRODUCTS_ROUTE}/${product._id}`}
                  className="border border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-lg font-semibold transition duration-300  flex justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-8 lg:p-12">
              <Image
                width={1200}
                height={800}
                src={product.imageUrls[0]}
                alt={product.name}
                className="w-full max-w-md rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
