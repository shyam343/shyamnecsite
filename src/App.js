/*import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
      <Header />
      <Content />
      </div>
    </div>
  );
};

export default App;
*/


import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term); // Set the search term
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header onSearch={handleSearch} />
        <Content searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;
