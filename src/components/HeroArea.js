import React from 'react';
import "./HeroArea.css";
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import background from "../img/hero_area/hero_area-bg.jpg";

const HeroArea = () => {
  return (
    <header style={{backgroundImage: `url(${background})`}} className="min-h-screen bg-fixed bg-cover bg-top">
      <nav className="h-10">
        <ResponsiveMenu
          menuOpenButton={<div className="menuOpenButton flex justify-end"><FaBars size={30} color="white"/></div>}
          menuCloseButton={<div className="menuCloseButton"><FaRegWindowClose size={30} color="white"/></div>}
          changeMenuOn="768px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <ul>
              <li><a href="">Welcome</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          }
        />
      </nav>
    </header>
  );
};

export default HeroArea;
