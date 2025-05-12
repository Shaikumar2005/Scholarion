import React from 'react';
import './Internships.css'; // Ensure the CSS file is imported

function Internship() {
  // Google Form Link
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc0DYmmxOsoB6Z7Sc8Rz1ZKSqvmOtTlXnV73-IuizmKZ_JNow/viewform?usp=header";

  // Function to handle the Apply button click
  const handleApplyClick = () => {
    window.open(googleFormLink, "_blank");  // Opens the Google Form in a new tab
  };

  return (
    <div className="internship-page">
      <h1 className="title">Internship Opportunities at Scholarion</h1>

      <p className="description">
        Explore internship roles that offer real-world experience and skill development.
      </p>
      <div className="internship-list">
        {/* Research Intern Card */}
        <div className="intern-card">
          <h3>Research Intern</h3>
          <p>Collaborate on real research publications and journals.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>

        {/* Content Editor Intern Card */}
        <div className="intern-card">
          <h3>Content Editor Intern</h3>
          <p>Help us craft polished, high-quality academic content.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>

        {/* Video Editor Card */}
        <div className="intern-card">
          <h3>Video Editor</h3>
          <p>Produce video lectures, animations, and promotional reels.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>

        {/* Graphic Designer Card */}
        <div className="intern-card">
          <h3>Graphic Designer</h3>
          <p>Design banners, posters, and website visuals.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>

        {/* Frontend Developer Card */}
        <div className="intern-card">
          <h3>Frontend Developer</h3>
          <p>Create user-friendly web interfaces using React.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>

        {/* Backend Developer Card */}
        <div className="intern-card">
          <h3>Backend Developer</h3>
          <p>Develop APIs, manage databases, and build server-side logic.</p>
          <button className="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Internship;
