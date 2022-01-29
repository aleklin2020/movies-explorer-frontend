import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import './profile.css';
import Header from "../../Header/Header"


function Profile({loggedIn}) {

 



  return (
    <>
    <Header loggedIn={loggedIn} />
    <section className="profile">
    <h2 className="profile__title">Привет, Имя</h2>
    <form className="profile__form">

 <label className="profile__label profile__coursor">
              Имя
              <input
                type="text"
                className="profile__input"
                name="name"
                placeholder="Ваше имя"
                value="Алексей"
                disabled
              />
            </label>

            <label className="profile__label profile__coursor">
              Почта
              <input
                type="email"
                className="profile__input"
                name="name"
                placeholder="Ваш email"
                value="alekseu@ma.ru"
                disabled
              />
            </label>

            <button className="profile__submit profile__coursor  profile__button_disaled " >Сохранить</button>
    </form>
    <button className="profile__refactr profile__coursor  " >Редактировать</button>
    <button className="profile__exit profile__coursor  ">Выйти из аккаунта</button>

    </section>
    </>
  );
}

export default Profile;