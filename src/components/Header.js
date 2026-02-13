import { FaBars } from "react-icons/fa";

import User from "./User";
import ThemeToggler from "./ThemeToggler";
import NavLink from "./NavLink";
import Logo from "./Logo";
import HeaderCart from "./HeaderCart";

export default function Header() {
  return (
    <div className="w-full bg-white dark:bg-gray-950 sticky top-0 shadow z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLink />
          <div className="flex items-center gap-2">
            <ThemeToggler />
            <HeaderCart />
            <User />
            <button className="block md:hidden px-2 py-1 text-gray-700 dark:text-gray-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
