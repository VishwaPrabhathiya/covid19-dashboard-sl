import React, { Component } from "react";
import axios from "axios";
import SLstats from "./SLstats";
import LoadingScreen from "./LoadingScreen";
import Worldstats from "./Worldstats";
import TableData from "./TableData";
import Footer from "./Footer";
import { readRemoteFile } from "react-papaparse";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      hospitals: [],
      dDate: [],
      dTotal: [],
      dRecover: [],
      dDeath: [],
      districtData: [],
      done: undefined,
      dDone: undefined,
      disDone: undefined,
    };
  }

  componentDidMount() {
    axios
      .get("https://hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        // console.log(response.data.data);
        this.setState({
          details: response.data.data,
          hospitals: response.data.data.hospital_data,
          done: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    readRemoteFile(
      "https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Daily/covid_lk.csv",
      {
        complete: (results) => {
          // console.log(results.data[0]);
          this.setState({
            dDate: results.data[0],
            dTotal: results.data[1],
            dDeath: results.data[2],
            dRecover: results.data[3],
            dDone: true,
          });
        },
      }
    );

    readRemoteFile(
      "https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/districts_lk.csv",
      {
        complete: (results) => {
          // console.log(results.data);
          this.setState({
            districtData: results.data,
            disDone: true,
          });
        },
      }
    );
  }

  chooseWhatToRender = () => {
    const {
      details,
      hospitals,
      dDate,
      dTotal,
      dRecover,
      dDeath,
      districtData,
    } = this.state;
    const name = this.props.name;

    if (!(this.state.done && this.state.dDone && this.state.disDone)) {
      return <LoadingScreen />;
    } else {
      return (
        <>
          {name === "SLstats" ? (
            <SLstats details={details} />
          ) : (
            <Worldstats details={details} />
          )}
          <TableData
            hospitals={hospitals}
            dDate={dDate}
            dTotal={dTotal}
            dDeath={dDeath}
            dRecover={dRecover}
            districtData={districtData}
          />
          <Footer />
        </>
      );
    }
  };

  render() {
    return <this.chooseWhatToRender />;
  }
}

export default GetData;
