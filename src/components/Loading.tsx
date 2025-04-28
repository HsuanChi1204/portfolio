import React, { useEffect, useState } from 'react';
import '../styles/Loading.css';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    const updateProgress = () => {
      setProgress(prev => {
        if (prev < 30) {
          // 開始慢
          timer = setTimeout(updateProgress, 50);
          return prev + 0.5;
        } else if (prev < 60) {
          // 中間快
          timer = setTimeout(updateProgress, 20);
          return prev + 2;
        } else if (prev < 85) {
          // 接近結束變慢
          timer = setTimeout(updateProgress, 40);
          return prev + 0.5;
        } else if (prev < 100) {
          // 最後衝刺
          timer = setTimeout(updateProgress, 10);
          return prev + 3;
        }
        return 100;
      });
    };

    timer = setTimeout(updateProgress, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-text">Loading...</div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Loading; 