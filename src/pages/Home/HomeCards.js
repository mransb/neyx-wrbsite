import React from "react";
import Card from "react-bootstrap/Card";

const HomeCards = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Body>
        <div className="p-3">
          <i>icon</i>
          <Card.Title className="my-3">{props.heading}</Card.Title>

          <Card.Text className="mb-3">{props.content}</Card.Text>
          <Card.Text>
            {" "}
            <a href="">Learn more</a>{" "}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeCards;
