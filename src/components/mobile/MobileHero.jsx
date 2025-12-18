import React from 'react';
import heroImg from '../../assets/9579893.avif';

// Import your icon images
import flightIcon from '../../icons/flight.png';
import trainIcon from '../../icons/train.png';
import busIcon from '../../icons/bus.png';
import hotelIcon from '../../icons/hotel.png';
import moreIcon from '../../icons/more.png';
import menuIcon from '../../icons/menu.png';
import bellIcon from '../../icons/bell.png';
import userIcon from '../../icons/user.png';

const categories = [
  { label: 'Flight', icon: flightIcon },
  { label: 'Train', icon: trainIcon },
  { label: 'Bus', icon: busIcon },
  { label: 'Hotel', icon: hotelIcon },
  { label: 'More', icon: moreIcon },
];

export default function MobileHero() {
  return (
    <section className="m-hero">
      {/* top icons row */}
      <div className="m-hero-topbar">
        <div className="m-hero-left">
          <button className="m-icon-btn">
            <img src={menuIcon} alt="Menu" width="16px" height="16px"  />
          </button>
          <span className="m-logo-text">Logo</span>
        </div>

        <div className="m-hero-right">
          <button className="m-icon-btn">
            <img src={bellIcon} alt="Notifications" />
          </button>
          <button className="m-icon-btn">
            <img src={userIcon} alt="User profile" />
          </button>
        </div>
      </div>

      {/* main offer card */}
      <div className="m-hero-card">
        <div className="m-hero-image-wrap">
          <img src={heroImg} alt="Hotel offer" className="m-hero-image" />

          <span className="m-hero-chip">HOTELS</span>

          <div className="m-hero-text">
            <div className="m-hero-title">UNLOCK BIG SAVINGS</div>
            <div className="m-hero-sub">
              Grab Up to 25% OFF* on Hotels
            </div>

            <div className="m-hero-code-row">
              <span className="m-hero-code-label">use code</span>
              <span className="m-hero-code-pill">HOLIDAY25</span>
            </div>
          </div>

          <button className="m-hero-book">BOOK NOW ›</button>
        </div>
      </div>

      {/* floating categories */}
      <div className="m-hero-cats-wrap">
        <div className="m-hero-cats">
          {categories.map((c) => (
            <button key={c.label} className="m-cat-pill">
              <div className="m-cat-icon">
                <img src={c.icon} alt={`${c.label} icon`} width="24px" height="24px"  />
              </div>
              <div className="m-cat-label">{c.label}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}