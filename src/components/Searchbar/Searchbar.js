import React from 'react';
import './searchbar.css';

const Searchbar = ({ pokeList, setPokeShowList }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const searchedList = pokeList.filter((item) =>
      item.name.includes(searchTerm)
    );
    setPokeShowList(searchedList);
  }, [searchTerm]);

  // console.log(searchTerm);
  return (
    <div className="flex-container">
      <input
        className="flex-item searchbar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
