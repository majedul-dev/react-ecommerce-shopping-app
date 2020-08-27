import React from "react";
import "../styles/Title.css";

const Title = ({ title }) => {
  return (
    <div className='section-title'>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
