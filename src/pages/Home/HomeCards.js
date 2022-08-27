import React from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";

const HomeCards = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2 cards">
      <Card.Body>
        <div className="p-3">
          <i>{props.icon}</i>
          <Card.Title className="my-3">{props.heading}</Card.Title>
          <Card.Text className="mb-3">{props.content}</Card.Text>
          <Card.Text>
            {" "}
            <a href="" className="a-tag">
              Learn more
            </a>{" "}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeCards;
