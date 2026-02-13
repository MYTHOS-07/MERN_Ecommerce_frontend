"use client";

import { getAllOrders, getOrdersByMerchant } from "@/api/orders";
import OrdersTable from "@/components/admin/orders/Table";
import Spinner from "@/components/Spinner";

import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";
import { ROLE_ADMIN } from "@/constants/roles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState();

  const { user } = useSelector((state) => state.auth);

  async function fetchOrders() {
    setLoading(true);
    try {
      const data = user.roles.includes(ROLE_ADMIN)
        ? await getAllOrders(selectedStatus)
        : await getOrdersByMerchant();

      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStatus]);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    );

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Order Management</h1>{" "}
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto gap-3 text-nowrap">
                <span>Filter by Status:</span>
                <select
                  name="status"
                  id="status"
                  className="my-2 w-full border rounded-md py-1 px-3 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value={""}>All</option>
                  <option value={ORDER_STATUS_PENDING}>
                    {ORDER_STATUS_PENDING}
                  </option>
                  <option value={ORDER_STATUS_CONFIRMED}>
                    {ORDER_STATUS_CONFIRMED}
                  </option>
                  <option value={ORDER_STATUS_SHIPPED}>
                    {ORDER_STATUS_SHIPPED}
                  </option>
                  <option value={ORDER_STATUS_DELIVERED}>
                    {ORDER_STATUS_DELIVERED}
                  </option>
                  <option value={ORDER_STATUS_CANCELLED}>
                    {ORDER_STATUS_CANCELLED}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <OrdersTable
            orders={orders}
            loading={loading}
            disabledAction={!user.roles.includes(ROLE_ADMIN)}
          />
        </div>
      </section>
    </>
  );
};

export default OrderManagementPage;
