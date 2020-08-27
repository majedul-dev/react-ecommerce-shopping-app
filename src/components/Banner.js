import React from "react";
import "../styles/Banner.css";
import SubBanner from "../components/SubBanner";

import SearchIcon from "@material-ui/icons/Search";

const Banner = ({ openSidebar }) => {
  return (
    <>
      <div className='banner '>
        <div
          className={`banner-content ${
            openSidebar ? "" : "min-banner-content"
          }`}>
          <h1>Groceries delivered in 1 hour</h1>
          <div className='banner-searchBar'>
            <input
              type='text'
              placeholder='Search for products (e.g. eggs, milk, alu)'
            />
            <SearchIcon className='search-icon' />
          </div>
        </div>
      </div>
      <SubBanner />
    </>
  );
};

export default Banner;
