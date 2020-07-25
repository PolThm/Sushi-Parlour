import React from "react";
import "./Group03.css";
import Group03Element from "./Group03Element";

const Group03 = () => {
  return (
    <div className="g03 bg-SPDarkGreen bg-opacity-75">
      <div className="container pb-10 sm:p-0 h-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <Group03Element title={'New tastes'} nbOfBrushes={1} left={true}/>
        <Group03Element title={'New dishes cooking'} nbOfBrushes={2}/>
        <Group03Element title={'New restaurant'} nbOfBrushes={3}/>
      </div>
    </div>
  );
};

export default Group03;
