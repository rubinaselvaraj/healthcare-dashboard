import React from 'react';
import './ActivityFeed.css';

const activityData = [
  { label: "Mon", height: 40 },
  { label: "Tue", height: 60 },
  { label: "Wed", height: 30 },
  { label: "Thu", height: 70 },
  { label: "Fri", height: 50 },
  { label: "Sat", height: 80 },
  { label: "Sun", height: 45 }
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <div className="bar-chart">
        {activityData.map((item, index) => (
          <div key={index} className="bar-item">
            <div className="bar" style={{ height: `${item.height}px` }}></div>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
