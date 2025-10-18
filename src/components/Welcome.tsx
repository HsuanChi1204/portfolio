import React from 'react';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="hero-title">
          <span className="hero-name">Kevin Chang</span>
        </h1>
        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <p className="hero-description">
            Computer Science Student & Software Developer — passionate about building innovative 
            web applications, exploring blockchain technology, and solving complex problems through code. 
            Currently pursuing Master's in Computer Science at Virginia Tech.
          </p>
        </div>

        <div className="welcome-actions">
          <a href="#portfolio" className="primary-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span>View Work</span>
          </a>
          
          <div className="social-icons">
            <a href="mailto:kevinchangbeta@gmail.com" className="social-icon group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span className="social-tooltip">Email</span>
            </a>
            
            <a href="https://linkedin.com/in/hsuanchichang/" className="social-icon group" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/linkedin-icon.png" alt="LinkedIn" />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            
            <a href="https://github.com/HsuanChi1204" className="social-icon group" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/github-icon.png" alt="GitHub" />
              <span className="social-tooltip">GitHub</span>
            </a>
            
            <a href="/src/assets/resume.pdf" className="social-icon group" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/resume-icon.png" alt="Resume" />
              <span className="social-tooltip">Resume</span>
            </a>
          </div>
        </div>

        <div className="hero-info-grid">
          <div className="info-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="info-title">Based in Virginia, USA</p>
              <p className="info-subtitle">Virginia Tech Student</p>
            </div>
          </div>
          <div className="info-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20v2"></path>
              <path d="M12 2v2"></path>
              <path d="M17 20v2"></path>
              <path d="M17 2v2"></path>
              <path d="M2 12h2"></path>
              <path d="M2 17h2"></path>
              <path d="M2 7h2"></path>
              <path d="M20 12h2"></path>
              <path d="M20 17h2"></path>
              <path d="M20 7h2"></path>
              <path d="M7 20v2"></path>
              <path d="M7 2v2"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <rect x="8" y="8" width="8" height="8" rx="1"></rect>
            </svg>
            <div>
              <p className="info-title">Full Stack Development</p>
              <p className="info-subtitle">React, JavaScript, Python</p>
            </div>
          </div>
          <div className="info-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <div>
              <p className="info-title">Graduate Student</p>
              <p className="info-subtitle">M.Eng Computer Science</p>
            </div>
          </div>
        </div>
      </div>
      
        <div className="welcome-image">
          <div className="image-container">
            <img 
              src="/src/assets/profile-no-bg.png" 
              alt="Kevin Chang"
              className="profile-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

    </div>
  );
};

export default Welcome; 