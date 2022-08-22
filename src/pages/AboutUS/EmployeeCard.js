import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EmployeeCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="d-flex">
        <div>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
        </div>
        <div className="ms-5">
          <Button variant="primary">LinkedIn</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
