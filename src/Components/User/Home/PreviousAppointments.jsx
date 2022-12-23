import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { CalendarEvent } from "react-bootstrap-icons";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import { data } from "../../Data/User/SampleData";
function PreviousAppointments(props) {
  const width = useWindowDimensions();
  return (
    <ListGroup>
      {data.map((d, idx) => (
        <ListGroup.Item key={idx}>
          <Row>
            <Col
              xs={5}
              style={
                width <= 576
                  ? {
                      fontFamily: "'Roboto', sans-serif",
                      MozOsxFontSmoothing: "grayscale",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600,
                      fontSize: "0.9em",
                    }
                  : {
                      fontFamily: "'Roboto', sans-serif",
                      MozOsxFontSmoothing: "grayscale",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600,
                      fontSize: "1.1em",
                    }
              }
            >
              {d.name}
            </Col>
            <Col xs={{ span: 5, offset: 2 }} md={{ span: 2, offset: 5 }}>
              <CalendarEvent size={width <= 576 ? 14 : 16} />
              &nbsp;
              <span
                style={
                  width <= 576
                    ? {
                        fontFamily: "'Roboto', sans-serif",
                        MozOsxFontSmoothing: "grayscale",
                        WebkitFontSmoothing: "antialiased",
                        fontWeight: 400,
                        fontSize: "0.7em",
                        color: "rgba(0,0,0,0.7)",
                      }
                    : {
                        fontFamily: "'Roboto', sans-serif",
                        MozOsxFontSmoothing: "grayscale",
                        WebkitFontSmoothing: "antialiased",
                        fontWeight: 400,
                        fontSize: "0.9em",
                        color: "rgba(0,0,0,0.7)",
                      }
                }
              >
                {d.dt}
              </span>
            </Col>
          </Row>
          <Row
            style={
              width <= 576
                ? {
                    fontFamily: "'Roboto', sans-serif",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 400,
                    fontSize: "0.7em",
                    color: "rgba(0,0,0,0.7)",
                  }
                : {
                    fontFamily: "'Roboto', sans-serif",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 400,
                    fontSize: "0.9em",
                    color: "rgba(0,0,0,0.7)",
                  }
            }
          >
            <Col xs={12}>{d.ailment}</Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PreviousAppointments;
