"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { ORDER_PAGE_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "@/api/orders"; // Add this import
import { useRouter } from "next/navigation";
import { ORDER_STATUS_PENDING } from "@/constants/order";

const CartPage = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  function remove(product) {
    if (confirm("Are you sure you want to delete this item from cart")) {
      dispatch(removeFromCart(product));
    }
  }

  function checkOut() {
    const orderItems = products.map((product) => ({
      product: product.id,
      quantity: product.quantity,
    }));

    createOrder({
      orderItems,
      shippingAddress: user.address,
      totalPrice: Math.ceil((totalPrice - totalPrice * 0.1) * 1.13),
    })
      .then(() => {
        router.push(`${ORDER_PAGE_ROUTE}?status=${ORDER_STATUS_PENDING}`);

        toast.success("Order created successfully", {
          onClose: () => {
            dispatch(clearCart());
          },
        });
      })
      .catch((e) => toast.error(e?.response?.data));
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-800 md:py-16">
      <div className="mx-auto container px-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Your Cart Items
        </h2>
        {products.length == 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link
                        href={`${PRODUCTS_ROUTE}/${product.id}`}
                        className="shrink-0 md:order-1"
                      >
                        {product?.imageUrls.length > 0 ? (
                          <Image
                            src={product?.imageUrls[0]}
                            alt={product.name}
                            height={400}
                            width={400}
                            className="h-20 w-20 object-contain"
                          />
                        ) : (
                          <FaImage className="h-20 w-20 text-gray-400" />
                        )}
                      </Link>
                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() => dispatch(decreaseQuantity(product))}
                            disabled={product.quantity == 1}
                            type="button"
                            data-input-counter-decrement="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaMinus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            disabled
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder
                            value={product.quantity}
                            required
                          />
                          <button
                            onClick={() => dispatch(increaseQuantity(product))}
                            type="button"
                            data-input-counter-increment="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaPlus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            Rs. {product.price * product.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                          href={`${PRODUCTS_ROUTE}/${product.id}`}
                          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          {product.name}
                        </Link>

                        <div className="flex items-center gap-4 mt-1">
                          <button
                            type="button"
                            className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <FaRegHeart />
                            Add to Favorites
                          </button>
                          <button
                            onClick={() => remove(product)}
                            type="button"
                            className="inline-flex gap-1 items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <FaXmark />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full ">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {totalPrice}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings (10%)
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        - Rs. {totalPrice * 0.1}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. 0
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax (13%)
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {(totalPrice - totalPrice * 0.1) * 0.13}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      Rs. {Math.ceil((totalPrice - totalPrice * 0.1) * 1.13)}
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={checkOut}
                  className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <Link
                    href={PRODUCTS_ROUTE}
                    title
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
