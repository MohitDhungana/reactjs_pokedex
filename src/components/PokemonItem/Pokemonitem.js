import React from 'react';
import './pokemonitem.css';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

import axios from 'axios';

// const pokeKeys = Object.keys(pokemon_list);
// console.log(pokeKeys);

const Pokemonitem = ({ match }) => {
  // console.log(match);
  const { id } = match.params;

  // const { name, types } = pokemon_list[id];
  // const { front_default } = pokemon_list[id].sprites;

  const [loading, setLoading] = React.useState(true);
  const [pokeInfo, setPokeInfo] = React.useState([]);

  React.useEffect(() => {
    const getPokeInfo = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const info = await response.data;

        const { name, types } = info;

        const typeName = types.map((item) => item.type.name);

        const details = { name, typeName };

        setPokeInfo(details);
        console.log(details);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPokeInfo();
  }, []);

  // console.log(pokemon_list[id]);
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="item-container">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            className="items card-img"
            alt=""
          />
          <h1 className="items">{pokeInfo.name}</h1>
          <div className="items type-container">
            {pokeInfo.typeName.map((item) => (
              <div className="type-item">{item}</div>
            ))}
          </div>
          {/* <div className="items">this is pokemonitem {id}</div>
    <div className="items">this is pokemonitem {id}</div> */}
          <Link to="/" className="flex-item btn btn-back">
            Go Back
          </Link>
        </div>
      )}
    </>
  );
};

export default Pokemonitem;
