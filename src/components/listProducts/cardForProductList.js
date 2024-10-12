import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../../styles/cardProductList.css';

const CardProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentImage = isHovered ? product.secondImage : product.image;

  return (
    <Link to={`/product`} className="card-link"> 
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={currentImage} alt={product.nombre} />
        <h3>{product.nombre}</h3>
        <p>${product.precio}</p>
      </div>
    </Link>
  );
};

export default CardProduct;
