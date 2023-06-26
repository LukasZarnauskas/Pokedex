import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Composition from "../components/search/pokemonPage/Composition";
import BaseStats from "../components/search/pokemonPage/BaseStats";

function PokemonPage() {
  const [description, setdescription] = useState("");
  const location = useLocation();
  const { info } = location.state;
  useEffect(() => {
    function getCharacteristic() {
      return fetch(`https://pokeapi.co/api/v2/pokemon-species/${info.id}/`)
        .then((res) => res.json())
        .then((dataInJs) => {
          setdescription(dataInJs.flavor_text_entries[0].flavor_text);
        })
        .catch((err) => console.log(err));
    }
    getCharacteristic();
  }, []);

  let color = "";
  let colorOfText = "";
  switch (info.types[0]?.type.name) {
    case "bug":
      color = "bg-bug";
      colorOfText = "text-bug";
      break;
    case "dark":
      color = "bg-dark";
      colorOfText = "text-dark";
      break;
    case "dragon":
      color = "bg-dragon";
      colorOfText = "text-dragon";
      break;
    case "electric":
      color = "bg-electric";
      colorOfText = "text-electric";
      break;
    case "fairy":
      color = "bg-fairy";
      colorOfText = "text-fairy";
      break;
    case "fighting":
      color = "bg-fighting";
      colorOfText = "text-fighting";
      break;
    case "fire":
      color = "bg-fire";
      colorOfText = "text-fire";
      break;
    case "flying":
      color = "bg-flying";
      colorOfText = "text-flying";
      break;
    case "ghost":
      color = "bg-ghost";
      colorOfText = "text-ghost";
      break;
    case "normal":
      color = "bg-normal";
      colorOfText = "text-normal";
      break;
    case "grass":
      color = "bg-grass";
      colorOfText = "text-grass";
      break;
    case "ground":
      color = "bg-ground";
      colorOfText = "text-ground";
      break;
    case "ice":
      color = "bg-ice";
      colorOfText = "text-ice";
      break;
    case "poison":
      color = "bg-poison";
      colorOfText = "text-poison";
      break;
    case "psychic":
      color = "bg-psychic";
      colorOfText = "text-psychic";
      break;
    case "rock":
      color = "bg-rock";
      colorOfText = "text-rock";
      break;
    case "steel":
      color = "bg-steel";
      colorOfText = "text-steel";
      break;
    case "water":
      color = "bg-water";
      colorOfText = "text-water";
      break;
    default:
      color = "";
      colorOfText = "";
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
    <div className={`pb-1 ${color} h-648 rounded-xl`}>
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
      <div className="bg-white mx-1 mb-1 rounded-lg h-96">
        <div className=" text-white capitalize font-bold text-10 flex justify-center gap-3">
          <p className={`rounded-lg mt-2  px-3 ${color}`}>
            {info.types[0]?.type.name}
          </p>
          {info.types[1] ? (
            <p className={`rounded-lg  mt-2  px-3 ${color2}`}>
              {info.types[1].type.name}
            </p>
          ) : null}
        </div>
        <h2 className={`text-sm mt-4 text-center font-bold ${colorOfText} `}>
          About
        </h2>
        <Composition info={info} />
        <p className=" my-4 mx-5 text-10 text-center text-grDark">
          {description}
        </p>
        <h2 className={`text-sm mt-4 text-center font-bold ${colorOfText} `}>
          Base Stats
        </h2>
        <BaseStats info={info} color={color} colorOfText={colorOfText} />
      </div>
    </div>
  );
}

export default PokemonPage;
