import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../Common/Navbar";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import Doctorarray from "./DoctorArray";
import PreviousAppointments from "./PreviousAppointments";
import Slideshow from "./Slideshow";
import Upcoming from "./Upcoming";
function UserHome() {
  const width = useWindowDimensions();
  return (
    <Fragment>
      <Navbar />
      <Container
        fluid
        style={
          width <= 576
            ? { marginTop: "15%", padding: "2%" }
            : { marginTop: "5%", padding: "2%" }
        }
      >
        <Slideshow />
        <p
          style={
            width <= 576
              ? {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 500,
                  fontSize: "1em",
                  paddingTop: "3%",
                }
              : {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 700,
                  fontSize: "1.2em",
                  paddingTop: "3%",
                }
          }
        >
          Upcoming Appointments
        </p>
        <Upcoming />
        <p
          style={
            width <= 576
              ? {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 500,
                  fontSize: "1em",
                  paddingTop: "3%",
                }
              : {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 700,
                  fontSize: "1.2em",
                  paddingTop: "3%",
                }
          }
        >
          See a Doctor
        </p>
        <Doctorarray />
        <p
          style={
            width <= 576
              ? {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 500,
                  fontSize: "1em",
                  paddingTop: "3%",
                }
              : {
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 700,
                  fontSize: "1.2em",
                  paddingTop: "3%",
                }
          }
        >
          Previous Appointments
        </p>
        <PreviousAppointments />
      </Container>
    </Fragment>
  );
}

export default UserHome;
