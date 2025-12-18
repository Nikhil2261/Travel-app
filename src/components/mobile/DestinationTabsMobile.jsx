// src/components/mobile/DestinationTabsMobile.jsx
import React from 'react';

export default function DestinationTabsMobile({ active = 'All', onChange }) {
  const tabs = ['All', 'Recommended', 'Popular', 'Rating', 'Map'];

  return (
    <div style={styles.wrapper}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange?.(tab)}
          style={{
            ...styles.tab,
            ...(active === tab ? styles.active : {})
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    gap: 10,
    overflowX: 'auto',
    padding: '12px 16px'
  },
  tab: {
    padding: '8px 14px',
    borderRadius: 999,
    border: '1px solid #e5e7eb',
    background: '#fff',
    fontWeight: 600,
    fontSize: 13,
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  active: {
    background: '#2563eb',
    color: '#fff',
    borderColor: '#2563eb'
  }
};
