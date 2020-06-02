import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
// import Pokemonitem from '../PokemonItem/Pokemonitem';
import PokemonCard from '../pokemonCard/PokemonCard';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [pokeList, setPokeList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    const getPokeList = async () => {
      try {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/?limit=151'
        );
        // const getSprite = await axios.get(
        //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        // );
        console.log(res.data.results);
        const { results } = await res.data;
        setPokeList(results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPokeList();
  }, []);

  return (
    <>
      <Searchbar pokeList={pokeList} setPokeList={setPokeList} />
      {loading ? <h2>Loading...</h2> : <PokemonCard pokeList={pokeList} />}
    </>
  );
};

export default Home;

// const [pokeList, setPokeList] = React.useState([
//   {
//     name: 'bulbasaur',
//     id: 1,
//     species: {
//       name: 'bulbasaur',
//       url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
//     },
//     height: 7,
//     weight: 69,
//     types: [
//       {
//         slot: 2,
//         type: {
//           name: 'poison',
//           url: 'https://pokeapi.co/api/v2/type/4/',
//         },
//       },
//       {
//         slot: 1,
//         type: {
//           name: 'grass',
//           url: 'https://pokeapi.co/api/v2/type/12/',
//         },
//       },
//     ],
//     sprites: {
//       back_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
//       back_female: null,
//       back_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
//       back_shiny_female: null,
//       front_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//       front_female: null,
//       front_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
//       front_shiny_female: null,
//     },
//   },
//   {
//     name: 'ivysaur',
//     id: 2,
//     species: {
//       name: 'ivysaur',
//       url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
//     },
//     height: 10,
//     types: [
//       {
//         slot: 2,
//         type: {
//           name: 'poison',
//           url: 'https://pokeapi.co/api/v2/type/4/',
//         },
//       },
//       {
//         slot: 1,
//         type: {
//           name: 'grass',
//           url: 'https://pokeapi.co/api/v2/type/12/',
//         },
//       },
//     ],
//     weight: 130,
//     sprites: {
//       back_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
//       back_female: null,
//       back_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
//       back_shiny_female: null,
//       front_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
//       front_female: null,
//       front_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
//       front_shiny_female: null,
//     },
//   },
//   {
//     name: 'charmander',
//     id: 4,
//     species: {
//       name: 'charmander',
//       url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
//     },
//     height: 6,
//     types: [
//       {
//         slot: 1,
//         type: {
//           name: 'fire',
//           url: 'https://pokeapi.co/api/v2/type/10/',
//         },
//       },
//     ],
//     weight: 85,
//     sprites: {
//       back_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
//       back_female: null,
//       back_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
//       back_shiny_female: null,
//       front_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
//       front_female: null,
//       front_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
//       front_shiny_female: null,
//     },
//   },
//   {
//     name: 'squirtle',
//     id: 7,
//     species: {
//       name: 'squirtle',
//       url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
//     },
//     height: 5,
//     types: [
//       {
//         slot: 1,
//         type: {
//           name: 'water',
//           url: 'https://pokeapi.co/api/v2/type/11/',
//         },
//       },
//     ],
//     weight: 90,
//     sprites: {
//       back_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
//       back_female: null,
//       back_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
//       back_shiny_female: null,
//       front_default:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
//       front_female: null,
//       front_shiny:
//         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
//       front_shiny_female: null,
//     },
//   },
// ]);
