import React from "react";
import "./Group10.css";
import marks from '../img/group10/marks.png';

const Group10 = () => {
  return (
    <div className="g10 py-16 px-10 bg-SPDarkGray">
      <div className="flex flex-col items-center">
        <div>
          <img src={marks} alt="Big marks"/>
        </div>
        <p className="mt-6 text-SPGreen text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. </p>
        <p className="text-SPGreen font-goodDogCool text-3xl mt-3">Linda Steward</p>
      </div>
      <div className="mt-8 flex justify-center flex-wrap">
        <a href=""><i className="fab fa-facebook-f"/></a>
        <a href=""><i className="fab fa-twitter"/></a>
        <a href=""><i className="fab fa-instagram"/></a>
        <a href=""><i className="fab fa-pinterest-p"/></a>
        <a href=""><i className="fab fa-google-plus-g"/></a>
      </div>
    </div>
  );
};

export default Group10;
