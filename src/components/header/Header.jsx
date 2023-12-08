// import React from "react";

import { Link } from "react-router-dom";
// react icons
import { CiDark } from "react-icons/ci";
// images
import Logo from "../../assets/media/logo.png";
import "../../assets/style/Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-logo">
              <img className="images-logo" src={Logo} alt="" />
            </div>
            <div className="navbar">
              <ul className="df">
                <Link  to="/">Главный</Link>
                <Link  to="/Comands">Команда</Link>
                <Link to="/Projects">Проекты</Link>
                <Link to="/Contact">Контакт</Link>
              </ul>
            </div>
            <div className="dark">
              <div className="color">
              <button className="dark__mood">
                <CiDark 
                className="ciDark"/>
              </button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
