import React from "react";
import "../styles/SpecialOffers.css";
import Title from "../components/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../constants/specialOffers";

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
                    <a href='https://majedulislam.co'>
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
