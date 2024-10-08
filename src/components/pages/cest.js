import React from 'react';
import { X } from 'lucide-react';
import '../../styles/cest.css';
import camisa from '../../img/camisaPNG.png';

const ProductCard = ({ brand, name, price }) => (
  <div className="product-card">
    <button className="close-button">
      <X size={24} />
    </button>
    <div className="product-image-container">
      <img src={camisa} alt={name} className="product-image" />
    </div>
    <div className="product-content">
      <p className="brand">{brand}</p>
      <div className="product-info">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
      </div>
    </div>
  </div>
);

const ProductGrid = () => {
  const products = [
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
    { brand: 'L | GRENN', name: 'CAMISA - ALGODON', price: '245$' },
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;