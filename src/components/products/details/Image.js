"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const ProductImage = ({ images }) => {
  const [image, setImage] = useState(images[0]);

  return (
    <div>
      <div className="flex justify-center">
        {image ? (
          <Image
            className="w-auto h-100"
            src={image}
            alt="product-item-image"
            height={800}
            width={1200}
          />
        ) : (
          <div className="h-100 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
            <FaImage className="text-9xl text-gray-500" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-3 h-28 mt-5">
        {images.map((item, index) => (
          <Image
            key={index}
            className={`w-28 h-28 p-2 rounded-lg border-2 ${item == image ? "border-primary" : "border-gray-300"} object-cover`}
            src={item}
            onClick={() => setImage(item)}
            alt="product-item-image"
            height={800}
            width={1200}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
