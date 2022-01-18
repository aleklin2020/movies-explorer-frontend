import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Promo from "./Promo/Promo"
import AboutProject from "./AboutProject/aboutProject"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import NavTab from "./NavTab/NavTab"
import "./Main.css"

function Main() {
  return (
    <main className="Main">
    <Promo />
    <NavTab />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />

    </main>
  );
}

export default Main;