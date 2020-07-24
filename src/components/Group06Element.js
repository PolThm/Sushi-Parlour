import React from "react";

const Group06Element = (props) => {
  return (
    <div className="g06Element flex mb-10 md:mb-16">
      <div className="w-24 h-full">
        <img src={props.img} alt="Sushi icon" className="rounded-full w-full h-full"/>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <h4 className="font-goodDogCool text-2xl leading-none">{props.title}</h4>
        <p className="font-thin leading-tight pt-3">Lorem ipsum dolor sit amet, consectetur
          adipisicing elit sed do oculis <span className="ml-3 font-goodDogCool text-2xl">$14.95</span></p>
      </div>
    </div>
  );
};

export default Group06Element;
