import React from 'react';
import '../styles/AboutMe.css';
import profileImage from '../assets/profile.png';
import memojiImage from '../assets/memoji.png';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="text-content">
          <p>
            I am a passionate software engineer with a strong foundation in web development and a keen interest in creating innovative solutions. My journey in technology began during my studies at National Cheng Kung University, where I developed a deep understanding of computer science principles and practical software development skills.
          </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" className="cta-button" download>
              Download Resume
            </a>
            <a href="https://github.com/HsuanChi1204" className="cta-button" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          </div>
        </div>
        <div className="profile-image">
          <div className="image-container">
            <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      <div className="memoji-section">
        <div className="memoji-container">
          <img src={memojiImage} alt="Memoji" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 