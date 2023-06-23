import React, { useEffect, useState } from "react";
import SearchInput from "../components/search/SearchInput";
import PokemonsList from "../components/search/PokemonsList";

function SearchPage() {
  const [pokemonArr, setPokemonArr] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`)
      .then((resp) => resp.json())
      .then((dataInJs) => {
        const pokemonNames = dataInJs.results.map((pokemon) => pokemon.name);
        setPokemonArr(pokemonNames);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div>
      <div className="ml-4 mb-6">
        <h1 className=" pt-5 pb-3 flex items-center text-2xl font-bold  text-white">
          <img
            className="mr-4 h-6 "
            src="/src/image/Pokeball.png"
            alt="pokeball "
          />{" "}
          Pokédex
        </h1>
        <SearchInput />
      </div>
      <PokemonsList pokemonArr={pokemonArr} />
    </div>
  );
}

export default SearchPage;
