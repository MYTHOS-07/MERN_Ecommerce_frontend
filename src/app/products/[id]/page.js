import config from "@/config/config";
import axios from "axios";
import React from "react";

async function fetchById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
}

export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  const product = await fetchById(id);

  return {
    title: product?.name,
  };
};

const ProductByIdPage = async ({ params }) => {
  const id = (await params).id;

  const product = await fetchById(id);

  return (
    <>
      <h1 className="text-5xl">Name: {product?.name}</h1>
      <p>Category: {product?.category} </p>
      <p>Price: {product?.price} </p>
    </>
  );
};

export default ProductByIdPage;
