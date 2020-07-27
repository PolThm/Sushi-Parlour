import React from "react";

const Group09Element = (props) => {
  return (
    <div className="g09Element px-4 py-8">
      <img src={props.img} alt="food" className="w-full"/>
      <div className="bg-white p-6">
        <h5 className="text-SPGray font-bold tracking-wide">{props.food} / {props.date}</h5>
        <h5 className="text-SPGray pt-4 font-bold">Lorem ipsum dolor sit</h5>
        <p className="text-SPGray">Lorem ipsum dolor sit amet lipum consectetur adipisicing elit sed</p>
        <div className="readMoreLink pt-4 py-2">
          <a href="" className="text-SPGray uppercase font-bold tracking-wider">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Group09Element;
