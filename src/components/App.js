import React from 'react';
import "./App.css";
import HeroArea from "./HeroArea";
import Group02 from "./Group02";
import Group03 from "./Group03";
import Group04 from "./Group04";
import Group05 from "./Group05";
import Group06 from "./Group06";
import Group07 from "./Group07";
import Group08 from "./Group08";
import Group09 from "./Group09";
import Group10 from "./Group10";
import Footer from "./Footer";
import mainBG from "../img/main-bg.png";

const App = () => {
  return (
    <div className="main">
      <img src={mainBG} alt="main background" className="main-bg"/>
      <HeroArea/>
      <Group02/>
      <Group03/>
      <Group04/>
      <Group05/>
      <Group06/>
      <Group07/>
      <Group08/>
      <Group09/>
      <Group10/>
      <Footer/>
    </div>
  );
};

export default App;
