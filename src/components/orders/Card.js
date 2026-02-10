import CashOnDelivery from "./CashOnDelivery";
import Image from "next/image";
import OrderStatus from "./status";
import PayViaKhalti from "./PayViaKhalti";
import PayViaStripe from "./payVaiStripe";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { ORDER_STATUS_PENDING } from "@/constants/order";
import { cancelOrder } from "@/api/orders";
import { format, addDays } from "date-fns";
import { toast } from "react-toastify";

const OrderCard = ({ order }) => {
  const isProductAvailable = order.orderItems.some((item) => item.product);

  if (!isProductAvailable) return;

  function cancel() {
    if (confirm("Are you sure?")) {
      cancelOrder(order._id)
        .then(() => {
          toast.success("Order Cancelled successfully");

          router.refresh();
        })
        .catch(() => {
          toast.error("Order Cancelled Failed");
        });
    }
  }

  return (
    <div className="main-box border border-gray-200 dark:border-gray-600 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full mb-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 dark:border-gray-600">
        <div className="data">
          <p className="font-semibold text-base leading-7 ">
            Order Id:
            <span className="text-indigo-600 font-medium">
              &nbsp; #{order.orderNumber}
            </span>
          </p>
          <p className="font-semibold text-base leading-7  mt-4">
            Order Payment :
            <span className="text-gray-400 font-medium">
              &nbsp; {format(order.createdAt, "dd MMM, yyyy")}
            </span>
          </p>
        </div>
        <OrderStatus status={order.status} />
      </div>
      <div className="w-full px-6">
        {order.orderItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 dark:border-gray-600 gap-6 w-full"
          >
            <div className="img-box max-lg:w-full">
              <Image
                width={400}
                height={400}
                src={item.product.imageUrls[0]}
                alt="Premium Watch image"
                className="aspect-square w-full h-28 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full ">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className="flex items-center">
                  <div>
                    <h2 className="font-semibold text-xl leading-8  mb-3">
                      {item.product.name}
                    </h2>
                    <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                      Brand: {item.product.brand}
                    </p>
                    <div className="flex items-center ">
                      <p className="font-medium text-base leading-7  ">
                        Qty:
                        <span className="text-gray-500">{item.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                    <div className="flex gap-3 lg:block">
                      <p className="font-medium text-sm leading-7 ">price</p>
                      <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                        Rs. {item.product.price}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-5 lg:col-span-2 lg:col-start-4 flex items-center max-lg:mt-3">
                    <div className="flex gap-3 lg:block">
                      <p className="font-medium text-sm whitespace-nowrap leading-6 ">
                        Expected Delivery Time
                      </p>
                      <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                        {format(
                          addDays(new Date(order.createdAt), 7),
                          "do MMMM yyyy",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-600 flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col sm:flex-row items-center max-lg:border-b overflow-hidden border-gray-200 dark:border-gray-600">
          {order.status === ORDER_STATUS_PENDING ? (
            <button
              onClick={cancel}
              className="flex outline-0 py-6 sm:pr-6 px-6 sm:border-r  border-gray-200 dark:border-gray-600 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg cursor-pointer text-red-600 transition-all duration-500 hover:bg-red-200 dark:hover:bg-red-900"
            >
              <FaXmark />
              Cancel Order
            </button>
          ) : null}

          {order.status == ORDER_STATUS_PENDING ? (
            <div className="pl-6 py-3 max-lg:text-center flex items-center gap-3">
              <PayViaKhalti id={order._id} />
              <PayViaStripe id={order._id} totalPrice={order.totalPrice} />
              <CashOnDelivery id={order._id} />
            </div>
          ) : null}
        </div>
        <p className="font-semibold text-lg  py-6 pr-6">
          Total Price:
          <span className="text-indigo-600"> Rs {order.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
