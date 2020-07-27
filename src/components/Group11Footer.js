import React from "react";
import "./Group11Footer.css";

const Group11Footer = () => {
  return (
    <footer className="py-16 px-10">
      <div className="container flex grid grid-cols-1 sm:grid-cols-2 ">
        <div className="flex flex-col items-center sm:items-start pr-1">
          <h4 className="text-xl">About</h4>
          <p className="font-light text-center sm:text-left">Lorem ipsum dolor sit amet, consec
            tetur adipisicing elit sed</p>
          <p className="mt-6 sm:mt-2 text-center sm:text-left">© 2020 - Developed by <span><a href="https://pol-thomas.com/" target={"blank"}>Pol Thomas</a></span></p>
        </div>
        <div className="hidden sm:flex justify-between ">
          <div>
            <h5>About</h5>
            <div className="flex flex-col">
              <a href="">Team</a>
              <a href="">Join us</a>
              <a href="">Ethic</a>
              <a href="">Goals</a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <div className="flex flex-col">
              <a href="">Team</a>
              <a href="">Join us</a>
              <a href="">Ethic</a>
              <a href="">Goals</a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <div className="flex flex-col">
              <a href="">Team</a>
              <a href="">Join us</a>
              <a href="">Ethic</a>
              <a href="">Goals</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Group11Footer;
