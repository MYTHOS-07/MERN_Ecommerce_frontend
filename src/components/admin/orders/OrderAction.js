import { FaPencilAlt } from "react-icons/fa";
import React, { useState } from "react";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";
import { updateStatus } from "@/api/orders";
import { toast } from "react-toastify";

const Modal = ({ show, setShow, onConfirm, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm mx-4 rounded-xl dark:bg-gray-800  bg-white shadow-lg flex flex-col gap-3 px-6 py-6">
        {/* Header */}

        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Confirm Update
        </h3>
        <p className="mt-2 text-sm text-gray-600 mb-2 dark:text-gray-400">
          Are you sure you want to update this order?
        </p>

        <div>{children}</div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mb-2">
          <button
            onClick={() => setShow(false)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm dark:text-gray-300 text-gray-700 bg-red-500 hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary/70"
          >
            Yes, Update
          </button>
        </div>
      </div>
    </div>
  );
};

const OrderAction = ({ id, status }) => {
  const [show, setShow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);

  function UpdateOrderState() {
    updateStatus(id, selectedStatus)
      .then(() => toast.success("Order status updated successfully"))
      .catch(() => toast.success("Order status update Failed"))
      .finally(() => setShow(false));
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="p-2 rounded-md bg-primary hover:bg-blue-700 cursor-pointer text-white"
      >
        <FaPencilAlt />
      </button>
      <Modal show={show} setShow={setShow} onConfirm={UpdateOrderState}>
        <select
          defaultValue={status}
          name="status"
          id="status"
          className="my-2 w-full border rounded-md py-1 px-3 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value={ORDER_STATUS_PENDING}>{ORDER_STATUS_PENDING}</option>
          <option value={ORDER_STATUS_CONFIRMED}>
            {ORDER_STATUS_CONFIRMED}
          </option>
          <option value={ORDER_STATUS_SHIPPED}>{ORDER_STATUS_SHIPPED}</option>
          <option value={ORDER_STATUS_DELIVERED}>
            {ORDER_STATUS_DELIVERED}
          </option>
          <option value={ORDER_STATUS_CANCELLED}>
            {ORDER_STATUS_CANCELLED}
          </option>
        </select>
      </Modal>
    </>
  );
};

export default OrderAction;
