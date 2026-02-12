import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex items-center mb-4 space-x-4">
              <Image
                height={64}
                width={64}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
                alt="user-image"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-xl text-gray-800 dark:text-gray-100">
                  John Doe
                </h4>
                <div className="flex text-yellow-500 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam,
              illo est voluptatum nam alias ex! Quia iste debitis repellendus
              porro a hic, repudiandae perferendis voluptatibus nobis,
              perspiciatis magnam non at laudantium error ipsa ad neque illum
              tempore quo ex. Sunt, illum?
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex items-center mb-4 space-x-4">
              <Image
                height={64}
                width={64}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
                alt="user-image"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-xl text-gray-800 dark:text-gray-100">
                  John Doe
                </h4>
                <div className="flex text-yellow-500 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam,
              illo est voluptatum nam alias ex! Quia iste debitis repellendus
              porro a hic, repudiandae perferendis voluptatibus nobis,
              perspiciatis magnam non at laudantium error ipsa ad neque illum
              tempore quo ex. Sunt, illum?
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex items-center mb-4 space-x-4">
              <Image
                height={64}
                width={64}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
                alt="user-image"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-xl text-gray-800 dark:text-gray-100">
                  John Doe
                </h4>
                <div className="flex text-yellow-500 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam,
              illo est voluptatum nam alias ex! Quia iste debitis repellendus
              porro a hic, repudiandae perferendis voluptatibus nobis,
              perspiciatis magnam non at laudantium error ipsa ad neque illum
              tempore quo ex. Sunt, illum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
