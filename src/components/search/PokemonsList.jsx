import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonsList({ pokemonArr }) {
  return (
    <section className=" justify-items-center rounded-lg ml-1 mr-1 pt-4 h-524  bg-white grid grid-cols-3   overflow-y-scroll">
      {pokemonArr.map((pokemon) => (
        <PokemonCard key={pokemon} name={pokemon} />
      ))}
    </section>
  );
}

export default PokemonsList;
