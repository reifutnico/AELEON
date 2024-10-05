import React from 'react';
import CardProduct from './cardForProductList'; 
import '../../styles/cardProductList.css'; 

const CardProductList = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardProductList;