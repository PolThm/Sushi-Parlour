import React from "react";
import "./Group05.css";
import mark from '../img/group05/mark.png';

const Group05 = () => {
  return (
    <div className="g05 bg-SPDarkGreen bg-opacity-75 flex flex-col justify-center items-center text-center px-10">
      <h2 className="font-goodDogCool text-SPGreen text-4xl sm:text-5xl">We like to keep things simple</h2>
      <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam quis.</p>
      <div className="mt-10 flex ">
        <img src={mark} alt="Small mark"/>
        <img src={mark} alt="Small mark" className="px-2"/>
        <img src={mark} alt="Small mark"/>
      </div>
    </div>
  );
};

export default Group05;
