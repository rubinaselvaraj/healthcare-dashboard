import React from 'react';
import './Header.css';
import avatar from '../../assets/avatar.jpg';
function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <input type="text" placeholder="Search" />
      <div className="icons">
        <span className="notification-icon">🔔</span>
        <div className="user-profile">
          <img src={avatar} alt="User" />
          <span>User</span>
        </div>
        <button className="add-btn">+</button>
      </div>
    </header>
  );
}

export default Header;