import React from "react";
import Card from "react-bootstrap/Card";

const ServiceCardSec1 = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {props.number}
        </Card.Subtitle>
        <Card.Title>
          {" "}
          <h2>{props.header}</h2>{" "}
        </Card.Title>

        <Card.Text>{props.para}</Card.Text>
      </Card.Body>
      <hr style={{ border: "8px solid #0307EE" }} />
    </Card>
  );
};

export default ServiceCardSec1;
