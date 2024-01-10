import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navi.css";

import logo from "../../assets/logo_long.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#form">Sign Up</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#faq">FAQ</a>
    </p>
  </>
);

const Navi = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="elitefit__navi">
      <div className="elitefit__navi-links">
        <div className="elitefit__navi-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="elitefit__navi-links_container">
          <Menu />
        </div>
      </div>
      <div className="elitefit__navi-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#ffff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#ffff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="elitefit_navi-menu_container scale-up-center">
            <div className="elitefit__navi-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navi;
