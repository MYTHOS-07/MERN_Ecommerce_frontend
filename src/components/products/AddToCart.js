"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addToCart(product));

    toast.success(`${product.name} is added to your cart`);
  }

  return (
    <button
      onClick={addProductToCart}
      className="min-w-10 h-10 text-lg bg-primary text-white hover:bg-secondary px-3 py-2.5 rounded-full cursor-pointer"
    >
      <MdOutlineAddShoppingCart />
    </button>
  );
};

export default AddToCart;
