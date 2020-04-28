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

const takeActiveCases = (districtAllData) => {
  let districtData = [];
  let num;
  for (num = 1; num <= 26; num++) {
    districtData.push(districtAllData[num]);
  }
  return [districtData];
};

const takeSeperateData = (districtData) => {
  let districts = [];
  let cases = [];
  let num;
  for (num = 0; num < districtData.length; num++) {
    districts.push(districtData[num][0]);
    cases.push(districtData[num][3]);
  }
  return [districts, cases];
};

class DistrictBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      districtAllData: props.districtData,
    };
  }

  render() {
    let { districtAllData } = this.state;
    let districtData = takeActiveCases(districtAllData);
    districtData[0].sort((a, b) => {
      return a[3] - b[3];
    });

    districtData = districtData[0].slice(16, 26);
    districtData.sort();
    const districtValues = takeSeperateData(districtData);

    const districts = districtValues[0];
    const cases = districtValues[1];
    let maxR = Math.max(...cases);
    if (maxR % 30 === 0) {
      maxR = maxR + 30;
    } else {
      if (maxR % 30 > 15) {
        maxR = 60 - (maxR % 30) + maxR;
      } else {
        maxR = 30 - (maxR % 30) + maxR;
      }
    }

    const data = {
      labels: districts,
      datasets: [
        {
          label: "Cases",
          backgroundColor: "mediumvioletred",
          borderColor: "#8d105f",
          borderWidth: 1,
          hoverBackgroundColor: "#f346b4",
          hoverBorderColor: "#8d105f",
          data: cases,
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: "District Distribution (Most Critical)",
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
            },
            offset: true,
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
              stepSize: 30,
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

export default DistrictBarChart;
