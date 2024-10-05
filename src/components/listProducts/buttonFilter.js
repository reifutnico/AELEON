import React, { useState } from 'react';
import '../../styles/dropdownFilter.css';

const ButtonFilter = ({ options }) => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleButtonClick = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(prevState => prevState.filter(i => i !== index));
    } else {
      setSelectedIndexes(prevState => [...prevState, index]);
    }
  };

  return (
    <div className="button-filter">
      {options.map((option, index) => (
        <button 
          key={index} 
          className={`filter-btn ${selectedIndexes.includes(index) ? 'active' : ''}`} 
          onClick={() => handleButtonClick(index)} 
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
