import React from 'react';
import '../styles/Projects.css';
import redLightGameImage from '../assets/red-light-game.png';
import netflixCloneImage from '../assets/netflix-clone.png';

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

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Red Light Game',
      description: 'Amazon Game Builder Hackathon 2025 - Interactive game development project showcasing creative problem-solving and game design skills.',
      image: redLightGameImage,
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
      description: 'React-based Netflix clone with modern UI/UX design, featuring responsive design and smooth user interactions.',
      image: netflixCloneImage,
      tags: ['React', 'JavaScript', 'UI/UX', 'Responsive'],
      link: 'https://github.com/HsuanChi1204/Netflix-clone',
      stats: {
        performance: '1.5s',
        users: '1k+',
        uptime: '99.8%'
      }
    },
    {
      title: 'LeetCode Tracker',
      description: 'A comprehensive LeetCode practice tracking system to help manage daily coding practice and review schedule with progress analytics.',
      image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
      tags: ['TypeScript', 'Productivity', 'Analytics', 'Learning'],
      link: 'https://github.com/HsuanChi1204/leetcode-tracker',
      stats: {
        performance: '0.8s',
        users: '200+',
        uptime: '99.9%'
      }
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Blockchain-Based Supply Chain Authentication for Luxury and Collectible Goods - Advanced blockchain implementation for supply chain transparency.',
      image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/blockchain/blockchain.png',
      tags: ['JavaScript', 'Blockchain', 'Supply Chain', 'Authentication'],
      link: 'https://github.com/HsuanChi1204/blockchainProject',
      stats: {
        performance: '2.3s',
        users: '100+',
        uptime: '99.7%'
      }
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="section-header">
        <h2>Featured Projects</h2>
      </div>
      
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
                  <div className="chart-container">
                    <div className="chart-bars">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="chart-bar"
                          style={{
                            height: `${Math.random() * 60 + 20}%`,
                            backgroundColor: i % 3 === 0 ? '#10B981' : '#EF4444'
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="chart-line"></div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-value">{project.stats?.performance}</div>
                      <div className="stat-label">Load Time</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{project.stats?.users}</div>
                      <div className="stat-label">Active Users</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{project.stats?.uptime}</div>
                      <div className="stat-label">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-details">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-status">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  Live Demo
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <div className="feature-item">
                  <h4>Advanced Analytics</h4>
                  <p>Real-time data processing with interactive visualizations and custom dashboards.</p>
                </div>
                <div className="feature-item">
                  <h4>Scalable Architecture</h4>
                  <p>Microservices-based design with horizontal scaling and load balancing capabilities.</p>
                </div>
              </div>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <a href={project.link || '#'} className="project-cta">
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
      
      <div className="view-all-container">
        <button className="view-all-button">
          <span>View All Projects</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects; 