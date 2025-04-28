import React from 'react';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Weather App',
      description: 'A responsive web application that provides real-time weather updates.',
      image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
      tags: ['JavaScript', 'API', 'Web Development', 'Responsive Design']
    },
    {
      title: 'Task Manager',
      description: 'An efficient tool for managing and tracking daily tasks.',
      image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
      tags: ['React', 'Redux', 'Productivity Tool', 'User Interface']
    },
    {
      title: 'E-commerce Site',
      description: 'A fully functional online store with payment integration.',
      image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
      tags: ['Node.js', 'Express', 'Full Stack', 'Shopping Cart']
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link || '#'} className="view-project">
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all">View all</button>
      </div>
    </div>
  );
};

export default Projects; 