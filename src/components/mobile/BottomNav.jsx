

import React from 'react';

export default function BottomNav() {
  return (
    <nav className="m-bottom-nav" aria-label="Main navigation">
      <button className="m-nav-item">
        <span className="m-nav-icon">🏠</span>
        <span className="m-nav-label">Home</span>
      </button>

      <button className="m-nav-item">
        <span className="m-nav-icon">🧭</span>
        <span className="m-nav-label">Trips</span>
      </button>

      <button className="m-nav-item active">
        <span className="m-nav-icon">🎫</span>
        <span className="m-nav-label">Tickets</span>
      </button>

      <button className="m-nav-item">
        <span className="m-nav-icon">🏷️</span>
        <span className="m-nav-label">Offers</span>
      </button>

      <button className="m-nav-item">
        <span className="m-nav-icon">🗺️</span>
        <span className="m-nav-label">Map</span>
      </button>
    </nav>
  );
}
