import React, { Component } from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import Cards from "./Cards";
import styled from "styled-components";
import Switch from "react-switch";

const Styles = styled.div`
  .card {
    margin: 20px 0;
    text-align: center;
  }
  .card-title {
    font-size: -webkit-xxx-large;
  }
  .jumbotron {
    padding: 0 1rem;
    background-color: transparent;
    width: fit-content;
    border-color: darkcyan;
    border-style: dashed;
    border-radius: 1rem;
    margin: 10px auto 20px;
    position: relative;
  }
  .react-switch {
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

class SLstats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Styles>
        <Jumbotron>
          <Row className="justify-content-center">
            <Styles>
              <div className="d-flex justify-content-center align-items-center" style={{marginTop: "10px"}}>
                <label>
                  <span
                    style={{ position: "relative" }}
                    className={this.state.checked ? "text-muted" : ""}
                  >
                    New Stats
                  </span>
                  <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    className="react-switch"
                    handleDiameter={28}
                    height={20}
                    width={48}
                    onColor="#2196f3"
                    offColor="#6376df"
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                  <span
                    style={{ position: "relative" }}
                    className={this.state.checked ? "" : "text-muted"}
                  >
                    Total Stats
                  </span>
                </label>
              </div>
            </Styles>
          </Row>
            {this.state.checked ? (
              <Row className="justify-content-center">
                {this.props.details.local_total_cases ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#a05417"
                      title="Total Cases"
                      as="h3"
                      amount={this.props.details.local_total_cases}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.details.local_total_number_of_individuals_in_hospitals ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#a78229"
                      title="Total in Hospitals"
                      as="h3"
                      amount={this.props.details.local_total_number_of_individuals_in_hospitals}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.details.local_recovered ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#108476"
                      title="Total Recovered"
                      as="h3"
                      amount={this.props.details.local_recovered}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.details.local_deaths ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#923c26"
                      title="Total Deaths"
                      as="h3"
                      amount={this.props.details.local_deaths}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.details.local_active_cases ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#156180"
                      title="Active Cases"
                      as="h3"
                      amount={this.props.details.local_active_cases}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
              </Row>
            ) : (
              <Row className="justify-content-center">
                {this.props.details.local_new_cases ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#0f6c95"
                      title="New Cases"
                      as="h3"
                      amount={this.props.details.local_new_cases}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.details.local_new_deaths ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#c52b3a"
                      title="New Deaths"
                      as="h3"
                      amount={this.props.details.local_new_deaths}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
                {this.props.oldDetails[0].recoveries_count ? (
                  <Col sm="auto" md="auto" lg="auto">
                    <Cards
                      background=""
                      backgroundColor="#19a238"
                      title="New Recoveries"
                      as="h3"
                      amount={this.props.oldDetails[0].recoveries_count}
                      update={this.props.details.update_date_time}
                    />
                  </Col>
                ) : (<></>)}
              </Row>
            )}
        </Jumbotron>
      </Styles>
    );
  }
}

export default SLstats;
