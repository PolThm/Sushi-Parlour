import React from "react";
import imgG2 from "../img/group_02/group02-img.png"

const Group02 = () => {
  return (
    <div className="flex">
      <div className="pl-24 pr-12 flex flex-col justify-center">
        <h2 className="font-goodDogCool text-3xl text-SPGreen">What do we actually cook?</h2>
        <p className="mt-6 font-montserrat font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
          do eiusmod tempor incididunt ut labore et dolorem magna
          aliqua. Ut enim ad minim veniam quis nostrud.</p>
      </div>
      <img src={imgG2} alt="Some sushis" />
    </div>
  );
};

export default Group02;
