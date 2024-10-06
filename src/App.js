import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/home';
import Header from './components/layouts/header';
import Logo from './components/layouts/logo'; // Importa el nuevo logo
import Sidebar from './components/Sidebar/sidebar';
import Login from './components/pages/login';
import Register from './components/pages/register';
import ProductList from './components/pages/productList';
import ProductPage from './components/pages/productPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categoryNumber, setCategoryNumber] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); 

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const toggleSidebarHome = () => {
    setIsSidebarOpen(false);
    setSelectedOption(null);  
  };
  const toggleSidebarList = () => {
    setIsSidebarOpen(false);
    setSelectedOption(null);  

  };

  const handleCategoryChange = (number) => {
    setCategoryNumber(number);
    setSelectedOption(number);
  };

  const location = useLocation(); 

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isProductListPage = location.pathname === '/productList'; // Nueva variable

  useEffect(() => {
    if (isAuthPage) {
      setIsSidebarOpen(false); 
      setSelectedOption(null);  
    }
  }, [location.pathname]);


  useEffect(() => {
    if (isProductListPage) {
      setIsSidebarOpen(false); 
    }
  }, [location.pathname]);



  return (
    <>
      {isAuthPage ? (
        <Logo />
      ) : (
        <Header toggleSidebar={toggleSidebar} numberCategory={handleCategoryChange} selectedOption={selectedOption} />
      )}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} numberCategory={categoryNumber} />
      <Routes>
        <Route path="/" element={<Home categoryNumber={categoryNumber} toggleSidebarHome={toggleSidebarHome} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productList" element={<ProductList  toggleSidebarList={toggleSidebarList}  />} />
        <Route path="/product" element={<ProductPage />} />

      </Routes>
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
