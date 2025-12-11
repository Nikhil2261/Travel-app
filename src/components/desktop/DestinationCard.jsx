import React from 'react';

// props: title, location, img, onFavorite
export default function DestinationCard({
  title = 'Darjeeling',
  location = 'West Bengal, India',
  img = '',
  favorite = false,
  onFavorite = () => {}
}) {
  return (
    <article className="dest-card card" role="article" aria-label={title} style={{padding:12}}>
      <div className="dest-media" style={{position:'relative', borderRadius:10, overflow:'hidden'}}>
        <img src={img} alt={title} style={{width:'100%', height:160, objectFit:'cover', display:'block'}}/>
        <button
          aria-pressed={favorite}
          onClick={onFavorite}
          className="dest-fav"
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          ♥
        </button>
      </div>

      <div className="dest-body" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
        <div>
          <div className="dest-title" style={{fontWeight:700}}>{title}</div>
          <div className="text-muted" style={{fontSize:13, marginTop:6}}>{location}</div>
        </div>

        <button className="btn-ghost" style={{padding:'6px 10px', borderRadius:12}}>Book Now</button>
      </div>
    </article>
  );
}
