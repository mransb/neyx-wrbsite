import React from "react";
import Card from "react-bootstrap/Card";

const AboutUsCard = (props) => {
  return (
    <Card style={{ width: "20rem" }}>
      <div className="p-3">
        <i className="ms-2">icon</i>
        <Card.Body>
          <Card.Title className="mt-2">{props.title}</Card.Title>

          <Card.Text className="mt-3">{props.content}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default AboutUsCard;
