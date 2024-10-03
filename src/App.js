import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Header from './components/layouts/header';
import Sidebar from './components/Sidebar/sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categoryNumber, setCategoryNumber] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handleCategoryChange = (number) => {
    setCategoryNumber(number); 
  };
  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} numberCategory={handleCategoryChange} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  numberCategory={categoryNumber}/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
