import formatQuery from "@/helpers/queryFormatter";
import api from ".";
import config from "@/config/config";
import axios from "axios";

// Add Product
export const addProduct = async (data) => {
  const response = await api.post(`/api/products`, data);

  return response.data;
};

// get all products
export const getProducts = async (searchParams) => {
  const query = formatQuery(searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response.data;
};

// get products by their id
export const getProductsByID = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};

// Update Product
export const updateProduct = async (id, data) => {
  const response = await api.put(`/api/products/${id}`, data);

  return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);

  return response.data;
};
