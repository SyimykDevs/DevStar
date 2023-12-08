import React from "react";
import "../assets/style/Contact.scss";
import Telegram from "../assets/media/telegram.png";
import Instagram from "../assets/media/Instagram.png";
import Whatsapp from "../assets/media/whatsApp.png";
import Phone from "../assets/media/phone.png";
import contentImage from '../assets/media/image12.png'
const Contact = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="contact-content">
            <div className="leftContent">
              <h1>Свяжитесь с нами!</h1>
              <p>
                Готовы помочь воплотить ваши идеи в жизнь! <br /> Обеспечим ваш
                бизнес успешным онлайн <br />
                -присутствием. Заполните форму или свяжитесь <br /> с нами –
                обсудим решения для вашей компании.
              </p>
              <div className="icons">
                <div className="iconFlex">
                  <img src={Telegram} alt="" />
                  <p>@dev-star</p>
                </div>
                <div className="iconFlex">
                  <img src={Instagram} alt="" />
                  <p>Dev-Star</p>
                </div>
                <div className="iconFlex">
                  <img src={Whatsapp} alt="" />
                  <p>+996500443423</p>
                </div>
                <div className="iconFlex">
                  <img src={Phone} alt="" />
                  <p>+996500443423</p>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер телефона" />
              <input type="text" placeholder="E-mail" />
              <button>Отправить</button>
            </div>
          </div>
          
          <div className="contentimage">
          <hr />
            <img src={contentImage} alt="" />
          <hr />
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Contact;
