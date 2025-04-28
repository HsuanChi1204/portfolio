import React from 'react';
import '../styles/Skills.css';

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages and Frameworks',
      description: 'Kevin is skilled in Python, Java, and JavaScript.',
      icon: '💻'
    },
    {
      title: 'Development Tools and Technologies',
      description: 'He utilizes Git, Docker, and AWS for projects.',
      icon: '🛠️'
    },
    {
      title: 'Frameworks and Libraries',
      description: 'Kevin works with React, Node.js, and Django.',
      icon: '📚'
    }
  ];

  return (
    <div className="skills-container">
      <div className="section-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 