"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { forgotPassword } from "@/api/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ForgetPasswordPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  async function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then(() => {
        reset();
        toast.success("Reset password link has been sent successfully");
      })
      .catch(() => {
        toast.error("Reset password link sending Failed");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center justify-center md:w-lg px-4 py-10 bg-white dark:bg-slate-800 rounded-2xl mt-30 md:m-auto md:mx-30 md:my-20  dark:text-white">
      <div className="flex w-full flex-col max-w-96 gap-5">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="text-base text-gray-900/90 dark:text-gray-100">
            Please Enter your Password to receive reset password link
          </p>
          <div className="mt-5">
            <label className="font-medium">Email</label>
            <input
              placeholder="Enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              name="email"
              {...register("email")}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80 disabled:opacity-80"
          >
            Send reset Password link
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
          <p className="text-center py-8">
            Go back to Login
            <Link
              href={LOGIN_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
