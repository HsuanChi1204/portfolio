import React, { useState } from 'react';
import '../styles/Sections.css';

interface WorkContent {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface SkillContent {
  category: string;
  items: string[];
}

interface ProjectContent {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

interface SectionData {
  id: string;
  title: string;
  content: WorkContent[] | SkillContent[] | ProjectContent[];
  type: 'work' | 'skills' | 'projects';
}

const Sections: React.FC = () => {
  const [activeTab, setActiveTab] = useState('work');

  const sections: SectionData[] = [
    {
      id: 'work',
      title: 'Work Experience',
      type: 'work',
      content: [
        {
          title: 'Technical Product Manager',
          company: 'Bank Sinopac',
          location: 'Taipei, Taiwan',
          period: '2021 - 2023',
          achievements: [
            'Led the development of a new digital banking platform, increasing mobile banking adoption by 35%',
            'Managed a team of 8 engineers and collaborated with UX designers to deliver features on time',
            'Implemented agile methodologies resulting in 40% faster deployment cycles',
            'Conducted user research and A/B testing to optimize user flows and increase engagement'
          ]
        },
        {
          title: 'Associate Product Manager',
          company: 'Bank Sinopac',
          location: 'Taipei, Taiwan',
          period: '2020 - 2021',
          achievements: [
            'Developed product roadmaps and specifications for digital banking features',
            'Analyzed user feedback and metrics to identify opportunities for improvement',
            'Coordinated with stakeholders to ensure alignment on product vision and goals',
            'Created detailed documentation for product features and user flows'
          ]
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills',
      type: 'skills',
      content: [
        {
          category: 'Programming Languages',
          items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
        },
        {
          category: 'Web & Cloud',
          items: ['React.js', 'Node.js', 'AWS', 'Docker', 'REST APIs']
        },
        {
          category: 'Product & Data',
          items: ['Product Management', 'Agile/Scrum', 'Data Analysis', 'A/B Testing']
        },
        {
          category: 'Tools & Technologies',
          items: ['Git', 'JIRA', 'Figma', 'Google Analytics']
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      type: 'projects',
      content: [
        {
          title: 'AWS Hackathon Game',
          description: 'Developed a multiplayer game using AWS services, implementing real-time features and user authentication',
          techStack: ['React', 'Node.js', 'AWS Lambda', 'DynamoDB', 'WebSocket'],
          link: 'https://github.com/yourusername/aws-game'
        },
        {
          title: 'Netflix Clone',
          description: 'Built a full-stack Netflix clone with user authentication, content management, and recommendation system',
          techStack: ['React', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
          link: 'https://github.com/yourusername/netflix-clone'
        }
      ]
    }
  ];

  const renderContent = (section: SectionData) => {
    switch (section.type) {
      case 'work':
        return (section.content as WorkContent[]).map((item, index) => (
          <div key={index} className="content-item work-item">
            <h3>{item.title}</h3>
            <div className="work-details">
              <span>{item.company}</span>
              <span>{item.location}</span>
              <span>{item.period}</span>
            </div>
            <ul className="achievements">
              {item.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ));

      case 'skills':
        return (section.content as SkillContent[]).map((category, index) => (
          <div key={index} className="content-item skill-category">
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ));

      case 'projects':
        return (section.content as ProjectContent[]).map((project, index) => (
          <div key={index} className="content-item project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ));

      default:
        return null;
    }
  };

  const activeSection = sections.find(section => section.id === activeTab);

  return (
    <div className="sections-container">
      <div className="sections-wrapper">
        <div className="sections-tabs">
          {sections.map(section => (
            <button
              key={section.id}
              className={`tab-button ${activeTab === section.id ? 'active' : ''}`}
              onClick={() => setActiveTab(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="sections-content">
          {activeSection && (
            <>
              <h2 className="section-title">{activeSection.title}</h2>
              <div className="content-grid">
                {renderContent(activeSection)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sections; 