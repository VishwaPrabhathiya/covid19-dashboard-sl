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

const takeNewRecoveries = (dRecover) => {
  let dNewRecover = [0];
  let num;
  for (num = 0; num < dRecover.length; num++) {
    if (!(num + 1 === dRecover.length)) {
      dNewRecover.push(dRecover[num + 1] - dRecover[num]);
    }
  }
  return dNewRecover;
};

class DailyRecoverBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dDate: props.dDate,
      dRecover: props.dRecover,
    };
  }

  render() {
    const { dDate, dRecover } = this.state;
    const dNewRecover = takeNewRecoveries(dRecover);
    let maxR = Math.max(...dNewRecover);
    if (maxR % 3 === 0) {
      maxR = maxR + 3;
    } else {
      maxR = 3 - (maxR % 3) + maxR;
    }

    const minX = dDate[dDate.length - 27];
    const data = {
      labels: dDate,
      datasets: [
        {
          label: "New Recoveries",
          backgroundColor: "#28a745",
          borderColor: "#117428",
          borderWidth: 1,
          hoverBackgroundColor: "#4fe973",
          hoverBorderColor: "#117428",
          data: dNewRecover,
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: "Daily New Recoveries",
        fontSize: 26,
        fontFamily: "Arial",
        fontColor: "#fff",
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          fontColor: "white",
          usePointStyle: false,
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
            offset: true,
            type: "time",
            time: {
              parser: "M/D/YY",
              unit: "week",
              displayFormats: {
                week: "MMM DD",
              },
              tooltipFormat: "MMM DD",
            },
            gridLines: {
              display: false,
              color: "#fff",
              offsetGridLines: true,
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
              min: 0,
              stepSize: 3,
              max: maxR,
            },
          },
        ],
      },
      plugins: {
        datalabels: {
          display: true,
          color: "#fff",
          anchor: "end",
          align: "top",
          clip: "true",
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

export default DailyRecoverBar;
