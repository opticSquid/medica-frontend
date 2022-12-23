import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { CalendarEvent } from "react-bootstrap-icons";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import { ListOfOngoingAppointments } from "../Data/Doctor/Appointments";
function OngoingAppointment(props) {
  const width = useWindowDimensions();
  return (
    <Card
      className="roboto text-center p-2"
      style={
        width < 400
          ? { width: "100%", color: "white", marginBottom: "5%" }
          : {
              width: "100%",
              color: "white",
              marginBottom: "3%",
            }
      }
      bg="success"
    >
      <Card.Header>Ongoing Appointment</Card.Header>
      <Card.Body>
        {ListOfOngoingAppointments.map((appointment, idx) => (
          <Fragment key={idx}>
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
                {appointment.patientName}
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
                        }
                      : {
                          fontWeight: 400,
                          fontSize: "0.9em",
                        }
                  }
                >
                  {appointment.date}&nbsp;{appointment.time}
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
                    }
                  : {
                      fontWeight: 400,
                      fontSize: "0.9em",
                    }
              }
            >
              <Col xs={12}>{appointment.reason}</Col>
            </Row>
          </Fragment>
        ))}
      </Card.Body>
      <Card.Footer>
        <Button variant="primary rounded">Completed</Button>
      </Card.Footer>
    </Card>
  );
}

export default OngoingAppointment;
