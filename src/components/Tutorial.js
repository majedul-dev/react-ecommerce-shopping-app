import React from "react";
import Title from "./Title";
import "../styles/Tutorial.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Tutorial Images
import tutorialOne from "../images/slide-1.webp";
import tutorialTwo from "../images/slide-2.webp";
import tutorialThree from "../images/slide-3.webp";

const Tutorial = () => {
  return (
    <div className='section section-center'>
      <Title title='How to order from Chaldal ?' />
      <div className=''>
        <div className='tutorial-slider'>
          <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            buttonsDisabled={false}>
            <img src={tutorialOne} alt='' className='sliderimg' />
            <img src={tutorialTwo} alt='' className='sliderimg' />
            <img src={tutorialThree} alt='' className='sliderimg' />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
