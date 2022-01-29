import React from 'react';
import './moviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList() {
  return (
   <section className="Movies-list">
<MoviesCard />
   </section>
  );
}

export default MoviesCardList;