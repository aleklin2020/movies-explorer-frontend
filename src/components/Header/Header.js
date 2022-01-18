import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './header.css';

function Header() {
  return (
     <header className="header">
     <Link className="header__logo" to="/">
     <img className="header__logo_images" src={logo} alt="Логотип"/>
     </Link>
     <div className="header__container">
     <Link className="header__registration" to="Signup">Регистрация</Link>
     <Link className="header__login" to="/signin">Войти</Link>
     </div>
     </header>
  );
}

export default Header;