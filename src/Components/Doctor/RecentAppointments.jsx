import React from "react";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import { Accordion, ListGroup } from "react-bootstrap";
import { ListOfRecentAppointments } from "../Data/Doctor/Appointments";
import Appointments from "./Appointments";
function RecentAppointments(props) {
  const width = useWindowDimensions();
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <span
          className="roboto"
          style={width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }}
        >
          Recent Appointments
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {ListOfRecentAppointments.map((appointment, idx) => (
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

export default RecentAppointments;
