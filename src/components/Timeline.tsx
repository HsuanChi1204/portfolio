import React from 'react';
import '../styles/Timeline.css';

interface EducationItem {
  year: string;
  degree: string;
  school: string;
  coursework: string;
  logo: string;
}

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  description: string[];
  logo: string;
}

const Timeline: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      year: '2025 - 2026',
      degree: 'Master of Engineering in Computer Science and Applications',
      school: 'Virginia Tech',
      coursework: 'Full-stack Development, Software Engineering, Database Systems, Algorithms, Blockchain, Software Design, AI tools for software development, Database Management',
      logo: '/src/assets/VT_logo.png'
    }
    // {
    //   year: '2020 - 2024',
    //   degree: 'Bachelor of Science in Computer Science and Information Engineering',
    //   school: 'National Cheng Kung University',
    //   coursework: 'Software Engineering, Web Development, Database Systems, Operating Systems',
    //   logo: '/src/assets/ncku-logo1.jpg'
    // }
  ];

  const experienceItems: ExperienceItem[] = [
    {
      year: '05/2025 - Present',
      position: 'Software Engineer',
      company: 'Kick Your Ads',
      description: [
        'Developing a full-stack LLM web application to detect scam emails and clean Gmail ads',
        'Using React, TypeScript, Node.js, AWS, FastAPI, and OpenAI',
        'Achieved 94% top-3 retrieval accuracy with GPT-4, Voyage Reranker, and PineconeDB',
        'Handled 200K+ req/min at 300ms latency with Kubernetes and Redis'
      ],
      logo: '/src/assets/kick_your_ads.jpeg'
    },
    {
      year: '06/2025 - 08/2025',
      position: 'Software Engineer Intern',
      company: 'MediaTek',
      description: [
        'Engineered a Full-stack Gen-AI Application with React, Python, FastAPIs, AstraDB, and GPT-4',
        'Built a RAG-based chatbot achieving 96% top-3 retrieval accuracy (MRR@3)',
        'Enabled 83% faster analysis and visualization of 1M+ records by building end-to-end ETL pipelines',
        'Developed 10+ automation pipelines with Python, FastAPI, and UiPath, reducing processing time by 97%'
      ],
      logo: '/src/assets/mediatek_logo.jpeg'
    },
    {
      year: '07/2020 - 10/2023',
      position: 'Software Developer & Product Manager',
      company: 'Bank Sinopac',
      description: [
        'Built a Full-stack Gen-AI web for competitive analysis with React, TypeScript, Python, Java and AWS',
        'Saved 5 hours of manual work per task by automating data workflows with Python, REST APIs, UiPath, and VBA',
        'Analyzed 150K+ records via MSSQL and developed a real-time Power BI dashboard for operational monitoring',
        'Achieved 70% conversion boost & $13M+ in loan approvals by leading an AI product recommendation system'
      ],
      logo: '/src/assets/sinopacLogo.jpg'
    }
  ];

  const keywords = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'AWS', 'FastAPI', 'OpenAI',
    'GPT-4', 'Kubernetes', 'Redis', 'PineconeDB', 'AstraDB', 'UiPath', 'MSSQL',
    'Power BI', 'Node.js', 'RAG', 'ETL', 'REST', 'VBA'
  ];

  const highlightKeywords = (text: string) => {
    const pattern = new RegExp(`(${keywords.map(k => k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(pattern);
    return (
      <>
        {parts.map((part, i) =>
          keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
            <span key={i} className="exp-hl">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="timeline-container">
      {/* Education Section */}
      <div className="education-section">
            <div className="section-header">
              <h2>Education</h2>
            </div>
        <div className="education-grid">
          {educationItems.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-logo">
                <img src={item.logo} alt={`${item.school} logo`} />
              </div>
              <div className="education-details">
                <div className="education-year">{item.year}</div>
                <div className="education-degree">{item.degree}</div>
                <div className="education-school">{item.school}</div>
                <div className="education-coursework">{item.coursework}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
            <div className="section-header">
              <h2>Professional Experience</h2>
            </div>
        <div className="experience-grid">
          {experienceItems.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-logo">
                <img src={item.logo} alt={`${item.company} logo`} />
              </div>
                <div className="experience-details">
                  <div className="experience-year">{item.year}</div>
                  <div className="experience-position">{item.position}</div>
                  <div className="experience-company">{item.company}</div>
                  <ul className="experience-description">
                    {item.description.map((desc, index) => (
                      <li key={index}>{highlightKeywords(desc)}</li>
                    ))}
                  </ul>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 