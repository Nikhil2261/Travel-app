// import locationIcon from "../../../assets/location.png";
// import starIcon from "../../../icons/Rating_Icon.png";

// export default function DestinationInfoMobile() {
//   return (
//     <div className="dest-info-mobile">

//       <div className="dest-title-row">
//         <h2>Darjeeling</h2>
//         <span className="dest-price">₹700 / person</span>
//       </div>

//       <div className="dest-meta-row">
//         <div className="dest-location">
//           <img src={locationIcon} alt="" />
//           <span>West Bengal, India</span>
//         </div>

//         <div className="dest-rating">
//           <img src={starIcon} alt="" />
//           <span>4.7 (19K Reviews)</span>
//         </div>
//       </div>

//     </div>
//   );
// }



export default function MobileDestInfo() {
  return (
    <div className="md-info">
      <div className="md-title-row">
        <h2>Darjeeling</h2>
        <span className="price">₹700 / person</span>
      </div>

      <div className="md-meta">
        <span>📍 West Bengal, India</span>
        <span>⭐ 4.7 (19K Reviews)</span>
      </div>
    </div>
  );
}
