"use client";

import React, { useState } from "react";
import Spinner from "../Spinner";
import { payViakhalti } from "@/api/orders";
import { toast } from "react-toastify";

const PayViaKhalti = ({ id }) => {
  const [loading, setLoading] = useState(false);

  function initOrderPayment() {
    setLoading(true);
    payViakhalti(id)
      .then((data) => {
        window.location.href = data.payment_url; // for redirecting the url from khalti
      })
      .catch((error) => {
        toast.error("Order payment failed");
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={initOrderPayment}
      className="flex items-center gap-2  bg-purple-700 hover:bg-purple-900 text-white rounded-md px-4 py-2 cursor-pointer"
    >
      {loading && <Spinner className="w-5 h-5 fill-purple-900" />}
      Pay via Khalti
    </button>
  );
};

export default PayViaKhalti;
