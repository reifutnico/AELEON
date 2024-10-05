import React, { useState } from 'react';
import '../../styles/cardProductList.css';

const CardProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentImage = isHovered ? product.secondImage : product.image;

  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={currentImage} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default CardProduct;