import React from 'react'; 
import '../../styles/productList.css';  
import CardProductList from '../listProducts/cardProductList'; 

import model from '../../img/model.webp';
import back from '../../img/modelBack.webp';

const ProductList = ({toggleSidebarList}) => {
  const productListData = [
    {
      id: 1,
      title: 'Producto 1',
      price: 29.99,
      image: model,
      secondImage: back
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 49.99,
      image: model,
      secondImage: back
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 60,
      image: model,
      secondImage: back
    }
  ];
  const handleClick = () => {
    toggleSidebarList();  
  };

  return (
    <div className="product-list-container" onClick={handleClick}>
      <h2>Lista de Productos</h2>
      <CardProductList products={productListData} />
    </div>
  );
};

export default ProductList;
