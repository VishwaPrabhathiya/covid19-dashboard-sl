import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const Styles = styled.div`
  .lineChart {
    position: relative;
    margin: auto;
    min-height: 376px;
    border: 2px solid #176672;
    border-radius: 20px;
    padding: 5px;
  }
`;

class DailyLineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dDate: props.dDate,
      dTotal: props.dTotal,
      dRecover: props.dRecover,
      dDeath: props.dDeath,
    };
  }

  render() {
    const { dDate, dTotal, dRecover, dDeath } = this.state;

    const data = {
      labels: dDate,
      datasets: [
        {
          label: "Cases",
          fill: false,
          borderColor: "aqua",
          pointBorderColor: "#fff",
          pointBackgroundColor: "aqua",
          pointRadius: 2,
          pointBorderWidth: 1,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "aqua",
          pointHoverBorderColor: "#fff",
          pointHitRadius: 3,
          data: dTotal,
        },
        {
          label: "Recoveries",
          fill: false,
          borderColor: "lawngreen",
          pointBorderColor: "#fff",
          pointBackgroundColor: "lawngreen",
          pointRadius: 2,
          pointBorderWidth: 1,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "lawngreen",
          pointHoverBorderColor: "#fff",
          pointHitRadius: 3,
          data: dRecover,
        },
        {
          label: "Deaths",
          fill: false,
          borderColor: "red",
          pointBorderColor: "#fff",
          pointBackgroundColor: "red",
          pointRadius: 2,
          pointBorderWidth: 1,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "#fff",
          pointHitRadius: 3,
          data: dDeath,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        x: {
          ticks: {
            color: "#a9a9a9",
          },
          offset: true,
          grid: {
            display: false,
            color: "#fff",
          },
        },
        y: {
          grid: {
            display: true,
            color: "#fff",
            borderDash: [10],
            lineWidth: 0.2,
          },
          ticks: {
            color: "#a9a9a9",
          },
        },
      },
      plugins: { 
        datalabels: { 
          display: false 
        },
        title: {
          display: true,
          text: "Daily Statistics",
          font: {
            size: 26,
            family: "Arial",
          },
          color: "#fff",
        },
        legend: {
          display: true,
          labels: {
            color: "white",
            usePointStyle: true,
            font: {
              size: 13,
            },
          },
        },
        tooltip: {
          position: "nearest",
          titleAlign: "center",
          displayColors: true,
          titleFont: {
            size: 15,
          },
          bodyFont: {
            size: 13,
          },
          titleMarginBottom: 15,
          bodySpacing: 10,
        },
      },
    };

    return (
      <Styles>
        <div className="lineChart">
          <Line data={data} options={options} />
        </div>
      </Styles>
    );
  }
}

export default DailyLineChart;
