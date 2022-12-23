import React, { Fragment } from "react";
import { Container, Card, Accordion } from "react-bootstrap";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import Navbar from "../Common/Navbar";
import Summary from "./Summary";
import UpcomingAppointments from "./UpcomingAppointments";
import RecentAppointments from "./RecentAppointments";
import OngoingAppointment from "./OngoingAppointment";
function Doctor() {
  const width = useWindowDimensions();
  return (
    <Fragment>
      <Navbar />
      <Container
        style={
          width < 400
            ? { marginTop: "15%", padding: "2%" }
            : { marginTop: "5%", padding: "2%" }
        }
      >
        <Summary />
        <Card
          className="roboto text-center p-2 shadow"
          style={
            width < 400
              ? { width: "100%", color: "white", marginTop: "5%" }
              : {
                  width: "50%",
                  marginLeft: "25%",
                  color: "white",
                  marginTop: "3%",
                }
          }
        >
          <OngoingAppointment />
          <Accordion>
            <UpcomingAppointments />
            <RecentAppointments />
          </Accordion>
        </Card>
      </Container>
    </Fragment>
  );
}

export default Doctor;
