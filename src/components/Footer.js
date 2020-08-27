import React from "react";
import "../styles/Footer.css";

import oneHour from "../images/payment/1-hour.webp";
import cashOnDelivery from "../images/payment/cash-on-delivery.webp";
import amex from "../images/payment/Amex.webp";
import bkash from "../images/payment/bkash.webp";
import COD from "../images/payment/COD.webp";
import mastercard from "../images/payment/mastercard.webp";
import visa from "../images/payment/VIsa.webp";
import anduraideApp from "../images/google_play_store.webp";
import appleApp from "../images/app_store.webp";
import phonIcon from "../images/phone_icon.webp";
import facebook from "../images/social/Facebook.webp";
import youtube from "../images/social/Youtube.webp";
import twitter from "../images/social/twitter.webp";
import instagram from "../images/social/Instagram.webp";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-banner'>
        <div className='left'>
          <img src={oneHour} alt='' />1 hour delivery
          <img src={cashOnDelivery} alt='' />
          Cash on delivery
        </div>
        <div className='right'>
          Pay with
          <img src={amex} alt='' />
          <img src={mastercard} alt='' />
          <img src={visa} alt='' />
          <img src={bkash} alt='' />
          <img src={COD} alt='' />
        </div>
      </div>
      <div className='footer-content'>
        <div className='left'>
          <img
            className='chaldal-logo'
            src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1211/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1'
            alt=''
          />
          <p>
            Chaldal.com is an online shop in Dhaka, Bangladesh. We believe time
            is valuable to our fellow Dhaka residents, and that they should not
            have to waste hours in traffic, brave bad weather and wait in line
            just to buy basic necessities like eggs! This is why Chaldal
            delivers everything you need right at your door-step and at no
            additional cost.
          </p>
        </div>
        <div className='right'>
          <div className='get-apps'>
            <a href='https://majedulislam.co'>
              <img src={anduraideApp} alt='' />
            </a>
            <a href='https://majedulislam.co'>
              <img src={appleApp} alt='' />
            </a>
          </div>
          <div className='contact'>
            <div>
              <img src={phonIcon} alt='' /> <h3>01600000900</h3>
            </div>
            <div className='email'>
              <p>or email</p> <span> suport@email.com</span>
            </div>
          </div>
          <div className='social'>
            <a href='https://majedulislam.co'>
              <img src={facebook} alt='' />
            </a>
            <a href='https://majedulislam.co'>
              <img src={youtube} alt='' />
            </a>
            <a href='https://majedulislam.co'>
              <img src={twitter} alt='' />
            </a>
            <a href='https://majedulislam.co'>
              <img src={instagram} alt='' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
