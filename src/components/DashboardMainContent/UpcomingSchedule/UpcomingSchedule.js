import React from 'react';
import './UpcomingSchedule.css';

const schedule = {
  Thursday: [
    { title: "Health checkup complete", time: "10:00 AM", icon: "✅" },
    { title: "Ophthalmologist", time: "12:00 PM", icon: "👁️" }
  ],
  Saturday: [
    { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
    { title: "Neurologist", time: "10:30 PM", icon: "🧠" }
  ]
};

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {Object.keys(schedule).map((day) => (
        <div key={day} className="day-section">
          <h4>On {day}</h4>
          <div className="schedule-items">
            {schedule[day].map((item, idx) => (
              <div className="schedule-card" key={idx}>
                <span>{item.icon}</span>
                <div>
                  <strong>{item.title}</strong><br />
                  <small>{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
