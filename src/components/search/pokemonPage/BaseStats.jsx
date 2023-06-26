import React from "react";

function BaseStats({ info, color, colorOfText }) {
  console.log(info);
  return (
    <div>
      <ul className="mx-5 text-10">
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>HP</span>
          <span>{info.stats[0].base_stat}</span>
        </li>
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>ATK</span>
          <span>{info.stats[1].base_stat}</span>
        </li>
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>DEF</span>
          <span>{info.stats[2].base_stat}</span>
        </li>
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>SATK</span>
          <span>{info.stats[3].base_stat}</span>
        </li>
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>SDEF</span>
          <span>{info.stats[4].base_stat}</span>
        </li>
        <li className="text-right">
          <span className={` ${colorOfText} font-bold pr-2`}>SPD</span>
          <span>{info.stats[5].base_stat}</span>
        </li>
      </ul>
    </div>
  );
}

export default BaseStats;
