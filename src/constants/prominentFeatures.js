import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    text: "COVID-19 Statement",
    url: "/",
    style: "text-red",
  },
  {
    id: 2,
    text: "Offers",
    url: "/",
    count: 56,
  },
  {
    id: 3,
    text: "Receips",
    url: "/",
  },
  {
    id: 4,
    text: "Product Request",
    url: "/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <Link key={link.id} to={link.url}>
      <li className={link.style}>
        {link.text}
        <span className={link.count ? "offer-count" : ""}>{link.count}</span>
      </li>
    </Link>
  );
});

export default ({ styleClass }) => {
  return <ul className={` ${styleClass ? styleClass : ""}`}>{tempLinks}</ul>;
};
