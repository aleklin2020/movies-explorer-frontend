import React,  { useState } from 'react';
import './profile.css';
import Header from "../../Header/Header"


function Profile({loggedIn}) {
 const [profile, setProfile] = React.useState(false)
 function profileReq () {
  setProfile(true)
 }
 function userForm (evt) {
  evt.preventDefault();
  setProfile(false)
 }

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
               disabled={!profile}
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
                disabled={!profile}
              />
            </label>

            <button className={`profile__submit profile__coursor  ${!profile ? "profile__button_disaled" : ""} `} onClick={userForm}>Сохранить</button>
    </form>
    <button className={`profile__refactr profile__coursor ${profile ? "profile__button_disaled" : ""} `} onClick={profileReq} >Редактировать</button>
    <button className={`profile__exit profile__coursor  ${profile ? "profile__button_disaled" : ""}`} >Выйти из аккаунта</button>

    </section>
    </>
  );
}

export default Profile;