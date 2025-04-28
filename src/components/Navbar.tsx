import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        setIsScrolled(homeSectionBottom <= 60); // 60px is navbar height
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
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 