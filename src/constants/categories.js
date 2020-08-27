import React from "react";
import { Link } from "react-router-dom";

import fruits from "../images/svg/fruit.PNG";
import fish from "../images/svg/fish.PNG";
import coocking from "../images/svg/coocking.PNG";
import beverage from "../images/svg/beverage.PNG";
import cleaning from "../images/svg/cleaning.PNG";
import pestcontrol from "../images/svg/pestcontrol.PNG";
import officeProducts from "../images/svg/office-products.PNG";
import beautyProducts from "../images/svg/beauty-products.PNG";
import healthProducts from "../images/svg/health-products.PNG";
import petCare from "../images/svg/pet-care.PNG";
import homeAppliance from "../images/svg/home-appliance.PNG";
import babyCare from "../images/svg/baby-care.PNG";

const data = [
  {
    id: 1,
    text: "Fruits and Vegetables",
    url: "/fruits-vegetables",
    img: fruits,
  },
  { id: 2, text: "Meat and Fish", url: "/", img: fish },
  { id: 3, text: "Cooking", url: "/", img: coocking },
  { id: 4, text: "Beverages", url: "/", img: beverage },
  { id: 5, text: "Home and Cleaning", url: "/", img: cleaning },
  { id: 6, text: "Pest Control", url: "/", img: pestcontrol },
  { id: 7, text: "Office Products", url: "/", img: officeProducts },
  { id: 8, text: "Beauty Products", url: "/", img: beautyProducts },
  { id: 9, text: "Health Products", url: "/", img: healthProducts },
  { id: 10, text: "Pet Care", url: "/", img: petCare },
  { id: 11, text: "Home Appliance", url: "/", img: homeAppliance },
  { id: 12, text: "Baby Care", url: "/", img: babyCare },
];

const templink = data.map((item) => {
  return (
    <Link key={item.id} to={item.url}>
      <li>
        <span>{item.text}</span>
        <img src={item.img} alt='' />
      </li>
    </Link>
  );
});

export default ({ styleclass }) => {
  return <ul styleclass={styleclass ? styleclass : ""}>{templink}</ul>;
};
