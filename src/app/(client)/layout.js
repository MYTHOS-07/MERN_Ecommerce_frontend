"use client";

import React, { useEffect } from "react";
import SideBar from "@/components/admin/Sidebar";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ClientLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user, router]);

  if (user)
    return (
      <>
        <SideBar />
        <div className="p-6 sm:ml-64 dark:text-white">{children}</div>
      </>
    );

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default ClientLayout;