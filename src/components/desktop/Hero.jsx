
import React from 'react';
import SearchCard from './SearchCard';
import heroImg from '../../assets/9579893.avif';
import logoImg from '../../assets/logo_3.png';
import { Link } from 'react-router-dom';



export default function Hero(){
  return (
  <section className="hero">
  <div
    className="hero-bg"
    style={{ backgroundImage: `url(${heroImg})` }}
  />

  <div className="hero-content container">

    {/* HEADER */}
    <div className="hero-row">
      <div className="logo-wrap">
  <img
    src={logoImg}
    alt="Aerotrav Logo"
    className="hero-logo"
  />
</div>

      <div className="hero-actions">
        {/* <button className="btn-ghost">Login / Create Account</button> */}
        <Link to="/login">
  <button className="btn-ghost">Login / Create Account</button>
</Link>

        <select>
          <option>INR</option>
        </select>
      </div>
    </div>

    {/* CATEGORY FLOAT */}
    <div className="category-float">
      <div className="category-rect">
        <div className="category-list">
          {['Flight','Train','Bus','Hotel','Homestay','Cab','Tours','Holiday'].map(t => (
            <div key={t} className="category-pill-rect">
              <div className="category-thumb-rect" />
              <div className="category-label-rect">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* SEARCH CARD */}
    <div className="search-float">
      <SearchCard />
    </div>

  </div>
</section>

  );
}


