import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    text: "COVID-19 Protection",
    url: "/",
    icon: "fas fa-virus-slash fa-style",
  },
  {
    id: 2,
    text: "New Arival",
    url: "/",
    icon: "fas fa-bullhorn fa-style",
  },
  {
    id: 3,
    text: "Popular",
    url: "/",
    icon: "far fa-star fa-style",
  },
  {
    id: 4,
    text: "Baby Care",
    url: "/",
    icon: "fas fa-baby fa-style",
  },
];

const tempLink = data.map((link) => {
  return (
    <Link key={link.id} to={link.url}>
      <li>
        <i className={link.icon}></i>
        {link.text}
      </li>
    </Link>
  );
});

export default ({ styleclass }) => {
  return <ul styleclass={styleclass ? styleclass : ""}>{tempLink}</ul>;
};
