import React from 'react';
import Slider from "react-slick";
import { X, Trash2 } from 'lucide-react'; // Importar el icono de papelera
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camisa from '../../img/camisaPNG.png';
import '../../styles/cest.css';

const ProductCard = ({ brand, name, price, onClose }) => (
  <div className="product-card">
    <button className="close-button" onClick={onClose}>
      <X size={24} />
    </button>
    <div className="product-image-container">
      <img src={camisa} alt={`Imagen de ${name}`} className="product-image" />
      <p className="brand">{brand}</p>
    </div>
    <div className="product-content">
      <div className="product-info">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
      </div>
    </div>
  </div>
);

const ProductCarousel = () => {
  const products = [
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
  ];

  const handleClose = (index) => {
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="product-carousel">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              {...product} 
              onClose={() => handleClose(index)} 
            />
          ))}
        </Slider>
        <button className="trash-button">
          <Trash2 size={24} color="red" /> 
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
