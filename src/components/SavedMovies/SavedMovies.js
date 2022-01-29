import React from 'react';
import './savedMovies.css';
import Header from "../Header/Header"
import SearchForm from "../Movies/SearchForm/searchForm"
import MoviesCardList from "../Movies/MoviesCardlist/MoviesCardList"
import Footer from "../Footer/Footer"

function SavedMovies({loggedIn}) {
  return (
  		<>
  		<Header loggedIn={loggedIn} />
  		<SearchForm />
  		<MoviesCardList />
  		<Footer />
  		</>
  );
}

export default SavedMovies;