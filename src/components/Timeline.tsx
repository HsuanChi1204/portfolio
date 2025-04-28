import React from 'react';
import '../styles/Timeline.css';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      year: '2025 - 2026',
      title: 'Master of Engineering in Computer Science and Applications',
      company: 'Virginia Tech',
      location: 'Alexandria, VA',
      description: 'Coursework: Web Application Development, Mobile Application Development, Software Engineering, Blockchain, User Interface Software, Usability Engineering'
    },
    {
      year: '2021 - 2023',
      title: 'Technical Product Manager',
      company: 'Bank Sinopac',
      location: 'Digital Innovation & AI Team',
      description: 'Led development of AI-driven banking solutions, managed cross-functional teams, and implemented innovative digital solutions resulting in significant improvements in conversion rates and operational efficiency.'
    },
    {
      year: '2020 - 2021',
      title: 'Associate Product Manager',
      company: 'Bank Sinopac',
      location: 'Digital Innovation & AI Team',
      description: 'Developed automation systems and AI-powered solutions that significantly reduced processing time and improved operational efficiency.'
    },
    {
      year: '2015 - 2019',
      title: 'Bachelor of Business Administration',
      company: 'National Cheng Kung University (NCKU)',
      location: 'Tainan, Taiwan',
      description: 'Foundation in business principles and management practices.'
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <h4>{item.company}</h4>
                <h5>{item.location}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 