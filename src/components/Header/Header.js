import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './header.css';
import Navigation from "../Navigation/Navigation"
import { useMediaQuery } from "react-responsive";



function Header({ loggedIn }) {


    const [isNavPopupIsOpen, setIsNavPopupOpen] = useState(false);

    const mobile = useMediaQuery({ query: "(max-width: 768px)" });

    function handleBurgerButtonClick() {
        setIsNavPopupOpen(true);
    }

    function closeNavPopup() {
        setIsNavPopupOpen(false);
    }


  return (
     <header className={loggedIn ? "header__color" : "header"}>
     <Link className="header__logo" to="/">
     <img className="header__logo_images" src={logo} alt="Логотип"/>
     </Link>
      {loggedIn ? (
                <>
                    {!mobile && ( 
                        <ul className="header__links">
                            <li className="header__link-item">
                                <NavLink
                                    to="/movies"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="header__link-item ">
                                <NavLink
                                    to="/saved-movies"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                            <li className="header__link-item header__link-item">
                                <NavLink
                                    to="/profile"
                                    className="header__link header__profile-link"
                                    activeClassName="header__link_active"
                                >
                                    Аккаунт
                                    <button className="header__profile-button" />
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {mobile && ( 
                        <>
                            <button
                                className="header__burger-button"
                                aria-label="Open navigation menu"
                                type="button"
                                onClick={handleBurgerButtonClick}
                            ></button>
                            <Navigation
                                isOpen={isNavPopupIsOpen}
                                onClose={closeNavPopup}
                            />
                        </>
                    )}
                </>
            ) : (
                
                <ul className="header__links">
                    <li className="header__link-item">
                        <Link to="signup" className="header__link header__link_start">
                            Регистрация
                        </Link>
                    </li>
                    <li className="header__link-item">
                        <Link to="signin" className="header__link">
                            <button className="header__button">Войти</button>
                        </Link>
                    </li>
                </ul>
            )}
     </header>
  );
}

export default Header;