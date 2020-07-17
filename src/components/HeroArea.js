import React from 'react';
import "./HeroArea.css";
import ResponsiveMenu from 'react-responsive-navbar';
import {FaBars, FaRegWindowClose} from 'react-icons/fa';
import background from "../img/hero_area/hero_area-bg.jpg";
import logo from "../img/hero_area/logo.png";

const HeroArea = () => {
  return (
    <header style={{backgroundImage: `url(${background})`}} className="min-h-screen bg-fixed bg-cover bg-top">
      <div className="header-content">
        <nav className="h-10">
          <ResponsiveMenu
            menuOpenButton={<div className="menuOpenButton flex justify-end"><FaBars size={30} color="#afc67b"/></div>}
            menuCloseButton={<div className="menuCloseButton"><FaRegWindowClose size={30} color="#afc67b"/></div>}
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
        <div className="container mt-32">
          <div className="grid grid-cols-12">
            <div className="col-start-9 col-end-13 header-core">
              <img src={logo} alt="logo"/>
              <div className="mt-24 uppercase whitespace-no-wrap">
                <h1>New Opening</h1>
                <h2 className="font-weight-bold">23rd Sept</h2>
              </div>
              <div className="mt-32">
                <a href="" className="uppercase whitespace-no-wrap bg-SPDarkGreen bg-opacity-75 px-4 py-3">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroArea;
