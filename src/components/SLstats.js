import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import Cards from "./Cards";
import styled from "styled-components";

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
`;

function SLstats(props) {
  return (
    <Styles>
      <Jumbotron>
        <Row className="justify-content-center">
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="info"
              title="New Cases"
              as="h3"
              amount={props.details.local_new_cases}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="secondary"
              title="Total Cases"
              as="h3"
              amount={props.details.local_total_cases}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="warning"
              title="Total in Hospitals"
              as="h3"
              amount={
                props.details.local_total_number_of_individuals_in_hospitals
              }
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="success"
              title="Total Recovered"
              as="h3"
              amount={props.details.local_recovered}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="dark"
              title="Total Deaths"
              as="h3"
              amount={props.details.local_deaths}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="danger"
              title="Active Cases"
              as="h3"
              amount={props.details.local_active_cases}
              update={props.details.update_date_time}
            />
          </Col>
        </Row>
      </Jumbotron>
    </Styles>
  );
}

export default SLstats;
