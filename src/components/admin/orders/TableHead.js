import React from "react";
import { FaCog } from "react-icons/fa";

const TableHead = () => {
  const headerColumns = [
    { key: "orderid", label: "  Order ID" },
    { key: "productDetails", label: " Product Details" },
    { key: "totalPrice", label: "Total Price" },
    { key: "customerDetails", label: " Customer Details" },
    { key: "Shipping Address", label: "Shipping Address" },
    { key: "orderDate", label: "Order Date" },
    { key: "status", label: "Status" },
    { key: "actions", label: <FaCog /> },
  ];
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {headerColumns.map((item) => (
          <th key={item.key} scope="col" className="px-4 py-3">
            {item.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
