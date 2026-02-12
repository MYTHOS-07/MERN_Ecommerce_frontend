"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";
import PasswordInput from "@/components/form/passwordInput";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { loginUser } from "@/redux/auth/authActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  async function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center md:w-lg px-4 py-10 bg-white dark:bg-slate-800 text-white rounded-2xl mt-30 md:m-auto md:mx-30 md:my-20 ">
      <div className="flex w-full flex-col max-w-96 gap-5">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="text-base text-gray-900/90 dark:text-gray-100">
            Please enter your credentials to login
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
          <div className="mt-3">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <Link
            href={FORGOT_PASSWORD_ROUTE}
            className="text-right block p-2 text-primary hover:underline my-2 text-sm"
          >
            Forget password
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80 disabled:opacity-80"
          >
            Login
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
          <p className="text-center py-8">
            Don&apos;t have an account?
            <Link
              href={REGISTER_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
