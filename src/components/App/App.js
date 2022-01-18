
import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import logo from '../../images/logo.svg';
import Main from "../Main/main";
import Footer from "../Footer/Footer"
import Login from "../Auth/Login/Login"
import Register from "../Auth/Register/Register"
import Profile from "../Auth/Profile/Profile"

function App() {
  return (
   <div className="App">
   <Switch>
   	<Route exact path="/">
      <Header />
      <Main />
    <Footer />
    </Route>

    <Route path="/signup">
    <Login />
    </Route>

<Route path="/signin">
    <Profile />
    </Route>

    </Switch>
    </div>
    
  );
}

export default App;
