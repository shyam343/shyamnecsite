import React from 'react';
import './Sidebar.css'; // Create this CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SAHNECPREPRATION</h2>
      <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li>
          <span>
            <i className="fas fa-calculator"></i> Computer Engineering 
          </span>
          <a href="https://shyam-nec-past-qa.netlify.app/" target="_blank" rel="noopener noreferrer">Past QN.</a>
        </li>
        <li><i className="fas fa-chart-bar"></i> Civil Engineering.</li>
        <li><i className="fas fa-language"></i> Electrical & Electronic Engineering.</li>
        <li><i className="fas fa-brain"></i> Mechanical Engineering</li>
      </ul>
    </div>
  );
};

export default Sidebar;

