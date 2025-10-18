import React, { useState } from 'react';
import '../styles/SkillsProjects.css';

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  iconImage?: string;
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  stats?: {
    performance: string;
    users: string;
    uptime: string;
  };
}

const SkillsProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      description: 'Core programming languages and frameworks for full-stack development.',
      icon: '💻',
      iconImage: '/src/assets/programming-icon.png',
      technologies: ['Python', 'Java', 'C', 'React', 'TypeScript', 'JavaScript', 'Express.js', 'Node.js']
    },
    {
      title: 'Cloud Platforms',
      description: 'Cloud infrastructure and services for scalable application deployment.',
      icon: '☁️',
      iconImage: '/src/assets/cloud-icon.png',
      technologies: ['AWS (DynamoDB, API Gateway, S3, CloudFront, CloudWatch, Lambda, IAM, MSK)', 'Firebase', 'GCP']
    },
    {
      title: 'Tools & DevOps',
      description: 'Development tools, testing frameworks, and deployment technologies.',
      icon: '🔧',
      iconImage: '/src/assets/tools-icon.png',
      technologies: ['Docker', 'Kubernetes', 'Kafka', 'UiPath', 'OAuth', 'PyTest', 'Jenkins', 'Git', 'Linux', 'Bash Script', 'Jest', 'Cypress']
    },
    {
      title: 'Database & Storage',
      description: 'Database management and data storage solutions for various use cases.',
      icon: '🗄️',
      iconImage: '/src/assets/database-icon.png',
      technologies: ['Relational Databases (MSSQL, MySQL)', 'NoSQL (MongoDB, DynamoDB)', 'Redis', 'IPFS distributed Storage']
    }
  ];

  const projects: Project[] = [
    {
      title: 'Red Light Game',
      description: 'Amazon Game Builder Hackathon 2025 - Interactive game development project showcasing creative problem-solving and game design skills.',
      image: '/src/assets/red-light-game.png',
      tags: ['JavaScript', 'Game Development', 'Hackathon', 'Interactive'],
      link: 'https://github.com/HsuanChi1204/Red-Light-Game',
      stats: {
        performance: '1.2s',
        users: '500+',
        uptime: '99.5%'
      }
    },
    {
      title: 'Netflix Clone',
      description: 'Full-stack Netflix clone with modern UI/UX, featuring movie browsing, user authentication, and responsive design.',
      image: '/src/assets/netflix-clone.png',
      tags: ['React', 'TypeScript', 'CSS3', 'API Integration'],
      link: 'https://github.com/HsuanChi1204/Netflix-clone',
      stats: {
        performance: '0.8s',
        users: '1.2k+',
        uptime: '99.9%'
      }
    },
    {
      title: 'LeetCode Tracker',
      description: 'Personal coding progress tracker with problem categorization, difficulty levels, and performance analytics.',
      image: '/src/assets/leetcode-tracker.png',
      tags: ['Python', 'Data Analysis', 'Web Scraping', 'Dashboard'],
      link: 'https://github.com/HsuanChi1204/Leetcode-tracker',
      stats: {
        performance: '0.5s',
        users: '200+',
        uptime: '99.8%'
      }
    },
    {
      title: 'Blockchain Project',
      description: 'Decentralized application exploring smart contracts, cryptocurrency integration, and blockchain technology.',
      image: '/src/assets/blockchain-project.png',
      tags: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
      link: 'https://github.com/HsuanChi1204/blockchainProject',
      stats: {
        performance: '2.3s',
        users: '100+',
        uptime: '99.7%'
      }
    }
  ];

  return (
    <div className="skills-projects-container">
      <div className="section-header">
        <h2>Projects & Skills</h2>
      </div>
      
      <div className="tab-navigation">
        <div className="flip-switch">
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Featured Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Technical Expertise
          </button>
          <div className="switch-card">
            <div className="card-face"></div>
            <div className="card-face card-back"></div>
          </div>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'projects' && (
          <div className="projects-showcase">
            {projects.map((project, index) => (
              <div key={index} className="project-showcase">
                <div className="project-visual">
                  <div className="project-mockup">
                    <div className="mockup-header">
                      <div className="mockup-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="mockup-title">{project.title}</div>
                    </div>
                    <div className="mockup-content">
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="project-details">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      Live
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <div className="feature-item">
                      <h4>Performance</h4>
                      <p>Optimized for speed and efficiency</p>
                    </div>
                    <div className="feature-item">
                      <h4>Scalability</h4>
                      <p>Built to handle growing user base</p>
                    </div>
                  </div>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="project-cta" target="_blank" rel="noopener noreferrer">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
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
        )}
      </div>
    </div>
  );
};

export default SkillsProjects;
