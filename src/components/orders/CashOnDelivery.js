import { payViaCash } from "@/api/orders";
import React from "react";

const CashOnDelivery = ({ id }) => {
  function confirmOrder() {
    if (confirm("Are you sure ?")) {
      payViaCash(id)
        .then(() => {
          toast.success("Order update Successful");
        })
        .catch(() => {
          toast.error("Order update failed");
        });
    }
  }

  return (
    <button
      onClick={confirmOrder}
      className="bg-green-700 hover:bg-green-900 text-white rounded-md px-4 py-2 cursor-pointer"
    >
      Cash On Delivery
    </button>
  );
};

export default CashOnDelivery;


// 59 vedio
// 1:12:18