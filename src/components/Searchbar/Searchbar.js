import React from 'react';
import './searchbar.css';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className="flex-container">
      <Link to="/" className="flex-item btn btn-back">
        Go Back
      </Link>
      <input
        className="flex-item searchbar"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searchbar;
