import React from 'react';
import './App.css';
import './navbar.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>Scholarion</h1>
        </div>
        <nav className="navbar">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#reviewers">REVIEWERS</a>
        </nav>
      </header>

      <section id="home" className="section">
        <h2>Welcome to Scholarion Research</h2>
        <p>Innovating the Future of Research and Discovery</p>
      </section>

      <section id="about" className="section">
        <h3>About Us</h3>
        <p>We are committed to groundbreaking research and development, pushing the boundaries of innovation.</p>
      </section>

      <section id="services" className="section">
        <h3>Our Services</h3>
        <p>We offer a wide range of services to help you accelerate your research projects and innovations.</p>
      </section>

      <section id="reviewers" className="section">
        <h3>Reviewers</h3>
        <p>Meet our expert reviewers who guide and support our research journey with insightful feedback.</p>
      </section>

      <footer>
        <p>&copy; 2025 Scholarion Research Startup. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
