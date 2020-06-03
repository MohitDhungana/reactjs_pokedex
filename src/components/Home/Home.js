import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
// import Pokemonitem from '../PokemonItem/Pokemonitem';
import PokemonCard from '../pokemonCard/PokemonCard';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [pokeList, setPokeList] = React.useState([]);
  const [pokeShowList, setPokeShowList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    const getPokeList = async () => {
      try {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/?limit=807'
        );

        const { results } = await res.data;
        const temp = results.map((item, index) => ({ id: index + 1, ...item }));
        console.log(temp);
        setPokeList(temp);
        setPokeShowList(temp);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPokeList();
  }, []);

  return (
    <>
      <Searchbar
        loading={loading}
        setLoading={setLoading}
        pokeList={pokeList}
        setPokeList={setPokeList}
        pokeShowList={pokeShowList}
        setPokeShowList={setPokeShowList}
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <PokemonCard pokeShowList={pokeShowList} />
      )}
    </>
  );
};

export default Home;
