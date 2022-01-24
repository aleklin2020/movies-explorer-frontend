
import React, { useEffect, useState } from 'react';
import  CurrentUserContext  from "../../contexts/CurrentUserContext";
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import logo from '../../images/logo.svg';
import Main from "../Main/main";
import Footer from "../Footer/Footer"
import Login from "../Auth/Login/Login"
import Register from "../Auth/Register/Register"
import Profile from "../Auth/Profile/Profile"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import NoBud from "../NoBud/NoBud"


function App() {

	  const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
    });

 const [loggedIn, setLoggedIn] = useState(false);

  return (
  	 <CurrentUserContext.Provider value={currentUser}>
   <div className="App">
   <Switch>
   	<Route exact path="/">
      <Main loggedIn={loggedIn} />
    <Footer />
    </Route>

    <Route path="/signup">
    <Login />
    </Route>

    <Route path="/movies">
    <Movies loggedIn={setLoggedIn} />
    </Route>

    <Route path="/profile">
    <Profile loggedIn={setLoggedIn} />
    </Route>

<Route exact path="/signin">
    <Register />
    </Route>

    <Route path="/saved-movies">
    <SavedMovies loggedIn={setLoggedIn} />
    </Route>
    
    <Route path="*">
    <NoBud />
    </Route>

    </Switch>
    </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
