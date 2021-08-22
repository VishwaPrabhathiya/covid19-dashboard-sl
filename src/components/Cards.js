import React from "react";
import { Card } from "react-bootstrap";
import TimeCalculate from "./TimeCalculate";

function Cards(props) {
  return (
    <Card bg={props.background} text="light" style={props.backgroundColor ? {backgroundColor: props.backgroundColor} : {backgroundColor: "black"}}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{numberWithCommas(props.amount)}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small>updated {TimeCalculate(props.update)} ago</small>
      </Card.Footer>
    </Card>
  );
}

const numberWithCommas = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default Cards;
