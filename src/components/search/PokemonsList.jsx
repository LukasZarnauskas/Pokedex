import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonsList({ pokemonArr }) {
  // console.log(pokemonArr);
  return (
    <section className=" top rounded-lg ml-1 mr-1 pt-4  bg-white flex place-content-around">
      {pokemonArr.map((pokemon) => (
        <PokemonCard key={pokemon} name={pokemon} />
      ))}
    </section>
  );
}

export default PokemonsList;
