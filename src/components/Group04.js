import React from "react";
import "./Group04.css";
import img01 from '../img/group04/g04-img01.jpg';
import img02 from '../img/group04/g04-img02.jpg';
import img03 from '../img/group04/g04-img03.jpg';
import img04 from '../img/group04/g04-img04.jpg';
import img05 from '../img/group04/g04-img05.jpg';
import img06 from '../img/group04/g04-img06.jpg';
import Group04Dish from "./Group04Dish";

const data = [
  {
    img: img01,
    title: 'California Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '14.95'
  },
  {
    img: img02,
    title: 'Traditional Wok',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '12.95'
  },
  {
    img: img03,
    title: 'Poké Bowl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '13.95'
  },
  {
    img: img04,
    title: 'Fresh Salmon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '14.95'
  },
  {
    img: img05,
    title: 'Avocado Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '16.95'
  },
  {
    img: img06,
    title: 'King Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
    price: '15.95'
  },
];

const Group04 = () => {
  return (
    <div className="g04">
      <div className="container my-24 px-0">
        <div className="bg-SPDarkGreen bg-opacity-75 py-16 text-center">
          <h2 className="font-goodDogCool text-SPGreen text-4xl sm:text-5xl">We bring tradition</h2>
          <h2 className="g04TitleL2 text-3xl sm:text-5xl uppercase font-weight-light">To your plate</h2>
        </div>
        <div className="bg-SPDarkGreen bg-opacity-75 grid lg:grid-cols-2">
          {data.map((item, index) => (
            <Group04Dish
              key={index}
              peer={index % 2 === 0}
              line2={index === 2 || index === 3}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Group04;
