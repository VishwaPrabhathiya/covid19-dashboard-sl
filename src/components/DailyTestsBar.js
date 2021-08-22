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

class DailyTestsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testPCRDates: props.testPCRDates,
      testPCR: props.testPCR,
      testRapid: props.testRapid,
    };
  }

  render() {
    const { testPCRDates, testPCR, testRapid } = this.state;

    const data = {
      labels: testPCRDates,
      datasets: [
        {
            label: "Daily PCR Tests",
            backgroundColor: "#156180",
            borderColor: "#0e5471",
            borderWidth: 2,
            hoverBackgroundColor: "#37bcf3",
            hoverBorderColor: "#0e5471",
            data: testPCR,
        },
        {
            label: "Daily Rapid Antigen Tests",
            backgroundColor: "#19ad9b",
            borderColor: "#108476",
            borderWidth: 2,
            hoverBackgroundColor: "#3ae8d3",
            hoverBorderColor: "#108476",
            data: testRapid,
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
          text: "Daily Tests",
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
          mode: "index",
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
        <div className="barChart">
          <Bar data={data} options={options} />
        </div>
      </Styles>
    );
  }
}

export default DailyTestsBar;
