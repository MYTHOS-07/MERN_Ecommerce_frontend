"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import bg from "@/assets/images/auth-bg.jpg";
import { HOME_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (user) router.push(HOME_ROUTE);
  }, [user, router]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={bg}
        alt="auth-bg"
        height={800}
        width={1200}
        className="h-full w-full absolute top-0 left-0 object-cover -z-1 select-none"
      ></Image>

      <div className="container max-auto p-3 md:p-6 dark:bg-gray-800 dark:text-white">{children}</div>
    </section>
  );
};

export default AuthLayout;
