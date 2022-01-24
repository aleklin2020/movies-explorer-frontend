import React from 'react';
import {Link } from 'react-router-dom';
import './Login.css';
import logoAuth from "../../../images/Login.svg"

function Login() {
  return (
   <section className="start">
   <div className="start__box">
  <Link to="/" ><img className="start__logo" src={logoAuth} alt="Логотип"/></Link>
   <h2 className="start__title">Добро пожаловать</h2>
   <form className="start__form">
   <label htmlFor="name" className="start__label">Имя</label>
   	<input className="start__input" type="text" required name="name" placeholder="Введите имя"/>

   <label htmlFor="email" className="start__label">Email</label>
   	<input className="start__input" type="email" required name="email" placeholder="Введите email"/>

   <label htmlFor="password" className="start__label">Пароль</label>
   	<input className="start__input" type="password" required name="password" placeholder="Введите пароль"/>

   	<button className="start__button">Зарегистрироваться</button>
   </form>
    <p className="start__text">
        Уже зарегистрированы?
        <Link to="/signin" className="start__link">Войти</Link>
      </p>
      </div>
   </section>
  );
}

export default Login;