import React from 'react';
import "./App.css";
import Group01HeroArea from "./Group01HeroArea";
import Group02 from "./Group02";
import Group03 from "./Group03";
import Group04 from "./Group04";
import Group05 from "./Group05";
import Group06 from "./Group06";
import Group07 from "./Group07";
import Group08 from "./Group08";
import Group09 from "./Group09";
import Group10 from "./Group10";
import Group11Footer from "./Group11Footer";
import mainBG from "../img/main-bg.png";

const App = () => {
  return (
    <div className="main">
      {/*<img src={mainBG} alt="main background" className="main-bg"/>*/}
      <Group01HeroArea/>
      <Group02/>
      <Group03/>
      <Group04/>
      <Group05/>
      <Group06/>
      <Group07/>
      <Group08/>
      <Group09/>
      <Group10/>
      <Group11Footer/>
    </div>
  );
};

export default App;
