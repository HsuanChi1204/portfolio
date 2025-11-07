import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  // 滾動 parallax
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxY = useMemo(() => {
    const intensity = 0.08; // 調整視覺位移強度
    return -scrollY * intensity;
  }, [scrollY]);

  return (
    <div className="welcome-container">
      <motion.div className="welcome-content" style={{ y: parallaxY }}>
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
            <img src="/src/assets/email-icon.png" alt="Email" />
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

        <motion.div className="hero-info-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div className="info-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className="info-text">
              <p className="info-title">Arlington, VA, USA</p>
            </div>
          </motion.div>
          <motion.div className="info-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
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
            <div className="info-text">
              <p className="info-title">Full Stack Development</p>
            </div>
          </motion.div>
          <motion.div className="info-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <div className="info-text">
              <p className="info-title">US Citizen</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div className="welcome-image" style={{ y: parallaxY }}>
        <div className="image-container">
          <img 
            src="/src/assets/profile-no-bg.png" 
            alt="Kevin Chang"
            className="profile-image"
          />
          <div className="image-overlay"></div>
        </div>
      </motion.div>

    </div>
  );
};

export default Welcome; 