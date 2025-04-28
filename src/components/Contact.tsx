import React from 'react';
import '../styles/Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  useScrollAnimation();
  
  return (
    <div className="contact-container">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="contact-links">
        <a href="mailto:kevin.chang@example.com" className="contact-link">
          <span className="link-icon">📧</span>
          <span className="link-text">Email</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="contact-link" target="_blank" rel="noopener noreferrer">
          <span className="link-icon">💼</span>
          <span className="link-text">LinkedIn</span>
          <span className="link-arrow">→</span>
        </a>
      </div>
      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group" data-line="01">
              <input type="text" placeholder="const name = ''" required />
            </div>
            <div className="form-group" data-line="02">
              <input type="email" placeholder="const email = ''" required />
            </div>
            <div className="form-group" data-line="03">
              <input type="text" placeholder="const subject = ''" required />
            </div>
            <div className="form-group" data-line="04">
              <textarea 
                placeholder="const message = `
  Your message here...
`;" 
                rows={8} 
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              sendMessage();
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 