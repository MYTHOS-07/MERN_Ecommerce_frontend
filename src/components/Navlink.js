"use client";
import navLinks from "@/constants/navlinks";
import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink) => {
        const isActive =
          pathname == navLink.route ||
          (navLink.route !== HOME_ROUTE && pathname.startsWith(navLink.route));

        return (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"} font-medium hover:text-primary dark:hover:text-primary`}
          >
            {navLink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlink;
