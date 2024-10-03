/*import React from 'react';
import './Header.css';
import IMG1 from '../../assets/sahnec.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={IMG1} alt="SahNec Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Header;

*/


import React, { useState } from 'react';
import './Header.css';
import IMG1 from '../../assets/sahnec.png';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm); // Call the onSearch function passed from the parent
    }
    setSearchTerm(''); // Clear the input after search
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={IMG1} alt="SahNec Logo" />
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} // Update the state on input change
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
