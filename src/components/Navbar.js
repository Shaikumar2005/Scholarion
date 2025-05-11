import React from 'react';
import './Navbar.css';
import logoImage from '../images/Logo (Scholarion).png'; // ✅ Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Scholarion Logo" className="logo-img" />
        <span>Scholarion</span>
      </div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/reviewers">Reviewers</a></li>
        <li><button className="nav-button">Hire a Writer</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
