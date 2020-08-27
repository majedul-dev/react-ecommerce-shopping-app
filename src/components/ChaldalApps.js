import React from "react";
import "../styles/ChaldalApps.css";
import appImg from "../images/lp_iphone_nexus.webp";
import anduraidAppImg from "../images/lp_getandroidapp.webp";
import appleAppImg from "../images/lp_getappleapp.webp";

const ChaldalApps = () => {
  return (
    <div className='section section-center'>
      <div className='chaldalApps'>
        <div className='get-app'>
          <h1 className='app-title'>Be a part of our family</h1>
          <div className='input-phone-number'>
            <div>
              <input type='text' />
              <button>Get app</button>
            </div>
            <small>e.g. +8801672955886</small>
          </div>
          <div className='app-link'>
            <a href='#'>
              <img src={anduraidAppImg} alt='' />
            </a>
            <a href='#'>
              <img src={appleAppImg} alt='' />
            </a>
          </div>
        </div>
        <img className='appImg' src={appImg} alt='Chaldal App' />
      </div>
    </div>
  );
};

export default ChaldalApps;
