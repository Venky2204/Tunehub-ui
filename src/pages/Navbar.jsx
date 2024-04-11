import React from 'react'
import './Navbar.css'
import './AdminHome.jsx';

const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <center>
          <h1>TUNEHUB</h1>
        </center>
        <a href="/" >Logout</a>
      </div>
      
    </nav>
  );
};

export default Navbar