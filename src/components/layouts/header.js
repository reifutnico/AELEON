// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/header.css';  
import logo from '../../img/LOGO_AELEON.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar,numberCategory }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log(`Selected: ${value}`);
    toggleSidebar(); 
    numberCategory(value)
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a 
                href="#" 
                onClick={() => handleSelect(1)} 
                className={selectedOption === 1 ? 'active' : ''}
              >
                MEN
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => handleSelect(2)} 
                className={selectedOption === 2 ? 'active' : ''}
              >
                WOMEN
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => handleSelect(3)} 
                className={selectedOption === 3 ? 'active' : ''}
              >
                KIDS
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="user-options">
          <a href="#" className="login">LOG IN</a>
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
