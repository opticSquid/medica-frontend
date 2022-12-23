import React from "react";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import { Accordion, ListGroup } from "react-bootstrap";
import { ListOfUpcomingAppointments } from "../Data/Doctor/Appointments";
import Appointments from "./Appointments";
function UpcomingAppointments() {
  const width = useWindowDimensions();
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <span
          className="roboto"
          style={width <= 576 ? { fontSize: "1em" } : { fontSize: "1.5em" }}
        >
          Upcoming Appointments
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {ListOfUpcomingAppointments.map((appointment, idx) => (
            <ListGroup.Item key={idx}>
              <Appointments
                patientName={appointment.patientName}
                date={appointment.date}
                time={appointment.time}
                reason={appointment.reason}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default UpcomingAppointments;
