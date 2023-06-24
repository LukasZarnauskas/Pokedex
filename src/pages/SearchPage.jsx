import React, { useEffect, useState } from "react";
import SearchInput from "../components/search/SearchInput";
import PokemonsList from "../components/search/PokemonsList";

function SearchPage() {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [orgPokemonArr, setOrgPokemonArr] = useState([]);
  const [sortToggle, setSortToggle] = useState(false);
  useEffect(() => {
    function getData() {
      return fetch(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`)
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
      const filteredPokemon = orgPokemonArr.filter((pokemon) => {
        return pokemon.includes(searchValue);
      });
      return setPokemonArr(filteredPokemon);
    }
  }
  function handleClick() {
    setSortToggle(!sortToggle);
  }
  console.log(sortToggle);
  return (
    <div className="relative">
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
          <form className="bg-white rounded-full  ml-3 mr-1 ">
            {sortToggle ? (
              <fieldset className="absolute top-12 right-px text-10 mb bg-primaryColor text-white mr-1  ">
                <p className="text-xs mb-1">Sort by:</p>
                <div className="flex mb-1">
                  <input
                    onClick={handleClick}
                    type="radio"
                    name="sortBy"
                    id="id"
                    value="id"
                  />
                  <label htmlFor="id">Number</label>
                </div>
                <div className="flex">
                  <input
                    onClick={handleClick}
                    type="radio"
                    name="sortBy"
                    id="name"
                    value="name"
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </fieldset>
            ) : (
              <p
                onClick={handleClick}
                className="text-primaryColor text-center px-9 py-1 rounded-full cursor-pointer"
              >
                #
              </p>
            )}
          </form>
        </div>
      </div>
      <PokemonsList pokemonArr={pokemonArr} />
    </div>
  );
}

export default SearchPage;
