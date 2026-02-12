import React from "react";
import { FaCreditCard, FaHeadset, FaShippingFast } from "react-icons/fa";

const ChooseSection = () => {
  return (
    <section className="dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12">
          Why Shop With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 flex flex-col items-center text-center dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow transition duration-300">
            <div className="bg-primary/10 rounded-full flex items-center justify-center h-16 w-16 mb-4">
              <FaShippingFast className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Free Shipping for all orders over Rs.500. Fast delivery service to
              your doorstep.
            </p>
          </div>
          <div className="bg-gray-50 flex flex-col items-center text-center dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow transition duration-300">
            <div className="bg-green-500/10 rounded-full flex items-center justify-center h-16 w-16 mb-4">
              <FaCreditCard className="text-2xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Secure Payment
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your payment information is safe with our encrypted system.
            </p>
          </div>
          <div className="bg-gray-50 flex flex-col items-center text-center dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow transition duration-300">
            <div className="bg-orange-500/10 rounded-full flex items-center justify-center h-16 w-16 mb-4">
              <FaHeadset className="text-2xl text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Our customer support team is available around the clock to help
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
