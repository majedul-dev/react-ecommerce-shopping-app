import React from "react";
import "../styles/SubBanner.css";
import covid19Banner from "../images/covid19_banner.webp";
import petBanner from "../images/pet_banner.webp";

const SubBanner = ({ openSidebar }) => {
  return (
    <div
      className={`sub-banner section section-center ${
        openSidebar ? "min-sub-banner" : "max-sub-banner"
      }`}>
      <a href='#'>
        <img src={petBanner} alt='Sub Banner One' />
      </a>
      <a href='#'>
        <img src={covid19Banner} alt='Sub Banner Two' />
      </a>
    </div>
  );
};

export default SubBanner;
