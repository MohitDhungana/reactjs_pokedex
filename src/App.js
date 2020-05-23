import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Searchbar from './components/Searchbar/Searchbar';
import Pokemonitem from './components/PokemonItem/Pokemonitem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Searchbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={Pokemonitem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
