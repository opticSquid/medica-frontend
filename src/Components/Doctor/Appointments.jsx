import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { CalendarEvent } from "react-bootstrap-icons";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
function Appointments({ patientName, date, time, reason }) {
  const width = useWindowDimensions();
  return (
    <Fragment>
      <Row>
        <Col
          className="roboto"
          xs={5}
          style={
            width < 400
              ? {
                  fontWeight: 600,
                  fontSize: "0.9em",
                }
              : {
                  fontWeight: 600,
                  fontSize: "1.1em",
                }
          }
        >
          {patientName}
        </Col>
        <Col xs={{ span: 6, offset: 1 }} md={{ span: 4, offset: 3 }}>
          <CalendarEvent size={width < 400 ? 14 : 16} />
          &nbsp;
          <span
            className="roboto"
            style={
              width < 400
                ? {
                    fontWeight: 400,
                    fontSize: "0.7em",
                    color: "rgba(0,0,0,0.7)",
                  }
                : {
                    fontWeight: 400,
                    fontSize: "0.9em",
                    color: "rgba(0,0,0,0.7)",
                  }
            }
          >
            {date}&nbsp;{time}
          </span>
        </Col>
      </Row>
      <Row
        className="roboto"
        style={
          width < 400
            ? {
                fontWeight: 400,
                fontSize: "0.7em",
                color: "rgba(0,0,0,0.7)",
              }
            : {
                fontWeight: 400,
                fontSize: "0.9em",
                color: "rgba(0,0,0,0.7)",
              }
        }
      >
        <Col xs={12}>{reason}</Col>
      </Row>
    </Fragment>
  );
}

export default Appointments;
