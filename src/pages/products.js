import React from "react";
import "../styles/pages/products.css";
import ProductBanner from "../components/ProductBanner";
import fruitBanner from "../images/products/fruits-vegetables.webp";

const products = () => {
  return (
    <div className='section section-center'>
      <div className='section-content'>
        <ProductBanner img={fruitBanner} title='Fruits & Vegetables' />
      </div>
    </div>
  );
};

export default products;
