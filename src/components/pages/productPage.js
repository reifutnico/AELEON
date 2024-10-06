import React, { useState } from 'react';
import '../../styles/productPage.css';
import model from '../../img/model.webp';
import back from '../../img/modelBack.webp';
import front from '../../img/front.webp';

const ProductPurchaseScreen = () => {
  const [selectedFoto, setSelectedFoto] = useState(model);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const colors = ['#D2B48C', '#2F4F4F', '#000080'];
  const sizes = ['XS', 'S', 'L', 'XL', 'XXL'];
  const mainImage = model;
  const thumbnails = [model,back,front,back];

  return (
    <div className="product-container">
      <div className="image-section">
        <img src={selectedFoto} alt="Main product view" className="main-image" />
        <div className="thumbnails">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product view ${index + 1}`}
              className="thumbnail"
              onClick={() => setSelectedFoto(img)}  
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">CAMISA - ALGODON</h2>
        <p className="product-price">245.990</p>
        <div className="color-selection">
          <p className="section-title">COLOR</p>
          <div className="color-options">
            {colors.map((color) => (
              <div
                key={color}
                className={`color-option ${color === selectedColor ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <div className="size-selection">
          <p className="section-title">SIZES</p>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-option ${size === selectedSize ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="quantity-selector">
          <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
        <button className="add-button">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductPurchaseScreen;
