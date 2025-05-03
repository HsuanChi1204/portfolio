import React from 'react';
import '../styles/Timeline.css';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2025 - 2026',
      title: 'Master of Engineering in Computer Science and Applications',
      company: 'Virginia Tech',
      description: 'Focus on Software Development and Machine Learning'
    },
    {
      year: '2020 - 2024',
      title: 'Bachelor of Science in Computer Science and Information Engineering',
      company: 'National Cheng Kung University',
      description: 'Major in Software Engineering and Web Development'
    },
    {
      year: '2023 - 2024',
      title: 'Software Engineer Intern',
      company: 'Bank Sinopac',
      description: 'Developed and maintained banking systems, focusing on front-end development and user experience'
    }
  ];

  return (
    <div className="timeline-container">
      <div className="section-header">
        <h2>Timeline</h2>
      </div>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p className="company">{item.company}</p>
                </div>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 