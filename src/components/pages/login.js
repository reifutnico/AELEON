import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h1>LOG IN</h1>
          <p>Access your account</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" name="email" aria-label="Email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
                aria-label="Password"
              />
              <span 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            
            <button type="submit" className="login-button">LOG IN</button>
          </form>
          
          <a href="#" className="forgot-password">¿Have you forgotten your password?</a>
        </div>
        
        <div className="register-section">
          <p>¿DO YOU NEED AN ACCOUNT?</p>
          <Link to="/register" className="register-link">
          <button className="register-button">REGISTER</button>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Login;
