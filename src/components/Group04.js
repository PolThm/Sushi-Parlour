import React from "react";
import "./Group04.css";
import img01 from '../img/group_04/g04-img01.jpg';
import img02 from '../img/group_04/g04-img02.jpg';
import img03 from '../img/group_04/g04-img03.jpg';
import img04 from '../img/group_04/g04-img04.jpg';
import img05 from '../img/group_04/g04-img05.jpg';
import img06 from '../img/group_04/g04-img06.jpg';
import Group04Dish from "./Group04Dish";

const Group04 = () => {
  return (
    <div className="g04">
      <div className="container bg-SPDarkGreen my-24 mx-auto px-0">
        <div className="py-16 text-center px-1">
          <h2 className="font-goodDogCool text-SPGreen text-4xl sm:text-5xl">We bring tradition</h2>
          <h2 className="text-3xl sm:text-5xl uppercase font-weight-light">To your plate</h2>
        </div>
        <div className="grid lg:grid-cols-2">
          <Group04Dish
            img={img01}
            title={"California Sushi"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"14.95"}
          />
          <Group04Dish
            img={img02}
            title={"Traditional Wok"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"12.95"}
            peer={true}
          />
          <Group04Dish
            img={img03}
            title={"California Sushi"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"14.95"}
            col2={true}
          />
          <Group04Dish
            img={img04}
            title={"Traditional Wok"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"12.95"}
            peerAndCol2={true}
          />
          <Group04Dish
            img={img05}
            title={"California Sushi"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"14.95"}
          />
          <Group04Dish
            img={img06}
            title={"Traditional Wok"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"}
            price={"12.95"}
            peer={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Group04;
