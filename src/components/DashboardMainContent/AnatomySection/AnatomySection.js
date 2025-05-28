import React from 'react';
import './AnatomySection.css';
import bodyImage from '../../../assets/body.png'; // use any placeholder body image

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <h2>Dashboard</h2>
      <div className="anatomy-card">
        <img src={bodyImage} alt="Human Anatomy" className="body-image" />
        <div className="health-label heart">Healthy Heart</div>
        <div className="health-label lungs">Lungs</div>
        <div className="health-label teeth">Teeth</div>
        <div className="health-label bone">Bone</div>
      </div>
    </div>
  );
}

export default AnatomySection;
