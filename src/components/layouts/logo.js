import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import logo from '../../img/LOGO_AELEON.png'; // Asegúrate de que la ruta sea correcta
import '../../styles/header.css'; // Asegúrate de incluir los estilos para el logo

const Logo = () => {
  return (
    <div className="header-container">

    <div className="header"> {/* Mantiene la misma clase que el Header */}
      <div className="logo">
        {/* Envuelve la imagen del logo en un Link */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Espacio vacío para que ocupe el mismo espacio que el Header */}
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
