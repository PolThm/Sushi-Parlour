import React from "react";
import "./Group06.css";
import g06Bg from '../img/group06/g06-bg.jpg';
import Group06Element from "./Group06Element";
import sushi01 from "../img/group06/icon-sushi-01.jpg";
import sushi02 from "../img/group06/icon-sushi-02.jpg";
import sushi03 from "../img/group06/icon-sushi-03.jpg";
import sushi04 from "../img/group06/icon-sushi-04.jpg";
import sushi05 from "../img/group06/icon-sushi-05.jpg";
import sushi06 from "../img/group06/icon-sushi-06.jpg";

const Group06 = () => {
  return (
    <div style={{backgroundImage: `url(${g06Bg})`}} className="g06 bg-fixed bg-cover">
      <div className="g06-marginTop"/>
        <div className="g06-main">
          <div className="pt-16 pb-10 text-center px-1">
            <h2 className="font-goodDogCool text-6xl">Discover</h2>
            <h2 className="g06TitleL2 text-3xl sm:text-5xl uppercase font-weight-light">Our new menu</h2>
          </div>
          <div className="g06-content flex flex-col md:flex-row items-center justify-between">
            <div className="md:pr-10">
              <Group06Element
                img={sushi01}
                title="Nigiri with our best fish"
              />
              <Group06Element
                img={sushi02}
                title="Sushi complete variety"
              />
              <Group06Element
                img={sushi03}
                title="Uramaki made with the best ingredients"
              />
            </div>
            <div>
              <Group06Element
                img={sushi04}
                title="Ramen is part of our cuisine"
              />
              <Group06Element
                img={sushi05}
                title="Sashimi for fish lovers"
              />
              <Group06Element
                img={sushi06}
                title="Sushi rice made the traditional way"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Group06;
