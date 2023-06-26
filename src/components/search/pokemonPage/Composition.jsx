import React from "react";

function Composition({ info }) {
  return (
    <div className="flex justify-between items-center mx-auto mt-4 text-10  w-64">
      <div className=" text-center">
        <p className="flex text-grDark">
          <img className="mr-1" src="/image/weight.png" alt="weight" />
          {info.weight / 10} kg
        </p>
        <p className="text-grMedium text-8 mt-2.5">Weight</p>
      </div>
      <div className="border-x-2 px-4  text-center ">
        <p className="flex text-grDark">
          <img className="mr-1" src="/image/straighten.png" alt="height" />
          {info.height / 10} m
        </p>
        <p className="text-grMedium text-8 mt-2.5">Height</p>
      </div>
      <div className="text-center">
        <p className="text-grDark">{info.moves[0]?.move.name}</p>
        <p className="text-grDark">{info.moves[1]?.move.name}</p>
        <p className="text-grMedium text-8">Moves</p>
      </div>
    </div>
  );
}

export default Composition;
