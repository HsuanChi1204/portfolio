import React from 'react';
import '../styles/AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Product-focused Software Engineer with 3+ years of experience in developing AI-driven solutions 
              and leading cross-functional teams. Passionate about leveraging technology to solve complex 
              business challenges and create impactful user experiences.
            </p>
            <div className="quick-links">
              <a href="#" className="resume-link">Resume download</a>
              <a href="https://github.com/yourusername" className="github-link" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>
          </div>
          <div className="profile-image">
            <div className="image-container">
              <img 
                src="https://avatars.githubusercontent.com/u/6412038?v=4" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="memoji-section">
          <div className="memoji-container">
            <img 
              src="https://avatars.githubusercontent.com/u/1500684?v=4" 
              alt="Memoji"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 