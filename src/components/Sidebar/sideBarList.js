import React from 'react';
import ButtonFilter from '../listProducts/buttonFilter';
import DropdownFilter from '../listProducts/dropdownFilter';

import '../../styles/sidebarList.css';

const SidebarList = () => {
  const buttonOptions = ['New', 'Sale', 'Trending', 'Clearance'];

  const filters = [
    { title: 'Category', options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Size', options: ['S', 'M', 'L', 'XL'] },
    { title: 'Color', options: ['Red', 'Blue', 'Green', 'Black'] },
    { title: 'Price', options: ['$0-$50', '$50-$100', '$100-$200', '$200+'] },
  ];

  return (
    <div className="sidebar-list">
      <ButtonFilter options={buttonOptions} />
      {filters.map((filter, index) => (
        <DropdownFilter key={index} title={filter.title} options={filter.options} />
      ))}

      <button className="search-btn">Search</button>
      <button className="search-btn">Clean</button>

    </div>
  );
};

export default SidebarList;
