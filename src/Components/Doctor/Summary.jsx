import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
function Summary(props) {
  const width = useWindowDimensions();
  return (
    <Card
      className="roboto text-center p-2 shadow"
      style={{ width: "100%", color: "white" }}
      bg="primary"
    >
      <Card.Title>
        <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          Today's Summary
        </span>
      </Card.Title>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <span style={{ fontWeight: 700, fontSize: "1.1em" }}>
                Remaining
              </span>
              <br />
              <span style={{ fontSize: "1em" }}>15</span>
            </Col>
            <Col xs={4}>
              <span style={{ fontWeight: 700, fontSize: "1.1em" }}>Total</span>
              <br />
              <span style={{ fontSize: "1em" }}>35</span>
            </Col>
            <Col xs={4}>
              <span style={{ fontWeight: 700, fontSize: "1.1em" }}>Seen</span>
              <br />
              <span style={{ fontSize: "1em" }}>20</span>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Summary;
