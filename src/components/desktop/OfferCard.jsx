import React from 'react';

export default function OfferCard({
  img = '/src/assets/455954512.jpg',
  title = 'Grab Up to 25% OFF*',
  
  cta = 'BOOK NOW',
  alt = 'offer image'
}) {
  return (
    <article className="offer-card card" role="article" aria-label={title}>
      <div className="offer-media" aria-hidden>
        <img src={img} alt={alt} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8 }} />
        { <span className="offer-tag"></span>}
      </div>

      <div className="offer-body">
        <div className="offer-text">{title}</div>
        <button className="offer-cta" aria-label={`Book ${title}`}>{cta}</button>
      </div>
    </article>
  );
}
