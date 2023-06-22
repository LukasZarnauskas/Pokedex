import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonsList() {
  return (
    <section className=" rounded-lg ml-1 mr-1 pt-4  bg-white flex place-content-around">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </section>
  );
}

export default PokemonsList;
