import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import "chartjs-plugin-datalabels";

const Styles = styled.div`
  .barChart {
    position: relative;
    margin: auto;
    min-height: 376px;
    border: 2px solid #176672;
    border-radius: 20px;
    padding: 5px;
  }
`;

const sliceArray = (arrayData) => {
  return arrayData.slice(arrayData.length-20, arrayData.length);
};

class DailyDeathBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dDate: props.dDate,
      dDeath: props.dDeath,
    };
  }

  render() {
    const { dDate, dDeath } = this.state;
    const dNewDeath = sliceArray(dDeath);
    const dNewDates = sliceArray(dDate);

    const data = {
      labels: dNewDates,
      datasets: [
        {
          label: "Daily Deaths",
          backgroundColor: "#ae1d13",
          borderColor: "#7f150d",
          borderWidth: 2,
          hoverBackgroundColor: "#f86f66",
          hoverBorderColor: "#7f150d",
          data: dNewDeath,
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
            offsetGridLines: true,
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
          display: false,
        },
        title: {
          display: true,
          text: "Daily Deaths",
          font: {
            size: 26,
            family: "Arial",
          },
          color: "#fff",
        },
        legend: {
          display: false,
          labels: {
            font: {
              size: 13,
            },
            color: "white",
            usePointStyle: false,
          },
        },
        tooltip: {
          mode: "index",
          position: "nearest",
          titleAlign: "center",
          displayColors: false,
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
        <div className="barChart">
          <Bar data={data} options={options} />
        </div>
      </Styles>
    );
  }
}

export default DailyDeathBar;
