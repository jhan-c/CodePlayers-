import React from 'react';

const CircularProgress = ({ displayText, percentage, text }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="150" height="150">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8a2be2", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#00c6ff", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle
          className="circle-bg"
          cx="75"
          cy="75"
          r={radius}
        />
        <circle
          className="circle"
          cx="75"
          cy="75"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
        <div className="text">
          <span className="circle-text">{displayText}</span>
        </div>
        <br /><br />
        <span className="progress-text">{text}</span>
    </div>
  );
};

const CircularProgressGroup = () => {
  const progressData = [
    { displayText: '30+', percentage: 100, text: 'Years in Operation' },
    { displayText: '30+', percentage: 100, text: 'Clients' },
    { displayText: '30+', percentage: 100, text: 'Projects' },
    { displayText: '30+', percentage: 100, text: 'Satisfaction' }
  ];

  return (
    <div className="circular-progress-group">
      {progressData.map((data, index) => (
        <div className="circular-progress-container" key={index}>
          <CircularProgress displayText={data.displayText} percentage={data.percentage} text={data.text} />
        </div>
      ))}
    </div>
  );
};

export default CircularProgressGroup;
