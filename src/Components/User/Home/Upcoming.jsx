import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { PersonCircle, CalendarEvent } from "react-bootstrap-icons";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
function Upcoming() {
  const width = useWindowDimensions();
  return (
    <Card
      className="shadow"
      style={
        width < 400 ? { width: "100%" } : { width: "50%", marginLeft: "25%" }
      }
      bg="primary"
    >
      <Card.Body>
        <Container>
          <Row>
            <Col xs={3} className="my-auto">
              <PersonCircle color="white" size={60} />
            </Col>
            <Col>
              <Row>
                <Card.Title style={{ color: "white" }}>Doctor Name</Card.Title>
              </Row>
              <Row>
                <p
                  style={
                    width < 400
                      ? {
                          fontFamily: "'Roboto', sans-serif",
                          MozOsxFontSmoothing: "grayscale",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 400,
                          fontSize: "0.7em",
                          color: "rgba(255,255,255,0.7)",
                        }
                      : {
                          fontFamily: "'Roboto', sans-serif",
                          MozOsxFontSmoothing: "grayscale",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 400,
                          fontSize: "1em",
                          color: "rgba(255,255,255,0.7)",
                        }
                  }
                >
                  Reason why you are visiting the doctor. The ailment
                </p>
              </Row>
              <Row className="my-auto">
                <Col xs={1}>
                  <CalendarEvent color="white" size={16} />
                </Col>
                <Col
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 400,
                    fontSize: "1em",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  31/12/22&nbsp;3:35pm
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Upcoming;