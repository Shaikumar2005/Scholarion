import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <p className="about-intro">
        We are a passionate research startup focused on helping students and scholars succeed in the academic world. 
        At <strong>Scholarion</strong>, we assist you in publishing research papers, building standout portfolios, and creating professional resumes tailored to your career goals.
      </p>

      <div className="about-section">
        <h3>💡 What We Do</h3>
        <ul>
          <li>Research paper writing and guidance</li>
          <li>Personal portfolio website creation</li>
          <li>Resume design and optimization</li>
          <li>Project development assistance</li>
        </ul>
      </div>

      <div className="stats-box">
        <div className="stat-item">
          <h4>20+</h4>
          <p>Students & Researchers</p>
        </div>
        <div className="stat-item">
          <h4>150+</h4>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h4>100+</h4>
          <p>Projects Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default About;
