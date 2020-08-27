import React from "react";
import { Link } from "react-router-dom";
import "../styles/SubBanner.css";
import covid19Banner from "../images/covid19_banner.webp";
import petBanner from "../images/pet_banner.webp";

const SubBanner = ({ openSidebar }) => {
  return (
    <div
      className={`sub-banner section section-center ${
        openSidebar ? "min-sub-banner" : "max-sub-banner"
      }`}>
      <Link to='/'>
        <img src={petBanner} alt='Sub Banner One' />
      </Link>
      <Link to='/'>
        <img src={covid19Banner} alt='Sub Banner Two' />
      </Link>
    </div>
  );
};

export default SubBanner;
