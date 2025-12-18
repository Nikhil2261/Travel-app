import React from 'react';

export default function DestinationFooterMobile() {
  return (
    <div style={{
      position: 'sticky',
      bottom: 0,
      padding: 16,
      background: '#fff',
      boxShadow: '0 -6px 16px rgba(0,0,0,0.08)'
    }}>
      <button
        style={{
          width: '100%',
          height: 52,
          background: '#1f6cff',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          fontWeight: 700
        }}
      >
        Book Now
      </button>
    </div>
  );
}
