import React, { Fragment } from "react";
import { Container, Card, Accordion, Button, Row, Col } from "react-bootstrap";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import Navbar from "../Common/Navbar";
import Summary from "./Summary";
import UpcomingAppointments from "./UpcomingAppointments";
import RecentAppointments from "./RecentAppointments";
import OngoingAppointment from "./OngoingAppointment";
import AvailabilitySlots from "./AvailabilitySlots";
function Doctor() {
  const width = useWindowDimensions();
  return (
    <Fragment>
      <Navbar />
      <Container
        style={
          width <= 576
            ? { marginTop: "15%", padding: "2%" }
            : { marginTop: "5%", padding: "2%" }
        }
      >
        <Summary />
        <Card
          className="roboto text-center p-2 shadow"
          style={
            width <= 576
              ? { width: "100%", color: "white", marginTop: "5%" }
              : {
                  width: "100%",
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
        <AvailabilitySlots />
        <Row className="sticky-bottom mt-3">
          {width <= 576 ? (
            <Col xs={12} style={{ textAlign: "center" }}>
              <Button className="roboto" size="lg" variant="danger">
                Make Unavailable
              </Button>
            </Col>
          ) : (
            <Button className="roboto" size="lg" variant="danger">
              Make Unavailable
            </Button>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Doctor;
