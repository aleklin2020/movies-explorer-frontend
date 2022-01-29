import React from 'react';
import './navTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
    <ul className="nav-tab__lists">
    <li className="nav-tab__list"><a href="#about-project" className="nav-tab__link">О проекте</a></li>
    <li className="nav-tab__list"><a href="#techs" className="nav-tab__link">Технологии</a></li>
    <li className="nav-tab__list"><a href="#about-me" className="nav-tab__link">Студент</a></li>
    </ul>
    </section>
  );
}

export default NavTab;