import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../img/LOGO_AELEON.png'; 
import '../../styles/header.css';

const Logo = () => {
  return (
    <div className="header-container">

    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav style={{ display: 'none' }}>
        <ul className="nav-links">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="user-options" style={{ display: 'none' }}>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
    </div>

  );
};

export default Logo;
