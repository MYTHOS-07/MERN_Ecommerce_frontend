import React from "react";
import { FaGift } from "react-icons/fa";
import Image from "next/image";
import banner from "@/assets/images/product-banner.jpg";

const ProductsBanner = () => {
  return (
    <section className="pb-8 select-none">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden text-white  px-10 bg-linear-to-r from-primary/10 to-secondary/50 w-full h-52 rounded-2xl shadow-sm">
          <Image
            height={600}
            width={900}
            src={banner ?? ""}
            alt="product-banner-img"
            className="w-full absolute left-0 bottom-0 -z-1"
          />
          <div className="flex justify-between items-center h-full mx-auto max-w-6xl">
            <div className="flex flex-col justify-center items-start">
              <span className="">Black Friday sale</span>
              <h2 className="text-5xl font-semibold mb-3">
                20% off every products
              </h2>
              <button className="bg-white rounded-xl px-5 py-1 text-black">
                Buy Now
              </button>
            </div>
            <div className="px-10">
              <FaGift className="text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
