import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Pokemonitem from './components/PokemonItem/Pokemonitem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={Pokemonitem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
