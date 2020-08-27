import React from "react";
import "../styles/ProductBanner.css";

const ProductBanner = ({ img, title }) => {
  return (
    <>
      <div className='product-banner'>
        <img src={img} alt='Product-banner' />
      </div>
      <div className='prduct-title'>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default ProductBanner;
