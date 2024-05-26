import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import RegisterPage from './pages/RegisterPage';
import Cart from './Cart';
import LoginPage from './pages/LoginPage';

function App() {
  // Sample products data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30 },
  ];

  return (
    <Router>
      <div className="App">
        <header>
        <h1>E-commerce App</h1>
        <nav>
          <ul className='navbuttons'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link> {/* Add link to Cart */}
            </li>
          </ul>
        </nav>
        </header>
        <Routes>
          {/* Route for ProductList */}
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Route for RegisterPage */}
          <Route path="/register" element={<RegisterPage />} />
          
          <Route path="/cart" element={<Cart />} /> 
          {/* Route for CartPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
