import React, { useState } from 'react';
import '../../styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejas la lógica del registro

    // Simulando el envío de un correo electrónico
    setEmailSent(true);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h1>REGISTER</h1>
          <p>PERSONAL DATA</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" name="email" aria-label="Email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
                aria-label="Password"
                required
              />
              <span 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" aria-label="Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">LASTNAME</label>
              <input type="text" id="lastname" name="lastname" aria-label="Lastname" required />
            </div>
            
            <button type="submit" className="login-button">REGISTER</button>
          </form>

          {emailSent && (
            <p className="confirmation-message">A confirmation email has been sent. Please confirm your email.</p>
          )}
        </div>

        <div className="register-section">
          <p>DO YOU ALREADY HAVE AN ACCOUNT?</p>
          <Link to="/login" className="register-link">
          <button className="register-button">LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
