import React from 'react';
import '../../styles/productList.css';
import CardProductList from '../listProducts/cardProductList';
import Sidebar from '../Sidebar/sideBarList';
import model from '../../img/model.webp';
import back from '../../img/modelBack.webp';

const ProductList = ({ toggleSidebarList }) => {
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
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 60,
      image: model,
      secondImage: back
    },
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
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 60,
      image: model,
      secondImage: back
    }
  ];

  const handleClick = () => {
    toggleSidebarList();
  };

  return (
    <div className="product-page-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="product-list-container" onClick={handleClick}>
          <CardProductList products={productListData} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;