import ProductsBanner from "@/components/products/ProductsBanner";
import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <ProductsBanner />
      <section className="py-16">
        <div className="container mx-auto px-6">{children}</div>
      </section>
    </div>
  );
};

export default ProductsLayout;
