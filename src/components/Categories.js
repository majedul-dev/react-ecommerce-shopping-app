import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";
import Title from "./Title";
import ProductCategories from "../constants/categories";

const Categories = () => {
  return (
    <div className='section section-center'>
      <Title title='Our Product Categories' />
      <div className='categories'>
        <ProductCategories />
      </div>
    </div>
  );
};

export default Categories;
