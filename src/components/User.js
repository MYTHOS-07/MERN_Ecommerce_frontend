"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { logout } from "@/redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  ORDER_PAGE_ROUTE,
  PROFILE_ROUTE,
} from "@/constants/routes";

const User = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  if (!user)
    return (
      <Link
        href={LOGIN_ROUTE}
        className="text-white bg-primary rounded-lg px-6 h-9 flex items-center"
      >
        Login
      </Link>
    );

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="border-2 rounded-full h-9 min-w-9 flex items-center justify-center text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary cursor-pointer"
      >
        <FaUser />
      </button>
      {show && (
        <>
          <div
            onClick={() => setShow(!show)}
            className="fixed top-0 left-0 bottom-0 right-0"
          >
            <div className=" absolute top-10 right-0 bg-white shadow rounded-md dark:bg-gray-800">
              <div className="border-b border-gray-300 dark:border-gray-700 p-4 select-none">
                <h4 className="text-gray-800 dark:text-white text-lg">
                  {user.name}
                </h4>
                <h4 className="text-primary dark:text-gray-400">
                  {user.email}
                </h4>
              </div>
              <div className="flex flex-col py-2">
                <Link
                  href={DASHBOARD_ROUTE}
                  className="py-1 px-4 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <Link
                  href={ORDER_PAGE_ROUTE}
                  className="py-1 px-4 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  Orders
                </Link>
                <Link
                  href={PROFILE_ROUTE}
                  className="py-1 px-4 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <Link
                  href={""}
                  className="py-1 px-4 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  Settings
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="py-1 px-4 text-red-600 dark:text-red-100 dark:hover:bg-red-700 hover:bg-red-200 text-left cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
