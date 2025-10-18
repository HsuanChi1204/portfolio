import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionHeight = homeSection.getBoundingClientRect().height;
        const homeSectionTop = homeSection.getBoundingClientRect().top;
        // Show background when hero section is halfway scrolled
        setIsScrolled(homeSectionTop <= -homeSectionHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span className="name">Kevin Chang</span>
      </div>
      
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#education">Education & Experience</a>
        <a href="#portfolio">Skills & Projects</a>
        <a href="#contact">Get In Touch</a>
      </div>
    </nav>
  );
};

export default Navbar; 