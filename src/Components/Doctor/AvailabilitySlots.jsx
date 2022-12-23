import React, { useState } from "react";
import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import { PencilFill, CircleFill } from "react-bootstrap-icons";
function AvailabilitySlots() {
  const width = useWindowDimensions();
  const [slots, setSlots] = useState([
    { day: "Monday", time: "9:00am - 12:00pm" },
    { day: "Tuesday", time: "9:00am - 12:00pm" },
    { day: "Wednesday", time: "9:00am - 12:00pm" },
    { day: "Thursday", time: "9:00am - 12:00pm" },
    { day: "Friday", time: "9:00am - 12:00pm" },
    { day: "Saturday", time: "--:--" },
    { day: "Sunday", time: "--:--" },
  ]);
  return (
    <Card
      className="roboto text-center p-2 shadow"
      style={
        width <= 576
          ? { width: "100%", marginTop: "5%" }
          : {
              width: "100%",

              marginTop: "3%",
            }
      }
    >
      <Card.Header>
        <Row>
          <Col xs={6} md={2}>
            <Card.Title className="text-left">Availability Slots</Card.Title>
          </Col>
          <Col xs={{ span: 2, offset: 4 }} md={{ span: 1, offset: 9 }}>
            <Button variant="light">
              <PencilFill />
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {slots.map((day, idx) => (
            <ListGroup.Item key={idx}>
              <Row>
                <Col xs={5} md={2}>
                  {day.day}
                </Col>
                <Col xs={1} md={{ span: 1, offset: 7 }}>
                  {day.time === "--:--" ? (
                    <CircleFill color="red" />
                  ) : (
                    <CircleFill color="green" />
                  )}
                </Col>
                <Col xs={6} md={2}>
                  {day.time}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default AvailabilitySlots;
