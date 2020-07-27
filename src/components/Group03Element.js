import React from "react";
import brush from "../img/group03/brush.png";

const Group03Element = (props) => {
  const brushes = Array.from(Array(props.nbOfBrushes)).map((_, i) => <img className="mr-2" key={i} src={brush} alt="Brush"/>);

  return (
    <div className={props.left ? "g03Element flex flex-col items-center sm:items-start text-center sm:text-left mt-10 sm:mt-0 px-10 sm:px-0 " : "g03Element flex flex-col items-center sm:items-start text-center sm:text-left mt-10 sm:mt-0 px-10 sm:px-0 sm:pl-20 lg:pl-40"}>
      <div className="flex">{brushes}</div>
      <h4 className="mt-3 font-goodDogCool text-2xl">{props.title}</h4>
      <p className="mt-6 sm:mt-6 font-thin">Lorem ipsum dolor sit amet sed do, consectetur
        adipiscing elit, eiusmod tempor incididunt ut et dolore.</p>
    </div>
  )
};

export default Group03Element;
