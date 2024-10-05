import React from 'react';
import '../../styles/dropdownFilter.css';

const ButtonFilter = ({ options }) => {
  return (
    <div className="button-filter">
      {options.map((option, index) => (
        <button key={index} className="filter-btn">{option}</button>
      ))}
    </div>
  );
};

export default ButtonFilter;