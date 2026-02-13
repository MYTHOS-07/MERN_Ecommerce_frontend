import React from "react";
import { FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 px-3 py-2.5 rounded-full mr-4">
                  <FaMapMarkedAlt className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 px-3 py-2.5 rounded-full mr-4">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Phone number
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    5632356654, 852546334
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 px-3 py-2.5 rounded-full mr-4">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Email address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    giripunit1000@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 px-3 py-2.5 rounded-full mr-4">
                  <FaClock className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Working hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sun-Fri 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 dark:text-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 dark:text-white dark:bg-gray-700"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 dark:text-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="Message"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 dark:text-white dark:bg-gray-700"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white rounded-lg px-8 py-3 font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
