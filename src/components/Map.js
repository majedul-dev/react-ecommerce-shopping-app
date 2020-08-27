import React from "react";
import "../styles/Map.css";
import mapImg from "../images/map.webp";

const Map = () => {
  return (
    <section className='map-section'>
      <div className='map-content'>
        <img className='mapImg' src={mapImg} alt='' />
        <div className='info-text'>
          <div className='main-info'>Dhaka</div>
          <section>
            <div className='title'>Total Orders Placed</div>
            <div className='info'>2,061,928</div>
          </section>
          <section>
            <div className='title'>Total Savings</div>
            <div className='info'>৳175,263,880</div>
          </section>
          <section>
            <div className='title'>Time Saved</div>
            <div className='info'>1,546,446 hrs</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Map;
