import React, { Component } from "react";
import axios from "axios";
import SLstats from "./SLstats";
import LoadingScreen from "./LoadingScreen";
import Worldstats from "./Worldstats";
import TableData from "./TableData";
import Footer from "./Footer";
// import { readRemoteFile } from "react-papaparse";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDetails: [],
      oldDetails: [],
      dDate: [],
      dTotal: [],
      dDeath: [],
      dRecover: [],
      testPCRDates: [],
      testPCR: [],
      testRapid: [],
      done: undefined,
      setupDailyDone: undefined,
      setupTestsDone: undefined,
    };
  }

  componentDidMount() {
    Promise.all([this.getCurrentStatistics(), this.getOldStatistics()])
      .then((responses) => {
        this.setState({
          newDetails: responses[0].data.data,
          oldDetails: responses[1].data.data,
          done: true,
        });
        this.setupDailyStats();
        this.setupTestData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCurrentStatistics = () => {
    return axios.get("https://hpb.health.gov.lk/api/get-current-statistical");
  }

  getOldStatistics = () => {
    return axios.get("https://hpb.health.gov.lk/api/get-statistical-history-data");
  }

  setupDailyStats = () => {
    let dDate = [];
    let dTotal = [];
    let dDeath = [];
    let dRecover = [];

    let tempData = this.state.oldDetails.slice(0, 30);
    tempData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })

    tempData.forEach(element => {
      dDate.push(element.date);
      dTotal.push(element.cases_count);
      dDeath.push(element.deaths_count);
      dRecover.push(element.recoveries_count);
    });

    this.setState({
      dDate: dDate,
      dTotal: dTotal,
      dDeath: dDeath,
      dRecover: dRecover,
      setupDailyDone: true,
    });
  }

  setupTestData = () => {
    let testPCRDates = [];
    let testPCR = [];
    let testRapid = [];

    let tempPCRData = this.state.newDetails.daily_pcr_testing_data.slice(0, 30);
    tempPCRData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })

    let tempRapidData = this.state.newDetails.daily_antigen_testing_data.slice(0, 30);
    tempRapidData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })

    tempPCRData.forEach(element => {
      testPCRDates.push(element.date);
      testPCR.push(element.pcr_count);
    });
    tempRapidData.forEach(element => {
      testRapid.push(element.antigen_count);
    });

    this.setState({
      testPCRDates: testPCRDates,
      testPCR: testPCR,
      testRapid: testRapid,
      setupTestsDone: true,
    });
  }

  chooseWhatToRender = () => {
    const {
      newDetails,
      oldDetails,
      dDate,
      dTotal,
      dDeath,
      dRecover,
      testPCRDates,
      testPCR,
      testRapid,
    } = this.state;
    const name = this.props.name;

    // if (!(this.state.done && this.state.dDone && this.state.disDone)) {
    if (!(this.state.done && this.state.setupDailyDone && this.state.setupTestsDone)) {
      return <LoadingScreen />;
    } else {
      return (
        <>
          {name === "SLstats" ? (
            <SLstats details={newDetails} oldDetails={oldDetails} />
          ) : (
            <Worldstats details={newDetails} />
          )}
          <TableData 
            details={newDetails}
            dDate={dDate}
            dTotal={dTotal}
            dDeath={dDeath}
            dRecover={dRecover}
            update={newDetails.update_date_time}
            testPCRDates={testPCRDates}
            testPCR={testPCR}
            testRapid={testRapid} />
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
