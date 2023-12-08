import React from "react";
import Logo from "../../assets/media/logo.png";
import "../../assets/style/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="navbar">
              <ul className="ul-wrapper">
                <Link to="/">Главный</Link>
                <Link to="/Comands">Команда</Link>
                <Link to="/Projects">Проекты</Link>
                <Link to="/Contact">Контакт</Link>
              </ul>
            </div>
            <div className="options">
              <select name="translate">
                <option value="RU">RU</option>
                <option value="ENG">USA</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
