import React from "react";

const Group04Dish = (props) => {
  let className = "g04Dish flex flex-col";

  if(props.peer && props.col2) {
    className += ' sm:flex-row-reverse lg:flex-row-reverse'
  } else if(props.peer) {
    className += ' lg:flex-row sm:flex-row-reverse';
  } else if (props.col2) {
    className += ' sm:flex-row lg:flex-row-reverse';
  } else {
    className += ' sm:flex-row lg:flex-row';
  }

  return (
    <div className={className}>
      <div className="w-full">
        <img src={props.img} alt={props.title} className="w-full h-full bg-cover"/>
      </div>
      <div className="w-full flex items-center">
        <div className="p-16 sm:py-4 lg:px-4 xl:px-16 text-center w-full flex flex-col justify-center">
          <h4 className="text-3xl font-goodDogCool text-SPGreen">{props.title}</h4>
          <p className="mt-3">{props.description}</p>
          <p className="text-3xl font-goodDogCool mt-2">${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Group04Dish;
