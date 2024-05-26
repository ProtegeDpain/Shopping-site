import React from 'react';

const ProductComponent = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Prices : ${product.price}</p>
      {/* You can add more details like image, ratings, etc. */}
    </div>
  );
}

export default ProductComponent;
