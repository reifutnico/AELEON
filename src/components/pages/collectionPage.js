import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegación en React Router
import model from '../../img/model.webp';
import back from '../../img/modelBack.webp';
import front from '../../img/front.webp';
import big from '../../img/modelBig.jpg';
import big2 from '../../img/modelbig2.jpg';

import '../../styles/coleccion.css';

const FullScreenSections = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handleClick = () => {
    navigate('/product'); // Redirigir a la página /product
  };

  return (
    <div className="full-screen-container">
      <section className="full-screen-section section-1">
        <div className="image-container">
          <img src={model} alt="White shirt model 3" onClick={handleClick} />
          <img src={model} alt="White shirt model 3" onClick={handleClick} />
        </div>
      </section>

      <section className="full-screen-section section-2">
        <div className="image-container">
          <img src={big2} alt="White shirt model 3" onClick={handleClick} />
        </div>
      </section>

      <section className="full-screen-section section-3">
        <div className="image-container">
          <div className="image-group">
            <img src={model} alt="White shirt model 3" onClick={handleClick} />
            <img src={model} alt="White shirt model 3" onClick={handleClick} />
          </div>
          <div className="image-group">
            <img src={model} alt="White shirt model 3" onClick={handleClick} />
            <img src={model} alt="White shirt model 3" onClick={handleClick} />
          </div>
        </div>
      </section>

      <section className="full-screen-section section-4">
        <div className="image-container">
          <img src={big} alt="White shirt model 3" onClick={handleClick} />
        </div>
      </section>
    </div>
  );
};

export default FullScreenSections;
