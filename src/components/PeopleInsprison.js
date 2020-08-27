import React from "react";
import Title from "./Title";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../styles/PeopleInsprison.css";

import tileImage1 from "../images/lp-features-1.webp";
import tileImage2 from "../images/lp-features-2.webp";
import tileImage3 from "../images/lp-features-3.webp";

const PeopleInsprison = () => {
  const data = [
    {
      id: 1,
      img: tileImage1,
      title: "Convenient & Quick",
      text:
        "No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your door.",
      style: "border1",
    },
    {
      id: 2,
      img: tileImage2,
      title: "Freshly Picked",
      text:
        "Our fresh produce is sourced every morning, you get the best from us.",
      style: "border2",
    },
    {
      id: 3,
      img: tileImage3,
      title: "A wide range of Products",
      text:
        "With 4000+ Products to choose from, forget scouring those aisles for hours.",
      style: "border3",
    },
  ];
  return (
    <div className='persolanl-insprison section'>
      <div className='section-title'>
        <h1>
          Why People <i className='fas fa-heart'></i> Chaldal
        </h1>
      </div>
      <div className='mainTile'>
        {data.map((item) => {
          const { id, img, title, text, style } = item;
          return (
            <div key={id} className='tile'>
              <div className='tileHeaderImg'>
                <img src={img} alt='' />
              </div>
              <div className={`tileHeaderText ${style}`}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleInsprison;
