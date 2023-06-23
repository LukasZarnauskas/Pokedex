import React from "react";

function PokemonCard({ name }) {
  console.log(name);

  return (
    <div className="  rounded-lg border-2 bg-white border-grLight  flex items-center flex-col w-104 mt-2 relative">
      <p className=" mr-2 self-end text-8 ">#001</p>
      <img
        className="bg-red-400 w-72 h-72 z-20"
        src="/src/image/Pokeball.png"
        alt="Pokemon"
      />
      <p className="text-10 text-grDark z-20 ">{name}</p>
      <div className=" rounded-lg top-66  h-1/3 w-full bg-grBackground absolute z-10 "></div>
    </div>
  );
}

export default PokemonCard;
