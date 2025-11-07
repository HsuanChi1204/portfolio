import React, { useMemo, useState } from 'react';
import '../styles/SkillsProjects.css';

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  iconImage?: string;
  technologies: string[];
}

interface ProjectImage {
  url: string;
  name?: string; // 圖片名稱/標題（選填）
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
  images?: (string | ProjectImage)[]; // 多張圖片輪播，可以是字串或物件（包含名稱）
}

const SkillsProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');
  
  // 簡易輪播元件（內嵌）
  const Carousel: React.FC<{ images?: (string | ProjectImage)[]; fallback: string }> = ({ images, fallback }) => {
    // 將 images 轉換為統一格式
    const normalizedImages = useMemo(() => {
      if (!images || images.length === 0) return [{ url: fallback, name: undefined }];
      return images.map(img => 
        typeof img === 'string' 
          ? { url: img, name: undefined } 
          : { url: img.url, name: img.name }
      );
    }, [images, fallback]);
    
    const [idx, setIdx] = useState(0);
    const next = () => setIdx((i) => (i + 1) % normalizedImages.length);
    const prev = () => setIdx((i) => (i - 1 + normalizedImages.length) % normalizedImages.length);
    const currentImage = normalizedImages[idx];
    
    return (
      <div className="carousel">
        <img 
          src={currentImage.url} 
          alt={currentImage.name || `slide-${idx + 1}`} 
          className="project-image" 
          title={currentImage.name}
        />
        {normalizedImages.length > 1 && (
          <div className="carousel-controls">
            <button type="button" className="carousel-btn" onClick={prev} aria-label="Previous image">‹</button>
            <div className="carousel-dots">
              {normalizedImages.map((img, i) => (
                <span 
                  key={i} 
                  className={`dot ${i === idx ? 'active' : ''}`} 
                  onClick={() => setIdx(i)}
                  title={img.name || `Image ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn" onClick={next} aria-label="Next image">›</button>
          </div>
        )}
        {currentImage.name && (
          <div className="carousel-image-name">{currentImage.name}</div>
        )}
      </div>
    );
  };

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
      tags: ['JavaScript', 'React', 'Three.js', 'AWS S3, CloudFront', 'DynamoDB', 'Game Development', 'Hackathon', 'Interactive'],
      link: 'https://github.com/HsuanChi1204/Red-Light-Game',
      stats: {
        performance: '1.2s',
        users: '500+',
        uptime: '99.5%'
      },
      // 方式 1: 使用字串陣列（簡單方式，順序就是輪播順序）
      images: ['/src/assets/red-light-game.png']
      // 方式 2: 使用物件陣列（可設定圖片名稱，順序就是陣列順序）
      // images: [
      //   { url: '/src/assets/red-light-game.png', name: 'Game Homepage' },
      //   { url: '/src/assets/redlight.png', name: 'Gameplay Screenshot' }
      // ]
    },
    {
      title: 'Netflix Clone',
      description: 'Full-stack Netflix clone with modern UI/UX, featuring movie browsing, user authentication, and responsive design.',
      image: '/src/assets/netflix-clone.png',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'CSS3', 'API Integration', 'Jest', 'Cypress'],
      link: 'https://github.com/HsuanChi1204/Netflix-clone',
      stats: {
        performance: '0.8s',
        users: '1.2k+',
        uptime: '99.9%'
      },
      images: ['/src/assets/netflix-clone.png', '/src/assets/netflix-clone1.png']
    },
    {
      title: 'Distributed Storage and Blockchain',
      description: 'Decentralized application exploring smart contracts, cryptocurrency integration, and blockchain technology.',
      image: '/src/assets/blockchain-project.png',
      tags: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'Polygon zkEVM', 'Ed25519 cryptography', 'IPFS distributed storage'],
      link: 'https://github.com/HsuanChi1204/blockchainProject',
      stats: {
        performance: '2.3s',
        users: '100+',
        uptime: '99.7%'
      }
    },
    {
      title: 'LeetCode Tracker',
      description: 'Personal coding progress tracker with problem categorization, difficulty levels, and performance analytics.',
      image: '/src/assets/leetcode-tracker.png',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Data Analysis', 'Web Scraping', 'Dashboard'],
      link: 'https://github.com/HsuanChi1204/Leetcode-tracker',
      stats: {
        performance: '0.5s',
        users: '200+',
        uptime: '99.8%'
      },
      // 範例：使用物件格式設定輪播圖片順序和名稱
      images: ['/src/assets/leetcode-tracker.png', '/src/assets/leetcode-tracker1.png', '/src/assets/leetcode-tracker2.png']
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
                        {project.images && project.images.length > 1 ? (
                          <Carousel images={project.images} fallback={project.image} />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="project-image"
                          />
                        )}
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

                  {/* highlights removed as requested */}
                  
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
