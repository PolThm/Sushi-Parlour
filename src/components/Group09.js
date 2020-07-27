import React from "react";
import "./Group09.css";
import Group09Element from "./Group09Element";
import food01 from "../img/group09/g09-food01.jpg";
import food02 from "../img/group09/g09-food02.jpg";
import food03 from "../img/group09/g09-food03.jpg";

const Group09 = () => {
  return (
    <div className="g09 bg-SPDarkGreen bg-opacity-75">
      <div className="container pt-16 pb-40">
        <div className="g09-content">
          <div className="pb-10 text-center">
            <h2 className="font-goodDogCool text-5xl sm:text-6xl">Taste</h2>
            <h2 className="g09TitleL2 text-3xl sm:text-5xl uppercase font-weight-light">Our new flavors</h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Group09Element
              img={food01}
              food="Makis"
              date="16th May, 2020"
            />
            <Group09Element
              img={food02}
              food="Spices"
              date="10th June, 2020"
              center={true}
            />
            <Group09Element
              img={food03}
              food="Rolls"
              date="27th July, 2020"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group09;
