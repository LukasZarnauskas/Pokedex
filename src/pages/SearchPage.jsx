import React, { useEffect, useState } from "react";
import SearchInput from "../components/search/SearchInput";
import PokemonsList from "../components/search/PokemonsList";

function SearchPage() {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [orgPokemonArr, setOrgPokemonArr] = useState([]);
  const [toogle, setToggle] = useState(true);
  useEffect(() => {
    function getData() {
      return fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
        .then((res) => res.json())
        .then((dataInJs) => {
          const pokemonNames = dataInJs.results.map((pokemon) => pokemon.name);
          setPokemonArr(pokemonNames);
          setOrgPokemonArr(pokemonNames);
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  function findPokemon(searchValue) {
    if (searchValue === "") {
      setPokemonArr(orgPokemonArr);
    } else if (searchValue.length > 0) {
      const filteredPokemon = pokemonArr.filter((pokemon) => {
        return pokemon.includes(searchValue);
      });
      return setPokemonArr(filteredPokemon);
    }
  }

  function sortPokemon() {
    setToggle(!toogle);
    const toogles = !toogle;
    if (toogles === true) {
      setPokemonArr([...orgPokemonArr]);
    } else if (toogles === false) {
      const sortedPokemon = [...pokemonArr].sort();
      setPokemonArr(sortedPokemon);
    }
  }
  return (
    <div className="relative pb-1 bg-primaryColor h-648">
      <div className="ml-4 mb-6">
        <h1 className=" pt-5 pb-3 flex items-center text-2xl font-bold  text-white">
          <img
            className="mr-4 h-6 "
            src="/src/image/Pokeball.png"
            alt="pokeball "
          />
          Pokédex
        </h1>
        <div className="flex items-center ">
          <SearchInput findPokemon={findPokemon} />
          <button
            onClick={sortPokemon}
            className="bg-white rounded-full  ml-3 mr-1 w-8 h-8 text-primaryColor "
          >
            {toogle ? "#" : "A"}
          </button>
        </div>
      </div>
      <PokemonsList pokemonArr={pokemonArr} />
    </div>
  );
}

export default SearchPage;
