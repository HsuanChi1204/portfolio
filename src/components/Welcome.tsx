import React from 'react';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Kevin Chang's Portfolio</h1>
        <p>
          I'm Kevin Chang, a passionate Computer Science student dedicated to becoming a Software Development Engineer. 
          Explore my projects and journey as I prepare for a successful career in tech.
        </p>
        <div className="welcome-buttons">
          <a href="#about" className="learn-more">Learn More</a>
          <a href="#contact" className="contact">Contact</a>
        </div>
      </div>
      <div className="welcome-image">
        <div className="image-placeholder">
          <img 
            src="https://avatars.githubusercontent.com/u/810438?v=4" 
            alt="Welcome"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome; 