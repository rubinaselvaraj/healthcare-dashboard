import React from 'react';
import './HealthStatusCards.css';

const statusData = [
  {
    id: 1,
    title: "Lungs",
    status: "In Danger",
    color: "#ef4444", // red
    date: "28 May, 2025"
  },
  {
    id: 2,
    title: "Teeth",
    status: "Moderate",
    color: "#f59e0b", // orange
    date: "24 May, 2025"
  },
  {
    id: 3,
    title: "Bone",
    status: "Stable",
    color: "#10b981", // green
    date: "21 May, 2025"
  }
];

function HealthStatusCards() {
  return (
    <div className="health-status-container">
      {statusData.map((item) => (
        <div className="status-card" key={item.id}>
          <div className="status-header">
            <span className="status-dot" style={{ backgroundColor: item.color }}></span>
            <span className="status-title">{item.title}</span>
          </div>
          <div className="status-text" style={{ color: item.color }}>
            {item.status}
          </div>
          <div className="status-date">{item.date}</div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
