import React, { useEffect, useState } from 'react';
import { fetchProducts, addToCart } from '../services/api';

const ProductList = ({ addToCartHandler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response);
    };
    getProducts();
  }, []);

  return (
    <div className="product-list">
      <div className='product-grid'> 
        {products.map((product) => (
          <div key={product.id} className='product-item'>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
