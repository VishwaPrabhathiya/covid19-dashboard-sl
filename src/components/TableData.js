import React, { Component } from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import TimeCalculate from "./TimeCalculate";
import CumulativeChart from "./CumulativeChart";

const Styles = styled.div`
  .table-responsive {
    position: relative;
    height: 500px;
    overflow-y: scroll;
    width: 100%;
  }
  .container-fluid {
    margin-bottom: 80px;
  }
`;

export default class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitals: props.hospitals,
    };
    // console.log(props.hospitals);
  }

  render() {
    const { hospitals } = this.state;
    return (
      <Styles>
        <Container fluid>
          <Row>
            <Col md={7} sm={12} xs={12} lg={8}>
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
                    <th>Treatmenting Total</th>
                    <th>Treatmenting Sri Lankans</th>
                    <th>Treatmenting Foreigns</th>
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
                *Treatmenting Total: Total number of Sri Lankans & Foreigns who
                are currently on treatment/observation for COVID-19 in a given
                hospital
              </div>
            </Col>
            <Col md={5} sm={12} xs={12} lg={4}>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <h3>Treatmenting Sri Lankans</h3>
                <span>
                  updated {TimeCalculate(hospitals[0].created_at)} ago
                </span>
              </div>
              <CumulativeChart hospitals={hospitals} />
              <div style={{ textAlign: "center" }}>
                <span className="text-muted">*Not included Foreigns</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
