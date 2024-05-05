import React, { useState } from 'react';
import foodTable from './foodTable.jsx'; // Assuming foodTable.jsx is in the same directory
import './FruitTable.css'; // Assuming you have a separate CSS file for styling

const FruitTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleRowClick = (name) => {
    setSearchTerm(name);
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  };


  const filteredFoodTable = foodTable.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render icons based on the value
  const renderIcon = (value) => {
    switch (value) {
      case 1:
        return <span className="material-icons orange-icon">&#xe3aa;</span>; // Use code point e3aa for 1
      case 2:
        return <span className="material-icons">&#xe3ac;</span>; // Use code point e3ac for 2
      case 3:
        return <span className="material-icons orangish-red-icon">&#xe1ae;</span>; // Use code point e1ae for 3 with orangish-red color
      default:
        return null; // Show nothing for 0 or other values
    }
  };

  return (
    <div className="container">
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {/* Clear search button */}
        {searchTerm && (
          <button className="clear-search" onClick={handleClearSearch}>
            <span className="material-icons">clear</span>
          </button>
        )}
      </div>

      {/* Icon references */}
      <div className="icon-reference-box">
        <div className="icon-reference">
          {renderIcon(1)} Southern Hemisphere
        </div>
        <div className="icon-reference">
          {renderIcon(2)} Northern Hemisphere
        </div>
        <div className="icon-reference">
          {renderIcon(3)} Northern & Southern Hemispheres
        </div>
      </div>

      {/* Fruit table */}
      <table className="fruit-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>May</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Aug</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
          </tr>
        </thead>
        <tbody>
          {filteredFoodTable.map((fruit) => (
            <tr key={fruit.id} onClick={() => handleRowClick(fruit.name)}>
              <td>{fruit.name}</td>
              <td>{renderIcon(fruit.Jan)}</td>
              <td>{renderIcon(fruit.Feb)}</td>
              <td>{renderIcon(fruit.Mar)}</td>
              <td>{renderIcon(fruit.Apr)}</td>
              <td>{renderIcon(fruit.May)}</td>
              <td>{renderIcon(fruit.Jun)}</td>
              <td>{renderIcon(fruit.Jul)}</td>
              <td>{renderIcon(fruit.Aug)}</td>
              <td>{renderIcon(fruit.Sep)}</td>
              <td>{renderIcon(fruit.Oct)}</td>
              <td>{renderIcon(fruit.Nov)}</td>
              <td>{renderIcon(fruit.Dec)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;