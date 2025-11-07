import React from 'react';
import '../styles/Skills.css';
import programmingIcon from '../assets/programming-icon.png';
import cloudIcon from '../assets/cloud-icon.png';
import toolsIcon from '../assets/tools-icon.png';
import databaseIcon from '../assets/database-icon.png';

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  iconImage?: string;
  technologies: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      description: 'Core programming languages and frameworks for full-stack development.',
      icon: '💻',
      iconImage: programmingIcon,
      technologies: ['Python', 'Java', 'C', 'React', 'TypeScript', 'JavaScript', 'Express.js', 'Node.js']
    },
    {
      title: 'Cloud Platforms',
      description: 'Cloud infrastructure and services for scalable application deployment.',
      icon: '☁️',
      iconImage: cloudIcon,
      technologies: ['AWS (DynamoDB, API Gateway, S3, CloudFront, CloudWatch, Lambda, IAM, MSK)', 'Firebase', 'GCP']
    },
    {
      title: 'Tools & DevOps',
      description: 'Development tools, testing frameworks, and deployment technologies.',
      icon: '🔧',
      iconImage: toolsIcon,
      technologies: ['Docker', 'Kubernetes', 'Kafka', 'UiPath', 'OAuth', 'PyTest', 'Jenkins', 'Git', 'Linux', 'Bash Script', 'Jest', 'Cypress']
    },
    {
      title: 'Database & Storage',
      description: 'Database management and data storage solutions for various use cases.',
      icon: '🗄️',
      iconImage: databaseIcon,
      technologies: ['Relational Databases (MSSQL, MySQL)', 'NoSQL (MongoDB, DynamoDB)', 'Redis', 'IPFS distributed Storage']
    }
  ];

  return (
    <div className="skills-container">
      <div className="section-header">
        <h2>Technical Expertise</h2>
      </div>
      
        <div className="skills-showcase">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-showcase">
              <div className="skill-header">
                <div className="skill-icon">
                  {category.iconImage ? (
                    <img src={category.iconImage} alt={category.title} />
                  ) : (
                    category.icon
                  )}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <p className="skill-description">{category.description}</p>
              
              <div className="technologies-grid">
                {category.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Skills; 