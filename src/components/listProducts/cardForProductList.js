import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../../styles/cardProductList.css';

const CardProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentImage = isHovered ? product.secondImage : product.image;

  return (
    <Link to={`/product`} className="card-link"> {/* Envolvemos todo el contenido en el Link */}
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={currentImage} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default CardProduct;
