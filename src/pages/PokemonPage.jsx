import React from "react";
import { Link } from "react-router-dom";

function PokemonPage() {
  console.log();
  return (
    <div className="h-44 ">
      <div className="flex justify-between text-white">
        <div className="flex items-center">
          <Link>
            <img src="/src/image/arrow_back.png" alt="arrow" />
          </Link>
          <h1>Bulbasaur</h1>
        </div>
        <p className="justify-self-end">#1</p>
      </div>
    </div>
  );
}

export default PokemonPage;
