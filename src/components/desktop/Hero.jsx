
import React from 'react';
import SearchCard from './SearchCard';
import heroImg from '../../assets/9579893.avif'; 

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />

      <div className="hero-top container">
        <div className="hero-row" style={{display:"flex", justifyContent:'space-between', fontWeight:'bold'}}>
          <div className="logo">Logo</div>
          <div className="hero-actions">
            <button className="btn-ghost">Login / Create Account</button>
            <select style={{padding:'8px 10px', borderRadius:5, border:'1px solid rgba(2,6,23,0.06)', marginLeft:8}}>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* CENTERED floating category rect (this is the big rectangle that holds the small pills) */}
        <div className="category-rect-wrap">
          <div className="category-rect container">
            <div className="category-list">
              {['Flight','Train','Bus','Hotel','Homestay','Cab','Tours','Holiday'].map((t)=>(
                <div key={t} className="category-pill-rect">
                  <div className="category-thumb-rect" />
                  <div className="category-label-rect">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* the search card sits below; because category-rect is absolute/transformed it appears to float above the card */}
        <div className="hero-search-wrap">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
