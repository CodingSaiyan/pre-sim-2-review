import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
//Make sure to check your pathing when trying to bring in components. It is relative to the current path of the file your are importing into
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      // We need to return a top level div, but since I want the header to show up on every route I wrap our Switch in a div so I can put a header component above whatever component gets rendered out by the Switch
      <div>
        <Header></Header>
        {/* Switch will only pick on route to match. It reads from top to bottom and the first one it matches on it picks. */}
        <Switch>
          {/* Make sure to use exact on any route that could match many paths. path="/" could also match path="/details/:id" so exact makes sure it only matches one */}
          <Route exact path="/" component={Movies}/>
          {/* path="/details/:id" works like node in that it tells react route we expect an id param */}
          <Route path="/details/:id" component={MovieDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
