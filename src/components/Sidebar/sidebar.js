// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/sidebar.css';  
import logo from '../../img/LOGO_AE.png'; // Asegúrate de tener el logo disponible

const Sidebar = ({ isOpen, toggleSidebar, numberCategory}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
      <h2 className="sidebar-title">WOMEN: {numberCategory}</h2> {/* Muestra el número de categoría aquí */}
      <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-new">
        <span className="new-label">NEW</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
        <li><Link to="/productList">PRODUCT LIST</Link></li>
          <li><a href="/best-sellers">BEST SELLERS</a></li>
          <li><a href="/jackets">JACKETS</a></li>
          <li><a href="/blazers">BLAZERS</a></li>
          <li><a href="/dresses">DRESSES</a></li>
          <li><a href="/shirts">SHIRTS</a></li>
          <li><a href="/pants">PANTS</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
