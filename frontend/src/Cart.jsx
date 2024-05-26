import React, { useState } from 'react';
import CartPage from './pages/CartPage';

const Cart = () => {
  // Sample products data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30 },
  ];

  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
      <div className="Cart">
        <h2>Cart</h2>
        <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
  );
};

export default Cart;
