import AddToCart from "./AddToCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const ProductCard = ({ _id, name, price, brand, category, imageUrls }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
      <Link href={`${PRODUCTS_ROUTE}/${_id}`} className="relative">
        {imageUrls.length > 0 ? (
          <Image
            height={400}
            width={600}
            src={imageUrls[0]}
            alt={name || "product-image"}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <FaImage className="text-4xl text-gray-400" />
          </div>
        )}

        <span className="absolute top-3 right-3 bg-teal-700 text-white text-xs font-medium px-2 py-1 rounded-xl">
          {brand}
        </span>
      </Link>

      <div className="p-4">
        <h4 className="mb-1">
          <Link
            href={`${PRODUCTS_ROUTE}/${_id}`}
            className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1 hover:text-primary"
          >
            {name}
          </Link>
        </h4>
        <span className="bg-primary/10 text-primary text-xs font-medium px-1.5 py-0.5 rounded">
          {category}
          <span className="text-sm ml-2 text-gray-500 dark:">(259)</span>
        </span>
        <div className="mt-1 flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Rs. {price}
            </span>
            <span className="text-sm text-gray-500 line-through ml-1">
              Rs. {price * 1.05}
            </span>
          </div>
          <AddToCart product={{ id: _id, name, price, imageUrls }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
