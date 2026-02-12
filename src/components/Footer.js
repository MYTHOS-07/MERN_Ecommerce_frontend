import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import React from "react";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    {
      label: "Home",
      route: HOME_ROUTE,
    },
    {
      label: "About",
      route: ABOUT_ROUTE,
    },
    {
      label: "Products",
      route: PRODUCTS_ROUTE,
    },
    {
      label: "Contact",
      route: CONTACT_ROUTE,
    },
  ];
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold">
              <i className="fas fa-laptop" /> Techno
            </h4>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              cum. Doloribus cumque molestias corporis optio nihil sunt hic,
              iure nobis!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.route}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privary Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Support Center
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">We Accept</h4>
            <div className="flex gap-2">
              <div className="bg-white px-2 py-1 rounded">
                <FaCcVisa className="text-2xl text-blue-800" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcMastercard className="text-2xl text-red-600" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcPaypal className="text-2xl text-blue-600" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcApplePay className="text-2xl text-black" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center border-t pt-8 text-gray-400">
          © 2026 Techno. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
