import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../styles/productList.css';
import CardProductList from '../listProducts/cardProductList';
import Sidebar from '../Sidebar/sideBarList';
import model from '../../img/model.webp';
import back from '../../img/modelBack.webp';
const limit=12,offset=0;
const ProductList = ({ toggleSidebarList }) => {
  const [productos,setProductos]=useState([""])
  useEffect(()=>{
    async function getData() {
      const res=await axios.get("/producto?limit="+limit+"&offset="+offset)
      setProductos(res.data.data)
    }
    getData()
    console.log(productos," AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    
  },[])
  const productListData = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 29.99,
      image: model,
      secondImage: back
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 49.99,
      image: model,
      secondImage: back
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 60,
      image: model,
      secondImage: back
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 60,
      image: model,
      secondImage: back
    },
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 29.99,
      image: model,
      secondImage: back
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 49.99,
      image: model,
      secondImage: back
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 60,
      image: model,
      secondImage: back
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 60,
      image: model,
      secondImage: back
    },
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 29.99,
      image: model,
      secondImage: back
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 49.99,
      image: model,
      secondImage: back
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 60,
      image: model,
      secondImage: back
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 60,
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