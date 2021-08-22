import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import TimeCalculate from "./TimeCalculate";
import CumulativeChart from "./CumulativeChart";
import DailyLineChart from "./DailyLineChart";
import DailyNewBarChart from "./DailyNewBarChart";
import DailyRecoverBar from "./DailyRecoverBar";
import DailyDeathBar from "./DailyDeathBar";
import DailyTestsBar from "./DailyTestsBar";

const Styles = styled.div`
  .wrapAll2 {
    border: 2px solid #176672;
    border-radius: 20px;
    padding: 5px;
    height: 100%;
  }
  .col-12 {
    margin-bottom: 10px;
  }
`;

export default class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dDate: props.dDate,
      newDetails:  props.details,
      dTotal: props.dTotal,
      dRecover: props.dRecover,
      dDeath: props.dDeath,
      update: props.update,
      testPCRDates: props.testPCRDates,
      testPCR: props.testPCR,
      testRapid: props.testRapid,
    };
  }

  render() {
    const {
      dDate,
      newDetails,
      dTotal,
      dRecover,
      dDeath,
      update,
      testPCRDates,
      testPCR,
      testRapid
    } = this.state;

    return (
      <Styles>
        <Container fluid>
          <Row>
            <Col
              md={2}
              sm={12}
              xs={12}
              lg={2}
              style={{ marginBottom: "0px" }}
            ></Col>
            <Col md={8} sm={12} xs={12} lg={8}>
              <DailyLineChart
                dDate={dDate}
                dTotal={dTotal}
                dRecover={dRecover}
                dDeath={dDeath}
              />
            </Col>
            <Col
              md={2}
              sm={12}
              xs={12}
              lg={2}
              style={{ marginBottom: "0px" }}
            ></Col>
            {/* <Col md={5} sm={12} xs={12} lg={4}>
              <div className="wrapAll2">
                <div style={{ textAlign: "center", marginBottom: "0px" }}>
                  <h3>Total Statistic</h3>
                  <span>
                    updated {TimeCalculate(update)} ago
                  </span>
                </div>
                <CumulativeChart newDetails={newDetails} />
              </div>
            </Col> */}
          </Row>
          <Row>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DailyNewBarChart dDate={dDate} dTotal={dTotal} />
            </Col>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DailyRecoverBar dDate={dDate} dRecover={dRecover} />
            </Col>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DailyDeathBar dDate={dDate} dDeath={dDeath} />
            </Col>
          </Row>
          <Row>
            <Col
              md={1}
              sm={12}
              xs={12}
              lg={1}
              style={{ marginBottom: "0px" }}
            ></Col>
            <Col md={10} sm={12} xs={12} lg={10}>
              <DailyTestsBar
                testPCRDates={testPCRDates}
                testPCR={testPCR}
                testRapid={testRapid}
              />
            </Col>
            <Col
              md={1}
              sm={12}
              xs={12}
              lg={1}
              style={{ marginBottom: "0px" }}
            ></Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
