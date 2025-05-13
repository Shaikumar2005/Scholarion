import React from 'react';
import './Home.css';
import headerImage from '../images/header-image.jpeg';

function Home() {
  return (
    <div className="home-wrapper">

      {/* Hero Section */}
      <section className="hero-section">
      <div className="hero-content">
  <h1>Get Your service: <br /> custom help for students, Research scholars & professionals.</h1>
  <p>End-to-End guidance for academic research, writing and publication</p>
  <button className="cta-button">Place an order</button>
</div>

        <div className="hero-image">
          <img src={headerImage} alt="Scholar illustration" />
        </div>
      </section>

      {/* Reviews */}
      <section className="review-section">
        <div className="review-box">
          <p className="bold-text"><strong>Students</strong><br />⭐ 4.8</p>
        </div>
        <div className="review-box">
          <p className="bold-text"><strong>professionals</strong><br />⭐ 4.5</p>
        </div>
        <div className="review-box">
          <p className="bold-text"><strong>Scholarion</strong><br />⭐ 4.9</p>
        </div>
      </section>

      {/* How It Works */}
      <div className="how-it-works">
        <h2 className="bold-text">How It Works ?</h2>
        <div className="progress-steps">
          <div className="step">
            <span className="step-number">1.</span> <strong>Select Your Service</strong>
            <div className="step-button-container">
        
            </div>
            <p className="step-subtopic">Fill out our simple order form and include your instructions or additional materials.</p>
            <button className="mini-button-orange">Get Started</button>
          </div>
          <div className="step">
            <span className="step-number">2.</span> <strong>Choose Your Writer</strong>
            <p className="step-subtopic">Chat with writers, compare prices, and view samples.</p>
          </div>
          <div className="step">
            <span className="step-number">3.</span> <strong>Track Your Order Progress</strong>
            <p className="step-subtopic">Anytime Chat with your writer to check your order progress</p>
          </div>
          <div className="step">
            <span className="step-number">4.</span> <strong>Get Your Order</strong>
            <p className="step-subtopic">Revise your paper and release money to the writer when you’re happy.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
