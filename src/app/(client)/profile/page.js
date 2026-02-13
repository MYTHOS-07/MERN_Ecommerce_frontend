"use client";

import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import { updateUser } from "@/api/users";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setUser } from "@/redux/auth/authSlice";
import ProfileImage from "@/components/profile/Image";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState();

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    values: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      street: user.address.street,
      province: user.address.province,
      city: user.address.city,
    },
  });

  function submitForm(data) {
    setLoading(true);

    const refinedData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: {
        street: data.street,
        province: data.province,
        city: data.city,
      },
    };

    updateUser(user._id, refinedData)
      .then((data) => {
        dispatch(setUser(data));
        toast.success("User updated successfully");
      })
      .catch(() => toast.error("User update failed"))
      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          General Information
        </h2>
        <ProfileImage />
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
                {...register("name")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="disabled:bg-gray-100 dark:disabled:bg-gray-500 disabled:text-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="jhon@gmail.com"
                required
                disabled
                {...register("email")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9845612341"
                required
                {...register("phone")}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="street"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kabir Tole"
                required
                {...register("street")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="province"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Province
              </label>

              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("province")}
              >
                <option value="Koshi">Koshi</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Madesh">Madesh</option>
                <option value="Sudur-Pachim">Sudur-Pachim</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kathmandu"
                required
                {...register("city")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex gap-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary hover:bg-blue-800"
          >
            Update Profile
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
