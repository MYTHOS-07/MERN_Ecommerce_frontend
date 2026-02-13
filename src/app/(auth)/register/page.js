"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { registerUser } from "@/redux/auth/authActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/form/passwordInput";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  async function submitForm(data) {
    const registerData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
      address: {
        city: data.city,
        province: data.province,
      },
    };

    dispatch(registerUser(registerData));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1000 });
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center md:w-lg px-4  py-4 md:mt-20 lg:mt-1 bg-white dark:text-white dark:bg-slate-900 rounded-2xl m-auto md:mx-30">
      <div className="flex w-full flex-col max-w-96">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="mt-4 text-base dark:text-gray-100 text-gray-900/90">
            Please enter your details to register
          </p>
          <div className="mt-4">
            <label className="font-medium">Name</label>
            <input
              placeholder="Enter your full name"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="name"
              {...register("name")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Email</label>
            <input
              placeholder="Enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Phone Number</label>
            <input
              placeholder="Enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="tel"
              {...register("phone")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Address</label>
            <div className="flex justify-center items-center gap-5">
              <input
                placeholder="city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("city")}
              />
              <select
                id="province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                {...register("province")}
              >
                <option selected className="text-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-950">
                  Province
                </option>
                <option value="Koshi" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Koshi</option>
                <option value="Bagmati" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Bagmati</option>
                <option value="Gandaki" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Gandaki</option>
                <option value="Madesh" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Madesh</option>
                <option value="Sudur-Pachim" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Sudur-Pachim</option>
                <option value="Lumbini" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Lumbini</option>
                <option value="Karnali" className="dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950">Karnali</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <div className="mt-4">
            <label className="font-medium">Confirm Password</label>
            <PasswordInput
              {...register("confirmPassword")}
              placeholder="Enter your password to confirm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80 disabled:opacity-80"
          >
            Sign In
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
          <p className="text-center py-5">
            Already have an account?
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

export default RegisterPage;
