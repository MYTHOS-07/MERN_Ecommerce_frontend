"use client";

import { getTotalCount } from "@/api/products";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationPage = ({ currentPage, pageLimit = 10 }) => {
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / pageLimit);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i.toString());
  }

  useEffect(() => {
    getTotalCount().then((data) => setTotalCount(data));
  }, []);

  return (
    <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0">
      <span className="flex items-center gap-1 text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white">
          {pageLimit * (currentPage - 1) + 1} - {pageLimit * currentPage}
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(totalPages, pageLimit * currentPage)}
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <Link
            href={`${PRODUCT_MANAGEMENT_ROUTE}?page=${Math.max(1, currentPage - 1)}`}
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft />
          </Link>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <Link
              href={`${PRODUCT_MANAGEMENT_ROUTE}?page=${page}`}
              className={`${page == currentPage ? "bg-primary/10 dark:bg-primary" : " bg-white dark:border-gray-700"} flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800   dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={`${PRODUCT_MANAGEMENT_ROUTE}?page=${Math.min(totalPages, Number.parseInt(currentPage) + 1)}`}
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationPage;
