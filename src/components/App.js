import React from 'react';
import "./App.css";
import HeroArea from "./HeroArea";
import mainBG from "../img/main-bg.png";

const App = () => {
  return (
    <div className="main">
      <img src={mainBG} alt="main background" className="main-bg"/>
      <HeroArea/>

      <div className="h-screen"/>
    </div>
  );
};

export default App;
