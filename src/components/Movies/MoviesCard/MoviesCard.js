import React from 'react';
import './moviesCard.css';
import image from "../../../images/cards.svg"

function MoviesCard() {
  return (
      <article className="movies-card">
           <a className="movies-card__image" href="vk"><img className="movies-card__image" src={image} alt="картинка"/></a>
           <div className="movies-card__box">
   			<h2 className="movies-card__title">Текст</h2>
   			<button className="movies-card__like"></button>
           </div>
          <time className="movies-card__time">1ч : 45минут</time>
        </article>
  );
}

export default MoviesCard;