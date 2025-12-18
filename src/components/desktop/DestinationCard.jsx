import React from 'react';
import heartIcon from '/src/assets/Heart-icon.png';
import locationIcon from '/src/assets/location.png';

// export default function DestinationCard({
//   title = 'Darjeeling',
//   location = 'West Bengal, India',
//   img = '',
//   favorite = false,
//   onFavorite = () => {}
// }) {
//   return (
//     <article className="dest-card card" aria-label={title}>
      
//       {/* IMAGE */}
//       <div className="dest-media">
//         <img src={img} alt={title} />

//         {/* ❤️ Heart icon (top-right) */}
//         <button className="dest-fav-img" onClick={onFavorite}>
//           <img src={heartIcon} alt="favorite" />
//         </button>
//       </div>

//       {/* CONTENT */}
//       <div className="dest-body">
//         <div className="dest-left">
//           <div className="dest-title">{title}</div>

//           {/* 📍 location with icon */}
//           <div className="dest-location">
//             <img src={locationIcon} alt="location" />
//             <span>{location}</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="dest-right">
//           {/* dotted circles */}
//           <div className="dest-dots">
//             <span></span><span></span><span></span>
//           </div>

//           <button className="btn-book">Book Now</button>
//         </div>
//       </div>
//     </article>
//   );
// }
export default function DestinationCard({
  title = 'Darjeeling',
  location = 'West Bengal, India',
  img = '',
  favorite = false,
  onFavorite = () => {}
}) {
  return (
    <article className="dest-card card" role="article" aria-label={title}>

      {/* IMAGE */}
      <div className="dest-media">
        <img src={img} alt={title} />

        {/* HEART ICON */}
        <button className="dest-fav" onClick={onFavorite}>
          ♥
        </button>
      </div>

      {/* BODY */}
      <div className="dest-body">
        <div>
          <div className="dest-title">{title}</div>

          <div className="dest-location">
            <img src="/src/assets/location.png" alt="" />
            {location}
          </div>
        </div>

        {/* ACTION */}
        <div className="dest-action">
          {/* 🔵 OVERLAPPING CIRCLES */}
          <div className="dest-circles">
            <span />
            <span />
            <span />
            <span />
          </div>

          <button className="btn-book">Book Now</button>
        </div>
      </div>
    </article>
  );
}
