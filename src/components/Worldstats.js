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

function Worldstats(props) {
  return (
    <Styles>
      <Jumbotron>
        <Row className="justify-content-center">
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="info"
              title="New Cases"
              as="h3"
              amount={props.details.global_new_cases}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="secondary"
              title="Total Cases"
              as="h3"
              amount={props.details.global_total_cases}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="success"
              title="Total Recovered"
              as="h3"
              amount={props.details.global_recovered}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="dark"
              title="Total Deaths"
              as="h3"
              amount={props.details.global_deaths}
              update={props.details.update_date_time}
            />
          </Col>
          <Col sm="auto" md="auto" lg="auto">
            <Cards
              background="danger"
              title="New Deaths"
              as="h3"
              amount={props.details.global_new_deaths}
              update={props.details.update_date_time}
            />
          </Col>
        </Row>
      </Jumbotron>
    </Styles>
  );
}

export default Worldstats;
