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

const takeNewCases = (dTotal) => {
  let dNewCases = [0];
  let num;
  for (num = 0; num < dTotal.length; num++) {
    if (!(num + 1 === dTotal.length)) {
      dNewCases.push(dTotal[num + 1] - dTotal[num]);
    }
  }
  return dNewCases;
};

class DailyNewBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dDate: props.dDate,
      dTotal: props.dTotal,
    };
  }

  render() {
    const { dDate, dTotal } = this.state;
    const dNewCases = takeNewCases(dTotal);
    let maxR = Math.max(...dNewCases);
    if (maxR % 20 === 0) {
      maxR = maxR + 20;
    } else {
      if (maxR % 20 > 13) {
        maxR = 40 - (maxR % 20) + maxR;
      } else {
        maxR = 20 - (maxR % 20) + maxR;
      }
    }

    const minX = dDate[dDate.length - 27];
    const data = {
      labels: dDate,
      datasets: [
        {
          label: "New Cases",
          backgroundColor: "#17a2b8",
          borderColor: "#0e6f7e",
          borderWidth: 1,
          hoverBackgroundColor: "#64e0f3",
          hoverBorderColor: "#0e6f7e",
          data: dNewCases,
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: "Daily New Cases",
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
              stepSize: 20,
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

export default DailyNewBarChart;
