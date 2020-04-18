import React, { Component } from "react";
import axios from "axios";
import SLstats from "./SLstats";
import LoadingScreen from "./LoadingScreen";
import Worldstats from "./Worldstats";
import TableData from "./TableData";
import Footer from "./Footer";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      hospitals: [],
      done: undefined,
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
  }

  chooseWhatToRender = () => {
    const { details, hospitals } = this.state;
    const name = this.props.name;

    if (!this.state.done) {
      return <LoadingScreen />;
    } else {
      return (
        <>
          {name === "SLstats" ? (
            <SLstats details={details} />
          ) : (
            <Worldstats details={details} />
          )}
          <TableData hospitals={hospitals} />
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
