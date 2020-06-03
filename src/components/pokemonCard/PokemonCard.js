import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokeShowList }) {
  return (
    <div>
      <div className="grid-container">
        {pokeShowList.map((item) => {
          // const { id, name } = item;
          // const { front_default } = item.sprites;

          return (
            <Link
              to={`/pokemon/${item.id}`}
              className="grid-items"
              key={item.id}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
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
