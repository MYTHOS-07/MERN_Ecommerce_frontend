import React from "react";
import { FaImage } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const LoadingCard = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition duration-300 animate-pulse">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <FaImage className="text-gray-300 text-7xl" />
      </div>
      <div className="absolute top-3 right-3 bg-green-700 z-10 w-14 h-6 rounded-xl"></div>
      <div className="p-4">
        <div className="bg-gray-300 w-3/4 h-7 mb-3"></div>
        <div className="bg-primary/10 w-24 h-5 rounded"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <div className="bg-gray-200 w-24 h-5"></div>
            <div className="bg-gray-100 w-20 h-4 ml-1"></div>
          </div>
          <button className="min-w-10 h-10 text-lg bg-primary text-white hover:bg-secondary px-3 py-2.5 rounded-full cursor-pointer">
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default ProductsLoading;
