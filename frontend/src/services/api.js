const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
};

export const fetchCart = async () => {
  const response = await fetch(`${API_BASE_URL}/cart`);
  return response.json();
};

export const addToCart = async (product) => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ product })
  });
  return response.json();
};

export const removeFromCart = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
    method: 'DELETE'
  });
  return response.json();
};
