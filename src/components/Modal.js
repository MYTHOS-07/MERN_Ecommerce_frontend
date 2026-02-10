import React from "react";
import { FaXmark } from "react-icons/fa6";

const Modal = ({ title, onConfirm, show, setShow, children, totalPrice }) => {
  return (
    <div
      className={`${show ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm px-4`}
    >
      <div className="relative w-full max-w-md animate-scaleIn">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 p-6 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title || "Complete payment"}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Secure card payment powered by Stripe
              </p>
            </div>

            <button
              onClick={() => setShow(false)}
              className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white transition"
              aria-label="Close"
            >
              <FaXmark size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-gray-800/60 p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">Total</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Rs {totalPrice}
              </p>
            </div>

            {/* Card field wrapper */}
            <div className="text-left">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                Card details
              </label>

              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm dark:bg-gray-900 dark:border-gray-700">
                {/* Put <CardElement /> or your payment form fields here */}
                {children}
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                Your card details are encrypted and never stored.
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={onConfirm}
                className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:scale-[0.99] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Pay now
              </button>

              <button
                onClick={() => setShow(false)}
                className="w-full rounded-xl px-5 py-3 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-400">
              By clicking Pay now, you agree to the payment terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
