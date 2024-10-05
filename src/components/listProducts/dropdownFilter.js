import React, { useState, useRef, useMemo } from 'react';
import { Check } from 'lucide-react';

const DropdownFilter = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  const selectedCount = useMemo(() => {
    return Object.values(checkedItems).filter(Boolean).length;
  }, [checkedItems]);

  const displayTitle = useMemo(() => {
    if (selectedCount === 0) return title;
    return `${title} (${selectedCount})`;
  }, [title, selectedCount]);

  return (
    <div className="dropdown-filter">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{displayTitle}</h3>
        <span className={`expand-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div 
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{
          '--content-height': isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
      >
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={checkedItems[option] || false}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="checkmark">
                  {checkedItems[option] && <Check size={12} />}
                </span>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownFilter;