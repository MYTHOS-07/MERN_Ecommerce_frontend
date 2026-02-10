import api from "./index.js";

export async function createOrder(data) {
  const response = await api.post(`/api/orders`, data);

  return response.data;
}

export async function getAllOrders(status) {
  let url = "/api/orders";

  if (status) url += `?status=${status}`;

  const response = await api.get(url);

  return response.data;
}

export async function getOrdersByUser(status) {
  let url = "/api/orders/user";

  if (status) url += `?status=${status}`;

  const response = await api.get(url);

  return response.data;
}

export async function cancelOrder(id) {
  const response = await api.put(`/api/orders/${id}/cancel`);

  return response.data;
}

export async function payViakhalti(id) {
  const response = await api.post(`/api/orders/${id}/payment/khalti`);

  return response.data;
}

export async function confirmPayment(id, status) {
  const response = await api.put(`/api/orders/${id}/confirm-payment`, {
    status,
  });

  return response.data;
}

export async function updateStatus(id, status) {
  const response = await api.put(`/api/orders/${id}/status`, {
    status,
  });

  return response.data;
}

export async function payViaCash(id) {
  const response = await api.post(`/api/orders/${id}/payment/cash`);

  return response.data;
}

export async function payVaiStripe(id) {
  const response = await api.post(`/api/orders/${id}/payment/stripe`);

  return response.data;
}
