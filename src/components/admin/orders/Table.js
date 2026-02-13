import React from "react";
import TableHead from "./TableHead";
import { format } from "date-fns";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import OrderStatus from "./Status";
import OrderAction from "./OrderAction";
import Spinner from "@/components/Spinner";
import { FaCog } from "react-icons/fa";

const OrdersTable = ({ orders = [], loading, disabledAction }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead />

        {loading ? (
          <tbody>
            <tr>
              <td colSpan={8}>
                <div className="flex items-center justify-center py-10">
                  <Spinner className="h-12 w-12 fill-primary" />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {orders
              ?.filter((order) => (order?.orderItems?.length ?? 0) > 0)
              ?.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-300 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    #{order?.orderNumber}
                  </th>

                  <td className="px-4 py-3">
                    <ol>
                      {order?.orderItems?.map((item, index) => (
                        <li key={item?._id || index} className="mb-2">
                          <Link
                            href={`${PRODUCTS_ROUTE}/${item?._id}`}
                            className="text-primary hover:underline"
                          >
                            {item?.name || item?.product?.name}
                          </Link>
                          <p className="text-xs">
                            {item?.brand || item?.product?.brand} -
                            {item?.product?.category}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </td>

                  {/* Total Price */}
                  <td className="px-4 py-3">Rs. {order?.totalPrice}</td>

                  {/* User */}
                  <td className="px-4 py-3">
                    <p>
                      Name:&nbsp;
                      <span className="text-gray-900 dark:text-gray-100">
                        {order?.user?.name}
                      </span>
                    </p>
                    <p>
                      Email:&nbsp;
                      <span className="text-gray-900 dark:text-gray-100">
                        {order?.user?.email}
                      </span>
                    </p>
                    <p>
                      Phone:&nbsp;
                      <span className="text-gray-900 dark:text-gray-100">
                        {order?.user?.phone}
                      </span>
                    </p>
                  </td>

                  <td className="px-4 py-3">
                    {order?.shippingAddress?.city}&nbsp;
                    {order?.shippingAddress?.province}
                  </td>

                  <td className="px-4 py-3">
                    {order?.createdAt
                      ? format(new Date(order.createdAt), "dd MMM, yyyy")
                      : "-"}
                  </td>

                  <td className="px-4 py-3">
                    <OrderStatus status={order?.status} />
                  </td>

                  <td className="px-4 py-3">
                    {disabledAction ? (
                      <FaCog />
                    ) : (
                      <OrderAction id={order?._id} status={order?.status} />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrdersTable;
