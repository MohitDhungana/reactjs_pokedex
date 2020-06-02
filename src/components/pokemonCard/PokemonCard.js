import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokeList }) {
  return (
    <div>
      <div className="grid-container">
        {pokeList.map((item, index) => {
          // const { id, name } = item;
          // const { front_default } = item.sprites;

          return (
            <Link
              to={`/pokemon/${index + 1}`}
              className="grid-items"
              key={index + 1}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt=""
                className="pokedex-img"
              />
              <h2 className="pokemon-card-name">{item.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
