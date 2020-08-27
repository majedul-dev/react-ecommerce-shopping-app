import React from "react";
import "../styles/Corporate.css";
import corporateBanner from "../images/banner-corporate-page.jpg";

const Corporate = () => {
  return (
    <div className='section'>
      <div className='corporate'>
        <div className='corporate-content'>
          <i className='fas fa-briefcase briefcase'></i>
          <h2>Do you own a business?</h2>
          <h3>Become a Corporate Customer</h3>
          <div className='corporate-functions'>
            <div className='card'>
              <i className='fas fa-money-check-alt'></i>
              <p>Special Corporate Price</p>
            </div>
            <div className='card'>
              <i className='fas fa-headset'></i>
              <p>24 Hour Support</p>
            </div>
            <div className='card'>
              <i className='fas fa-truck'></i>
              <p>Flexible Free Delivery</p>
            </div>
          </div>
          <button className='findOutMore-btn'>Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
