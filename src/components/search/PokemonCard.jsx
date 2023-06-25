import React, { useEffect, useState } from "react";

function PokemonCard({ name, sortBy }) {
  // console.log(name);
  const [pokeInfo, setPokeInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const dataInJs = await response.json();
        setPokeInfo(dataInJs);
      } catch (err) {
        console.warn(`Error: ${err.message}`);
        console.log(`Retrying to fetch ${name} data...`);
        fetchData();
      }
    };
    fetchData();
  }, []);

  return (
    <div className="  rounded-lg border-2 bg-white border-grLight  flex items-center flex-col h-fit w-104 mt-2 relative">
      <p className=" mr-2 self-end text-8 ">#{pokeInfo.id}</p>
      <img
        className=" w-72 h-72 z-20"
        src={pokeInfo.sprites && pokeInfo.sprites.front_default}
        alt="Pokemon"
      />
      <p className="text-10 text-grDark z-20 capitalize">{name}</p>
      <div className=" rounded-lg top-60  h-2/5 w-full bg-grBackground absolute z-10 "></div>
    </div>
  );
}

export default PokemonCard;
