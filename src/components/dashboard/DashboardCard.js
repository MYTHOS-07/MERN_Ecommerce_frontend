"use client";

import { getAllOrders } from "@/api/orders";
import React, { useEffect, useState } from "react";
import { FaShippingFast, FaShoppingBasket } from "react-icons/fa";
import { FaCheck, FaClock } from "react-icons/fa6";
import Spinner from "../Spinner";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";

const DashboardCard = ({ label, value, Icon, className }) => {
  return (
    <div
      className={`shadow-md rounded-xl px-8 py-6 flex items-center gap-5 border-l-4 ${className ?? ""}`}
    >
      {Icon}
      <div>
        <h4>{label}</h4>
        <p className="font-bold text-3xl">{value}</p>
      </div>
    </div>
  );
};

const OrderStats = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    getAllOrders()
      .then((data) => {
        setOrders(data);
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-4 gap-8">
      <DashboardCard
        label={"Pending Orders"}
        value={
          orders.filter((order) => order.status == ORDER_STATUS_PENDING).length
        }
        Icon={
          <FaClock className="text-2xl rounded-full p-3 min-w-12 h-12 bg-amber-100 text-amber-500" />
        }
        className={"text-amber-500"}
      />
      <DashboardCard
        label={"Confirmed Orders"}
        value={
          orders.filter((order) => order.status == ORDER_STATUS_CONFIRMED)
            .length
        }
        Icon={
          <FaShoppingBasket className="text-2xl rounded-full p-3 min-w-12 h-12 bg-blue-100 text-blue-500" />
        }
        className={"text-blue-500"}
      />
      <DashboardCard
        label={"Shipped Orders"}
        value={
          orders.filter((order) => order.status == ORDER_STATUS_SHIPPED).length
        }
        Icon={
          <FaShippingFast className="text-2xl rounded-full p-3 min-w-12 h-12 bg-purple-100 text-purple-500" />
        }
        className={"text-purple-500"}
      />
      <DashboardCard
        label={"Delivered Orders"}
        value={
          orders.filter((order) => order.status == ORDER_STATUS_DELIVERED)
            .length
        }
        Icon={
          <FaCheck className="text-2xl rounded-full p-3 min-w-12 h-12 bg-green-100 text-green-500" />
        }
        className={"text-green-500"}
      />
      <DashboardCard
        label={"Canceled Orders"}
        value={
          orders.filter((order) => order.status == ORDER_STATUS_CANCELLED)
            .length
        }
        Icon={
          <FaCheck className="text-2xl rounded-full p-3 min-w-12 h-12 bg-red-100 text-red-500" />
        }
        className={"text-red-500"}
      />
    </div>
  );
};

export default OrderStats;
