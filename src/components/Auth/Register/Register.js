import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import logoAuth from "../../../images/Login.svg"

function Register() {
  return (
   <section className="start">
   <div className="start__box">
   <Link to="/" ><img className="start__logo" src={logoAuth} alt="Логотип"/></Link>
   <h2 className="start__title">Рады видеть</h2>
   <form className="start__form">

   <label htmlFor="email" className="start__label">Email</label>
   	<input className="start__input" type="email" required name="email" placeholder="Введите email"/>

   <label htmlFor="password" className="start__label">Пароль</label>
   	<input className="start__input" type="password" required name="password" placeholder="Введите пароль"/>

   	<button className="start__input" className="start__button">Войти</button>
   </form>
    <p className="start__text">
        Еще не зарегистрированы?
        <Link to="/signup" className="start__link">Регистрация</Link>
      </p>
      </div>
   </section>
  );
}

export default Register;