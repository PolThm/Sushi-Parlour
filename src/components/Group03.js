import React from "react";
import "./Group03.css";
import Group03Element from "./Group03Element";

const Group03 = () => {
  return (
    <div className="group03 bg-SPDarkGreen bg-opacity-75">
      <div className="container h-full flex justify-center items-center">
        <Group03Element title={'New tastes'} nbOfBrushes={1}/>
        <Group03Element title={'New dishes cooking'} nbOfBrushes={2}/>
        <Group03Element title={'New restaurant'} nbOfBrushes={3}/>
      </div>
    </div>
  );
};

export default Group03;
