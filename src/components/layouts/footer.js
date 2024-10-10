import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/LOGO_AELEON.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Aeleon Logo" />
        </div>
        <div className="footer-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Email: info@aeleon.com</p>
          <p>Teléfono: +34 123 456 789</p>
          <p>Dirección: Calle Principal, 123, 28001 Madrid</p>
        </div>
        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            {/* Aquí puedes añadir iconos de redes sociales */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aeleon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;