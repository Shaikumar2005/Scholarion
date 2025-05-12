import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../images/Logo (Scholarion).png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Scholarion Logo" className="logo-img" />
        <span>Scholarion</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviewers">Reviewers</Link></li>

        {/* Internships Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown-toggle">Internships ▾</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/internships/research">Research Intern</Link></li>
              <li><Link to="/internships/content">Content Editor Intern</Link></li>
              <li><Link to="/internships/video">Video Editor</Link></li>
              <li><Link to="/internships/graphic">Graphic Designer</Link></li>
              <li><Link to="/internships/frontend">Frontend Developer</Link></li>
              <li><Link to="/internships/backend">Backend Developer</Link></li>
            </ul>
          )}
        </li>

        <li><button className="nav-button">Hire a Writer</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
