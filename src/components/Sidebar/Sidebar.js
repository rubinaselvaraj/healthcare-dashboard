import React from 'react';
import './Sidebar.css';
import { navLinks } from '../../data/navigationLinks';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <ul>
        {navLinks.map(link => (
          <li key={link.id}>
            <span>{link.icon}</span> {link.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;