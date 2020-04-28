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

const takeActive = (dTotal, dRecover, dDeath) => {
  let dActive = [];
  for (let num in dTotal) {
    dActive.push(dTotal[num] - dRecover[num] - dDeath[num]);
  }
  return dActive;
};

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
    const dActive = takeActive(dTotal, dRecover, dDeath);

    const minX = dDate[dDate.length - 27];
    const data = {
      labels: dDate,
      datasets: [
        {
          label: "Total Cases",
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
          data: dTotal,
        },
        {
          label: "Active Cases",
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
          data: dActive,
        },
        {
          label: "Total Recovered",
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
      ],
    };

    const options = {
      title: {
        display: true,
        text: "Daily Statistics",
        fontSize: 26,
        fontFamily: "Arial",
        fontColor: "#fff",
      },
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          fontColor: "white",
          usePointStyle: true,
          fontSize: 13,
        },
      },
      tooltips: {
        mode: "index",
        position: "nearest",
        titleAlign: "center",
        displayColors: false,
        titleFontSize: 15,
        bodyFontSize: 13,
        titleMarginBottom: 15,
        bodySpacing: 10,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#a9a9a9",
              min: minX,
            },
            type: "time",
            time: {
              parser: "M/D/YY",
              unit: "week",
              displayFormats: {
                week: "MMM DD",
              },
              tooltipFormat: "MMM DD",
            },
            offset: true,
            gridLines: {
              display: false,
              color: "#fff",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "#fff",
              borderDash: [10],
              lineWidth: 0.2,
            },
            ticks: {
              fontColor: "#a9a9a9",
            },
          },
        ],
      },
      plugins: { datalabels: { display: false } },
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
