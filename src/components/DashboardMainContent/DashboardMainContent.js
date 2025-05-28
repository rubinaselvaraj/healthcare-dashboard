import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';

function DashboardMainContent() {
  return (
    <main style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1rem' }}>
      <div>
        <AnatomySection />
        <HealthStatusCards />
        <ActivityFeed />
      </div>
      <div>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
}

export default DashboardMainContent;
