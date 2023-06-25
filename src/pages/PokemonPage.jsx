import React from "react";
import { Link, useLocation } from "react-router-dom";

function PokemonPage() {
  const location = useLocation();
  const { info } = location.state;
  console.log(info.types[0].type.name);
  let color = "";

  switch (info.types[0]?.type.name) {
    case "bug":
      color = "bg-bug";
      break;
    case "dark":
      color = "bg-dark";
      break;
    case "dragon":
      color = "bg-dragon";
      break;
    case "electric":
      color = "bg-electric";
      break;
    case "fairy":
      color = "bg-fairy";
      break;
    case "fighting":
      color = "bg-fighting";
      break;
    case "fire":
      color = "bg-fire";
      break;
    case "flying":
      color = "bg-flying";
      break;
    case "ghost":
      color = "bg-ghost";
      break;
    case "normal":
      color = "bg-normal";
      break;
    case "grass":
      color = "bg-grass";
      break;
    case "ground":
      color = "bg-ground";
      break;
    case "ice":
      color = "bg-ice";
      break;
    case "poison":
      color = "bg-poison";
      break;
    case "psychic":
      color = "bg-psychic";
      break;
    case "rock":
      color = "bg-rock";
      break;
    case "steel":
      color = "bg-steel";
      break;
    case "water":
      color = "bg-water";
      break;
    default:
      color = "";
      break;
  }
  let color2 = "";

  switch (info.types[1]?.type.name) {
    case "bug":
      color2 = "bg-bug";
      break;
    case "dark":
      color2 = "bg-dark";
      break;
    case "dragon":
      color2 = "bg-dragon";
      break;
    case "electric":
      color2 = "bg-electric";
      break;
    case "fairy":
      color2 = "bg-fairy";
      break;
    case "fighting":
      color2 = "bg-fighting";
      break;
    case "fire":
      color2 = "bg-fire";
      break;
    case "flying":
      color2 = "bg-flying";
      break;
    case "ghost":
      color2 = "bg-ghost";
      break;
    case "normal":
      color2 = "bg-normal";
      break;
    case "grass":
      color2 = "bg-grass";
      break;
    case "ground":
      color2 = "bg-ground";
      break;
    case "ice":
      color2 = "bg-ice";
      break;
    case "poison":
      color2 = "bg-poison";
      break;
    case "psychic":
      color2 = "bg-psychic";
      break;
    case "rock":
      color2 = "bg-rock";
      break;
    case "steel":
      color2 = "bg-steel";
      break;
    case "water":
      color2 = "bg-water";
      break;
    default:
      color2 = "";
      break;
  }
  return (
    <div className={`${color}`}>
      <div className="  flex justify-between items-center text-white mx-6 pt-5">
        <div className="flex items-center">
          <Link to={"/"}>
            <img src="/src/image/arrow_back.png" alt="arrow" />
          </Link>
          <h1 className="capitalize text-2xl">{info.forms[0].name}</h1>
        </div>

        <p className=" justify-self-end text-xs">#{info.id}</p>
      </div>
      <img
        className="w-52 h-52 mx-auto"
        src={
          info.sprites && info.sprites.other["official-artwork"].front_default
        }
        alt="pokemon"
      />
      <div className="flex justify-center gap-3">
        <p className={`px-1 ${color}`}>{info.types[0]?.type.name}</p>
        {info.types[1] ? (
          <p className={`${color2}`}>{info.types[1].type.name}</p>
        ) : null}
      </div>
    </div>
  );
}

export default PokemonPage;
