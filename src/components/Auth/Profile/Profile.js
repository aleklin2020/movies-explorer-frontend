import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import './profile.css';


function Profile() {
  return (
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
                disabled="true"
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
                disabled="true"
              />
            </label>

            <button className="profile__submit profile__coursor profile__button_disaled ">Сохранить</button>
    </form>
    <button className="profile__refactr profile__coursor ">Редактировать</button>
    <button className="profile__exit profile__coursor ">Выйти из аккаунта</button>

    </section>
  );
}

export default Profile;