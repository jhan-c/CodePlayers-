// CircularProgressGroup.js
import React from 'react';
import CircularProgress from './CircularProgress';

const CircularProgressGroup = () => {
  const progressData = [
    { percentage: 75, text: 'Hard work' },
    { percentage: 83, text: 'Creativity' },
    { percentage: 25, text: 'Good luck' },
    { percentage: 95, text: 'Development' },
  ];

  return (
    <div className="circular-progress-group ">
      {progressData.map((data, index) => (
        <div className="circular-progress-container" key={index}>
          <CircularProgress percentage={data.percentage} text={data.text} />
        </div>
      ))}
    </div>
  );
};

export default CircularProgressGroup;
