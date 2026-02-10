import React from "react";
import TableHead from "./TableHead";
import { FaPencilAlt } from "react-icons/fa";
import { format } from "date-fns";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import OrderStatus from "./Status";
import OrderAction from "./OrderAction";
import Spinner from "@/components/Spinner";

const OrdersTable = ({ orders, loading }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead />
        {loading ? (
          <tr>
            <td colSpan={8}>
              <div className="flex items-center justify-center py-10">
                <Spinner className="h-12 w-12 fill-primary" />
              </div>
            </td>
          </tr>
        ) : (
          <tbody>
            {orders?.map(
              (order) =>
                order.orderItems.some((item) => item.product) && (
                  <tr
                    key={order._id}
                    className="border-b border-gray-300 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.orderNumber}
                    </th>
                    <td className="px-4 py-3">
                      {order.orderItems.map((item, index) => (
                        <p key={index}>
                          <Link
                            href={`${PRODUCTS_ROUTE}/${item.product._id}`}
                            className="text-primary hover:text-blue-900 dark:hover:text-blue-300 mr-2"
                          >
                            {item.product?.name}
                          </Link>
                          (x{item.quantity})
                        </p>
                      ))}
                    </td>
                    <td className="px-4 py-3">Rs. {order.totalPrice}</td>
                    <td className="px-4 py-3">
                      <p>
                        Name
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.name}
                        </span>
                      </p>
                      <p>
                        Email
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.email}
                        </span>
                      </p>
                      <p>
                        Phone
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.phone}
                        </span>
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p>
                        {order.shippingAddress.city},
                        {order.shippingAddress.province}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      {format(order.createdAt, "dd MMM, yyyy")}
                    </td>
                    <td className="px-4 py-3">
                      <OrderStatus status={order.status} />
                    </td>
                    <td className="px-4 py-3">
                      <OrderAction id={order._id} status={order.status} />
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrdersTable;
