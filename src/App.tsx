import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import './styles/App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home">
          <Welcome />
        </section>
        <section id="education">
          <Timeline />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
