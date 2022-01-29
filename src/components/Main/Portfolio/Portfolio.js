import React from 'react';
import set from '../../../images/strelka.svg';
import './portfolio.css';

function Portfolio() {
  return (
  	 <section className="portfolio main__box">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-elem">
          <a href="https://github.com/aleklin2020/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-elem">
          <a href="https://aleklin2020.github.io/rossia-goroda/html" className="portfolio__link" target="_blank" rel="noreferrer">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-elem">
          <a href="https://github.com/aleklin2020/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section >


  );
}

export default Portfolio;