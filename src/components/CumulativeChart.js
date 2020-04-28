import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";

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

  let hospitalTotal = [];
  let hospitalName = [];

  const takeHospitalValues = (hospitals) => {
    for (let num in hospitals) {
      hospitalTotal.push(hospitals[num].treatment_local);
      hospitalName.push(hospitals[num].hospital.name);
    }
  };
  takeHospitalValues(props.hospitals);

  const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw() {
      originalDoughnutDraw.apply(this, arguments);

      const chart = this.chart;
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;

      const fontSize = (height / 100).toFixed(2);
      ctx.font = `${fontSize}em Segoe UI`;
      ctx.textBaseline = "middle";

      let sum = 0;
      for (let i = 0; i < chart.config.data.datasets[0].data.length; i++) {
        sum += chart.config.data.datasets[0].data[i];
      }

      const text = sum;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
  });

  const chartData = {
    labels: hospitalName,
    datasets: [
      {
        data: hospitalTotal,
        backgroundColor: staticColors,
        borderColor: "#282c34",
        borderWidth: 8,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text:
        "Total number of Sri Lankans who are currently on treatment / observation",
      fontSize: 20,
      fontFamily: "sans-serif",
      position: "bottom",
      fontColor: "#fff",
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 60,
    plugins: { datalabels: { display: false } },
  };

  return (
    <div>
      <Doughnut data={chartData} width={250} height={250} options={options} />
    </div>
  );
}

export default CumulativeChart;
