"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import Spinner from "@/components/Spinner";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaCertificate,
  FaCheckCircle,
  FaClock,
  FaShippingFast,
  FaTimesCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";


const statuses = [
  {
    label: "Pending",
    value: ORDER_STATUS_PENDING,
    icon: <FaClock className="text-amber-600" />,
  },
  {
    label: "Confirmed",
    value: ORDER_STATUS_CONFIRMED,
    icon: <FaCertificate className="text-indigo-600" />,
  },
  {
    label: "Shipped",
    value: ORDER_STATUS_SHIPPED,
    icon: <FaShippingFast className="text-violet-600" />,
  },

  {
    label: "Delivered",
    value: ORDER_STATUS_DELIVERED,
    icon: <FaCheckCircle className="text-green-600" />,
  },
  {
    label: "Canceled",
    value: ORDER_STATUS_CANCELLED,
    icon: <FaTimesCircle className="text-red-600" />,
  },
];


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  const queryStatus = searchParams.get("status");

  useEffect(() => {
    getOrdersByUser(queryStatus)
      .then((data) => {
        setOrders(data || []);
      })
      .catch((e) => toast.error(e?.response?.data || "Failed to load orders"))
      .finally(() => setLoading(false));
  }, [queryStatus]);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-20 w-20 fill-primary" />
      </div>
    );

  return (
    <section className="py-24 relative dark:text-white">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Your Orders
        </h2>

        <div className="border-b border-gray-200 mb-5 dark:bg-gray-900 bg-gray-200 rounded shadow">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-body ">
            {statuses.map((status, index) => (
              <li key={index} className="me-2">
                <Link
                  href={`?status=${status.value}`}
                  className={`${status.value == queryStatus ? "border-primary" : "border-transparent"} inline-flex gap-1 items-center justify-center p-4 border-b rounded-t-base hover:text-fg-brand hover:border-brand group hover:border-gray-500 `}
                >
                  {status.icon}
                  {status.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          orders.map((order) => <OrderCard key={order._id} order={order} />)
        )}
      </div>
    </section>
  );
};

export default OrdersPage;
