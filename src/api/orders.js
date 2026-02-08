import api from ".";

export async function createOrder(data) {
  const response = await api.post(`/api/order`, data);

  return response.data;
}


