import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';  
import logo from '../../img/LOGO_AELEON.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar, numberCategory, selectedOption }) => {

  const handleSelect = (value) => {
    numberCategory(value);
    toggleSidebar();
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
        <Link to="/login" className="login">
            LOG IN
        </Link>

        <Link to="/cart" className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
