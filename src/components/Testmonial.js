import React from "react";
import Title from "./Title";
import "../styles/Testmonial.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import thumbnail from "../images/majed1.jpg";
import thumbnai2 from "../images/men.jpeg";
import thumbnai3 from "../images/men2.jpeg";

const Testmonial = () => {
  const data = [
    {
      id: 1,
      img: thumbnail,
      name: "Majedul Islam",
      message:
        "Congratulations for being nominated for 9th best entrepreneur among 500 new entrepreneurs by Forbes Magazine!!! I wish chaldal team the very best.. And your products types, brand types need to be extended more.",
    },
    {
      id: 2,
      img: thumbnai2,
      name: "John Doe",
      message:
        "Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !",
    },
    {
      id: 3,
      img: thumbnai3,
      name: "Stiven Smith",
      message:
        "I want to order something (A perfume) for my mom at BD. Although the delivery area was out of their scope, their support team instantly replied to my query and manged to deliver the product. The best thing I noticed, they informed step by step updated news about the order processing.",
    },
  ];

  return (
    <div className='section section-center'>
      <Title title='What our clients are saying' />
      <div className='testmonial-slider'>
        <AliceCarousel
          autoPlay
          autoPlayInterval={5000}
          buttonsDisabled
          fadeOutAnimation={true}>
          {data.map((item) => {
            const { id, img, name, message } = item;
            return (
              <div key={id} className='testmonial'>
                <div className='thambnail'>
                  <img className='thambnail-img' src={img} alt='' />
                  <p className='name'>{name}</p>
                </div>
                <p className='message'>{message}</p>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Testmonial;
