import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import avtor from '../../../images/photo.jpg';
import './aboutMe.css';

function AboutMe() {
  return (
  	  <section className="about-me main__box" id="about-me">
      <h2 className="main__title">Студент</h2>
      <article className="about-me__article">
        <div className="about-me__overlay">
          <h3 className="about-me__title">Алексей</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__text">Я родился и живу в луховицах .....</p>
          <div className="about-me__social-links">
            <a href="https://alex-lin.ru" className="about-me__social-link" target="_blank" rel="noreferrer">Персональный сайт</a>
            <a href="https://github.com/aleklin2020" className="about-me__social-link" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <img src={avtor} alt="Фото автора" className="about-me__photo" />
      </article>
    </section>
   
  );
}

export default AboutMe;