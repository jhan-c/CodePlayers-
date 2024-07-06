// CircularProgress.js
import React from 'react';

const CircularProgress = ({ percentage, text }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="150" height="150">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8a2be2", stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: "#00c6ff", stopOpacity: 0.5 }} />
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
        <tspan className="circle-text">{percentage}%</tspan>
        <br />
        <tspan className="progress-text">{text}</tspan>
      </div>
    </div>
  );
};

export default CircularProgress;
