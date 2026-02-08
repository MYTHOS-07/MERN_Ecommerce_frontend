"use client";

import Link from "next/link";
import React from "react";
import { CART_PAGE_ROUTE } from "@/constants/routes";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const HeaderCart = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <Link
      href={CART_PAGE_ROUTE}
      className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary relative"
    >
      <FaCartShopping />
      {products.length > 0 ? (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-[6px] h-3 w-3 rounded-full flex items-center justify-center">
          {products.length}
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

export default HeaderCart;
