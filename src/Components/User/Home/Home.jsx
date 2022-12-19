import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../Common/Navbar";
import Doctorarray from "./DoctorArray";
import PreviousAppointments from "./PreviousAppointments";
import Slideshow from "./Slideshow";
import Upcoming from "./Upcoming";
function UserHome() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid style={{ marginTop: "15%", padding: "2%" }}>
        <Slideshow />
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            fontWeight: 500,
            fontSize: "1em",
            paddingTop: "3%",
          }}
        >
          Upcoming Appointments
        </p>
        <Upcoming />
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            fontWeight: 500,
            fontSize: "1em",
            paddingTop: "3%",
          }}
        >
          See a Doctor
        </p>
        <Doctorarray />
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            fontWeight: 500,
            fontSize: "1em",
            paddingTop: "3%",
          }}
        >
          Previous Appointments
        </p>
        <PreviousAppointments />
      </Container>
    </Fragment>
  );
}

export default UserHome;
