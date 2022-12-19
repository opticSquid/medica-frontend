import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { CalendarEvent } from "react-bootstrap-icons";
function PreviousAppointments(props) {
  const data = [
    {
      name: "Doctor Name 1",
      ailment: "Reason wh you are visiting the doctor. The ailment",
      dt: "31/12/22 3:35pm",
    },
    {
      name: "Doctor Name 1",
      ailment: "Reason wh you are visiting the doctor. The ailment",
      dt: "31/12/22 3:35pm",
    },
    {
      name: "Doctor Name 1",
      ailment: "Reason wh you are visiting the doctor. The ailment",
      dt: "31/12/22 3:35pm",
    },
    {
      name: "Doctor Name 1",
      ailment: "Reason wh you are visiting the doctor. The ailment",
      dt: "31/12/22 3:35pm",
    },
  ];
  return (
    <ListGroup>
      {data.map((d) => (
        <ListGroup.Item>
          <Container>
            <Row>
              <Col
                xs={5}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 600,
                  fontSize: "0.9em",
                }}
              >
                {d.name}
              </Col>
              <Col xs={{ span: 5, offset: 2 }}>
                <CalendarEvent size={14} />
                &nbsp;
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 400,
                    fontSize: "0.7em",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {d.dt}
                </span>
              </Col>
            </Row>
            <Row
              style={{
                fontFamily: "'Roboto', sans-serif",
                MozOsxFontSmoothing: "grayscale",
                WebkitFontSmoothing: "antialiased",
                fontWeight: 400,
                fontSize: "0.7em",
                color: "rgba(0,0,0,0.7)",
              }}
            >
              <Col>{d.ailment}</Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PreviousAppointments;
