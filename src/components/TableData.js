import React, { Component } from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import TimeCalculate from "./TimeCalculate";
import CumulativeChart from "./CumulativeChart";
import DailyLineChart from "./DailyLineChart";
import DailyNewBarChart from "./DailyNewBarChart";
import DailyRecoverBar from "./DailyRecoverBar";
import DistrictBarChart from "./DistrictBarChart";

const Styles = styled.div`
  .table-responsive {
    position: relative;
    height: 500px;
    overflow-y: scroll;
    width: 100%;
  }
  .container-fluid {
    margin-bottom: 50px;
  }
  .col-12 {
    margin-bottom: 10px;
  }
  .wrapAll1 {
    border: 2px solid #176672;
    border-radius: 20px;
    padding: 5px;
  }
  .wrapAll2 {
    border: 2px solid #176672;
    border-radius: 20px;
    padding: 5px;
    height: 100%;
  }
`;

export default class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitals: props.hospitals,
      dDate: props.dDate,
      dTotal: props.dTotal,
      dRecover: props.dRecover,
      dDeath: props.dDeath,
      districtData: props.districtData,
    };
  }

  render() {
    const {
      hospitals,
      dDate,
      dTotal,
      dRecover,
      dDeath,
      districtData,
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
          </Row>
          <Row>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DailyNewBarChart dDate={dDate} dTotal={dTotal} />
            </Col>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DailyRecoverBar dDate={dDate} dRecover={dRecover} />
            </Col>
            <Col md={4} sm={12} xs={12} lg={4}>
              <DistrictBarChart districtData={districtData} />
            </Col>
          </Row>
          <Row>
            <Col md={7} sm={12} xs={12} lg={8}>
              <div className="wrapAll1">
                <div style={{ textAlign: "center" }}>
                  <h3>Hospital Statistics</h3>
                  <span>
                    updated {TimeCalculate(hospitals[0].created_at)} ago
                  </span>
                </div>

                <Table responsive striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Hospital Name</th>
                      <th>Cumulative Total</th>
                      <th>Cumulative Sri Lankans</th>
                      <th>Cumulative Foreigns</th>
                      <th>Total Treatment</th>
                      <th>Sri Lankans in Treatment</th>
                      <th>Foreigns in Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitals.length
                      ? hospitals.map((hospital, id) => {
                          return (
                            <tr key={id}>
                              <td>{hospital.id}</td>
                              <td>{hospital.hospital.name}</td>
                              <td>{hospital.cumulative_total}</td>
                              <td>{hospital.cumulative_local}</td>
                              <td>{hospital.cumulative_foreign}</td>
                              <td>{hospital.treatment_total}</td>
                              <td>{hospital.treatment_local}</td>
                              <td>{hospital.treatment_foreign}</td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </Table>
                <div className="text-muted">
                  *Cumulative Total: Total number of Sri Lankan & Foreigns who
                  have been treated /observed for COVID-19 in a given hospital.
                  *Total Treatment: Total number of Sri Lankans & Foreigns who
                  are currently on treatment/observation for COVID-19 in a given
                  hospital
                </div>
              </div>
            </Col>
            <Col md={5} sm={12} xs={12} lg={4}>
              <div className="wrapAll2">
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h3>Sri Lankans in Treatment</h3>
                  <span>
                    updated {TimeCalculate(hospitals[0].created_at)} ago
                  </span>
                </div>
                <CumulativeChart hospitals={hospitals} />
                <div style={{ textAlign: "center" }}>
                  <span className="text-muted">*Not included Foreigns</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
