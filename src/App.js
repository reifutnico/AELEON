import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Header from './components/layouts/header';
import Sidebar from './components/Sidebar/sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categoryNumber, setCategoryNumber] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const toggleSidebarHome = () => {
    setIsSidebarOpen(false);
    setSelectedOption(null);  // Reset the selected option when sidebar closes
  };

  const handleCategoryChange = (number) => {
    setCategoryNumber(number);
    setSelectedOption(number); // Update the selected option when a category is selected
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} numberCategory={handleCategoryChange} selectedOption={selectedOption} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} numberCategory={categoryNumber} />
      <Routes>
        <Route path="/" element={<Home categoryNumber={categoryNumber} toggleSidebarHome={toggleSidebarHome} />} />
      </Routes>
    </Router>
  );
};

export default App;
