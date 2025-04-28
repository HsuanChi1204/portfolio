import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './Loading';
import Scene3D from './Scene3D';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 1000);
        }
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <AnimatePresence>
        {loading ? (
          <Loading progress={progress} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="content"
          >
            <Scene3D />
            <div className="overlay">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Welcome to My Portfolio
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Frontend Developer & 3D Enthusiast
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home; 