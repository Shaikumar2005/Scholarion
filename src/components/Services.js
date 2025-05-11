import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <span className="tick">✔️</span>
          Research Paper Publication
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Reviewer Matching
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Conference Management
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Academic Network Building
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Software Projects Building
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Personal Portfolio
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Professional Portfolio
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Resume (ATS Friendly)
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Aptitude Codesheet
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Event Organizing
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Events Sponsorships
        </div>
        <div className="service-item">
          <span className="tick">✔️</span>
          Internships (UG & PG Students)
        </div>
      </div>

      {/* Stats Box Section */}
      <div className="stats-box">
        <div className="stat-item">
          <h3>20+ Students & Researchers</h3>
          <p>Projects Done</p>
        </div>
        <div className="stat-item">
          <h3>100+ Projects</h3>
          <p>Delivered</p>
        </div>
        <div className="stat-item">
          <h3>150+ Projects</h3>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
