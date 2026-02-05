import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import {
  FaBars,
  FaLaptop,
  FaMoon,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Navlink from "./Navlink";

export default function Header() {
  return (
    <div className="w-full dark:bg-gray-900 sticky top-0 shadow z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <h1 className="text-lg font-semibold text-primary">
            <Link href={HOME_ROUTE} className="flex items-center">
              <FaLaptop /> Techno
            </Link>
          </h1>
          {/* Navbar */}
          <Navlink />
          <div className="flex items-center">
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaMoon />
            </button>
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaShoppingCart />
            </button>
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaUser />
            </button>
            <button className="block md:hidden p-1 text-gray-700 dark:text-gray-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
