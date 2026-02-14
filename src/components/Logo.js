import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { FaLaptop } from "react-icons/fa";

const Logo = ({ className = "text-lg" }) => {
  return (
    <h1 className={`font-semibold text-primary ${className}`}>
      <Link href={HOME_ROUTE} className="flex items-center gap-2">
        <FaLaptop />
        Techi
      </Link>
    </h1>
  );
};

export default Logo;
