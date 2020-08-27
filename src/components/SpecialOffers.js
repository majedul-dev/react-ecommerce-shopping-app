import React from "react";
import "../styles/SpecialOffers.css";
import Title from "../components/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../constants/specialOffers";

// Product Images
import offer1 from "../images/specialOffers/offer1.webp";
import offer2 from "../images/specialOffers/offer-2.webp";
import offer3 from "../images/specialOffers/offer-3.webp";
import offer4 from "../images/specialOffers/offer-4.webp";
import offer5 from "../images/specialOffers/offer-5.webp";
import offer6 from "../images/specialOffers/offer-6.webp";
import product1 from "../images/specialOffers/product-1.webp";
import product2 from "../images/specialOffers/product-2.webp";
import product3 from "../images/specialOffers/product-3.webp";

const SpecialOffers = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='section section-center'>
      <Title title='Special Offers' />
      <div className='special-offers'>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          partialVisible={false}>
          {data.map((item) => {
            const { id, productBanner, productImg, weight, text, price } = item;
            return (
              <div key={id} className='card'>
                <div className='card-body'>
                  <div className='product-img'>
                    <img src={productBanner} alt='' />
                  </div>
                  <div className='product-details'>
                    <img src={productImg} alt='' />
                    <div className='product-info'>
                      <p>{text}</p>
                      <div className='weight'>{weight}</div>
                      <div className='price'>$ {price}</div>
                    </div>
                    <div className='product-details-hover-after'>
                      <div className='content'>
                        <div>{price}</div>
                        <div>in bag</div>
                      </div>
                      <button className='details'>Details</button>
                    </div>
                  </div>
                  <div className='cart-action'>
                    <a href='#'>
                      <i className='fas fa-cart-plus'></i>
                      <p>Add to bag</p>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SpecialOffers;
