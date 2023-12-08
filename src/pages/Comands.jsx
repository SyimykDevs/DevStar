import React from "react";
import "../assets/style/Comands.scss";
import Alisher from "../assets/media/Alisher.png";
import icon1 from "../assets/media/alikosh.png";
import icon2 from "../assets/media/alikosh2.png";
import icon3 from "../assets/media/alikosh3.png";
import Syimyk from '../assets/media/syimyk4.png'
import SyimykIcon from '../assets/media/syimykIcons.png'
import Sanjar from '../assets/media/Sanjar.png'
const Comands = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="comands-wrapper">
            <div className="content-comands">
              <h1 className="h1">Команда</h1>
              <p>
                Наша команда: Инноваторы, Разработчики, Творцы. Создаем <br />{" "}
                уникальные решения, воплощаем творческие идеи.
              </p>
            </div>
          </div>
          <div className="comandsPhoto">
            <div className="flexComands">
              <img src={Alisher} alt="" />
              <h2>Төлгөев Алишер</h2>
              <p>
                "Моя страсть — в создании уникальных, практичных <br />
                интерфейсов. Повышаю эффективность проектов <br />
                через инновации, улучшая стандарты <br />
                пользовательского опыта."
              </p>
              <div className="icons">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
            <div className="flexComands">
              <img className="imgSyimyk" src={Syimyk} alt="" />
              <h2>Токтобек уулу Сыймык</h2>
              <p>
                Опытный фронтенд-разработчик, создаю <br />{" "}
                высокопроизводительные веб-приложения,
                <br /> интегрирую последние технологии для выдающегося <br />{" "}
                пользовательского опыта.
              </p>
              <div className="icons">
                <img src={SyimykIcon} alt="" />
              </div>
            </div>
            <div className="flexComands">
              <img className="imgSyimyk" src={Sanjar} alt="" />
              <h2>Кайраткелдиев Санжар</h2>
              <p>
              Создаю уникальные пользовательские интерфейсы, <br /> интегрируя инновации для повышения <br /> эффективности в проектах и обеспечивая <br /> неповторимый опыт пользователям.
              </p>
              <div className="icons">
                <img src={SyimykIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Comands;
