import React from "react";
import { Doughnut } from "react-chartjs-2";

function CumulativeChart(props) {
  const staticColors = [
    "#f44336",
    "#ef9a9a",
    "#e91e63",
    "#f48fb1",
    "#9c27b0",
    "#ce93d8",
    "#673ab7",
    "#b39ddb",
    "#3f51b5",
    "#9fa8da",
    "#2196f3",
    "#90caf9",
    "#03a9f4",
    "#81d4fa",
    "#00bcd4",
    "#80deea",
    "#009688",
    "#80cbc4",
    "#4caf50",
    "#a5d6a7",
    "#8bc34a",
    "#c5e1a5",
    "#cddc39",
    "#e6ee9c",
    "#ffeb3b",
    "#fff59d",
    "#ffc107",
    "#ffe082",
    "#ff9800",
    "#ffcc80",
    "#546e7a",
    "#F8BBD0",
    "#D50000",
    "#EF5350",
    "#C51162",
    "#E1BEE7",
    "#6A1B9A",
    "#AB47BC",
    "#B388FF",
    "#BBDEFB",
    "#1565C0",
    "#B3E5FC",
    "#1976D2",
    "#0097A7",
    "#84FFFF",
  ];

  let totalValues = [];
  let totalNames = ['Total Deths', 'Total Recovered', 'Total Active Case'];

  const takeTotalValues = (newDetails) => {
    totalValues.push(newDetails.local_deaths);
    totalValues.push(newDetails.local_recovered);
    totalValues.push(newDetails.local_active_cases);
  };
  takeTotalValues(props.newDetails);

  const chartData = {
    labels: totalNames,
    datasets: [
      {
        data: totalValues,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 159, 64)'
        ],
        borderColor: "#282c34",
        borderWidth: 4,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    cutout: "50%",
    plugins: { 
      datalabels: { 
        display: false 
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
        text:
          "Total number of Sri Lankans who are currently on treatment / observation",
        font: {
          size: 20,
          family: "sans-serif",
        },
        position: "bottom",
        color: "#fff",
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} width={250} height={250} options={options} />
    </div>
  );
}

export default CumulativeChart;
