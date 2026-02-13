"use client";

import React from "react";
import Logo from "../Logo";
import sidebarLinks from "@/constants/Sidebar";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";

const SideBar = () => {
  const pathname = usePathname();

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="mt-14 fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 shadow"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto shadow dark:bg-gray-950">
          <div className="px-3 py-3">
            <Logo />
          </div>

          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((item) => {
              if (!user.roles.some((role) => item.roles.includes(role))) {
                return <div key={item.route}></div>;
              }

              const isActive = pathname.startsWith(item.route);

              return (
                <li key={item.route}>
                  <Link
                    href={item.route}
                    className={`flex items-center px-2 py-1.5 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 group ${isActive ? "bg-primary/10 text-primary" : ""}`}
                  >
                    {item.Icon}
                    <span className="ms-3">{item.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="gap-3 flex items-center justify-center px-2 py-1.5 rounded-md w-full bg-red-600 hover:bg-red-700 text-white group"
              >
                <FaArrowRightFromBracket />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
