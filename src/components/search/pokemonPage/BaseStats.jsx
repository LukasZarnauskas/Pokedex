import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BaseStats({ info }) {
  const [skillSet, setskillSet] = useState({
    labels: ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"],
    datasets: [
      {
        label: [],
        data: [
          info.stats[0].base_stat,
          info.stats[1].base_stat,
          info.stats[2].base_stat,
          info.stats[3].base_stat,
          info.stats[4].base_stat,
          info.stats[5].base_stat,
        ],
      },
    ],

    options: {
      plugins: {
        legend: {
          display: false,
          labels: {},
        },
      },
    },
  });

  return (
    <div className="mx-5">
      <Bar data={skillSet} options={skillSet.options} />
    </div>
  );
}

export default BaseStats;
