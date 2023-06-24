import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonsList({ pokemonArr }) {
  // console.log(pokemonArr);
  function sortPokemonBy(sortBy) {
    if (sortBy === "A-Z") {
      const sortedPokemon = pokemonArr.sort();
      return sortedPokemon;
    } else if (sortBy === "Z-A") {
      const sortedPokemon = pokemonArr.sort().reverse();
      return sortedPokemon;
    }
  }
  return (
    <section className=" justify-items-center rounded-lg ml-1 mr-1 pt-4 h-524  bg-white grid grid-cols-3   overflow-y-scroll">
      {pokemonArr.map((pokemon) => (
        <PokemonCard key={pokemon} name={pokemon} />
      ))}
    </section>
  );
}

export default PokemonsList;
