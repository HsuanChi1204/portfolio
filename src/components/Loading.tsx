import React from 'react';
import '../styles/Loading.css';

type LoadingProps = {
  progress?: number;
};

const Loading: React.FC<LoadingProps> = ({ progress }) => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      {typeof progress === 'number' && (
        <div className="loading-progress">{progress}%</div>
      )}
    </div>
  );
};

export default Loading;