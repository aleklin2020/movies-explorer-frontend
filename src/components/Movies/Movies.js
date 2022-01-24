import React from 'react';
import './movies.css';
import Header from "../Header/Header"
import SearchForm from "./SearchForm/searchForm"
import MoviesCardList from "./MoviesCardlist/MoviesCardList"
import Footer from "../Footer/Footer"

function Movies({loggedIn}) {
  return (
  		<>
  		<Header loggedIn={loggedIn} />
  		<SearchForm />
  		<MoviesCardList />
  		<Footer />
  		</>
  );
}

export default Movies;