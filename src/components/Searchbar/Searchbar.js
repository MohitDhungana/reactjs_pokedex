import React from 'react';
import './searchbar.css';

const Searchbar = () => {
  return (
    <div className="flex-container">
      <input
        className="flex-item searchbar"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searchbar;
