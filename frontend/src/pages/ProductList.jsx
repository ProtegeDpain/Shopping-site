import React from 'react';
import ProductComponent from '../components/ProductComponent';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={product.id}>
        <ProductComponent product={product} />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      ))}
    </div>
  );
}

export default ProductList;
