import React from 'react';
import './pokemonitem.css';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

const pokemon_list = {
  '1': {
    name: 'bulbasaur',
    id: 1,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    height: 7,
    weight: 69,
    types: [
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
    },
  },
  '2': {
    name: 'ivysaur',
    id: 2,
    species: {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
    },
    height: 10,
    types: [
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    weight: 130,
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
      front_shiny_female: null,
    },
  },
  '4': {
    name: 'charmander',
    id: 4,
    species: {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
    },
    height: 6,
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    weight: 85,
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
      front_shiny_female: null,
    },
  },
  '7': {
    name: 'squirtle',
    id: 7,
    species: {
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
    },
    height: 5,
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    weight: 90,
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
      front_shiny_female: null,
    },
  },
};
// const pokeKeys = Object.keys(pokemon_list);
// console.log(pokeKeys);

const Pokemonitem = ({ match }) => {
  // console.log(match);
  const { id } = match.params;

  const { name, types } = pokemon_list[id];
  const { front_default } = pokemon_list[id].sprites;

  // console.log(pokemon_list[id]);
  return (
    <>
      <Searchbar />
      <div className="item-container">
        <img src={front_default} className="items card-img" alt="" />
        <h1 className="items">
          {id} {name}
        </h1>
        <div className="items type-container">
          {types.map((item) => (
            <div className="type-item">{item.type.name}</div>
          ))}
        </div>
        {/* <div className="items">this is pokemonitem {id}</div>
      <div className="items">this is pokemonitem {id}</div> */}
        <Link to="/" className="flex-item btn btn-back">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default Pokemonitem;
