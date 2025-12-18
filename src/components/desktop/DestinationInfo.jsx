import React from 'react';

export default function DestinationInfo() {
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2 style={{ margin: 0 }}>Darjeeling</h2>

      <p style={{ color: '#6b7280', marginTop: 6 }}>
        📍 West Bengal, India
      </p>

      <div style={{ marginTop: 12 }}>
        ⭐ 4.7 <span style={{ color: '#6b7280' }}>(19K reviews)</span>
      </div>

      <h3 style={{ marginTop: 16, color: '#16a34a' }}>
        ₹700 / person
      </h3>

      <button
        className="btn"
        style={{
          marginTop: 18,
          width: '100%',
          background: '#1f6cff'
        }}
      >
        Book Now
      </button>
    </div>
  );
}
