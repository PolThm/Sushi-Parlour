import React, {Component} from "react";
import brush from "../img/group_03/brush.png";

const Group03Element = (props) => {
    const brushes = Array.from(Array(props.nbOfBrushes)).map((_, i) => <img className="mr-2" key={i} src={brush} alt="Brush"/>);

    return (
      <div className="g03Element flex flex-col items-center sm:items-start text-center sm:text-left mt-10 sm:mt-0 px-10 sm:px-0">
        <div className="flex">{brushes}</div>
        <h4 className="mt-3 font-goodDogCool text-2xl">{props.title}</h4>
        <p className="mt-6 sm:pr-20 font-thin">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
    )
};

export default Group03Element;
