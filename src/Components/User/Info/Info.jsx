import React from "react";
import Navbar from "../../Common/Navbar";
import DoctorInfo from "./DoctorInfo";
import DoctorPhoto from "./DoctorPhoto";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import { Container, Row } from "react-bootstrap";
function Info() {
  const width = useWindowDimensions();
  return (
    <div
      style={
        width <= 576
          ? {
              position: "relative",
              width: window.innerWidth,
              height: window.innerHeight,
            }
          : { position: "static" }
      }
    >
      <Navbar />
      {width <= 576 ? (
        <DoctorPhoto />
      ) : (
        <Container fluid>
          <Row style={{ justifyContent: "center" }}>
            <DoctorPhoto />
          </Row>
        </Container>
      )}
      <div
        className="upper-shadow"
        style={
          width <= 576
            ? {
                position: "relative",
                zIndex: 1,
                top: "60%",
                width: window.innerWidth,
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                backgroundColor: "white",
              }
            : { position: "relative" }
        }
      >
        <DoctorInfo />
      </div>
    </div>
  );
}

export default Info;
