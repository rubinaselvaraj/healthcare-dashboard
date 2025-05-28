import React from 'react';
import './CalendarView.css';

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {days.map((day, i) => (
          <div className="calendar-cell" key={i}>
            <div className="calendar-day">{day}</div>
            <div className="calendar-date">{dates[i]}</div>
            <div className="appointment-times">
              {i === 2 && <span>09:00</span>}
              {i === 2 && <span>11:00</span>}
              {i === 3 && <span>13:00</span>}
              {i === 5 && <span>15:00</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-cards">
        <div className="calendar-card dentist">🦷 Dentist<br /><small>26 Oct</small></div>
        <div className="calendar-card physio">🧘‍♂️ Physiotherapy<br /><small>28 Oct</small></div>
      </div>
    </div>
  );
}

export default CalendarView;
