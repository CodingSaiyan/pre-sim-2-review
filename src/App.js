import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route path="/details/:id" component={MovieDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
