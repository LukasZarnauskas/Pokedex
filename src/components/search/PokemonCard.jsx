import React from "react";

function PokemonCard() {
  return (
    <div className="  rounded-lg border-2 bg-grLight border-grLight  flex items-center flex-col w-104 mt-2 relative">
      <p className=" mr-2 self-end text-8 z-20">#001</p>
      <img
        className="bg-red-400 w-72 h-72 z-20"
        src="/src/image/Pokeball.png"
        alt="Pokemon"
      />
      <p className="text-10 text-grDark  ">Pokemon name</p>
      <div className=" rounded-  h-2/3 w-full bg-white absolute z-10 "> </div>
    </div>
  );
}

export default PokemonCard;
