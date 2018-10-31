import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import AddMovie from './components/AddMovie'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Movies}/>
        <Route path="/add" component={AddMovie}/>
      </Switch>
    );
  }
}

export default App;
