import React, { Fragment } from "react";
import Navbar from "../../Common/Navbar";
import DoctorInfo from "./DoctorInfo";
import DoctorPhoto from "./DoctorPhoto";

function Info() {
  return (
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <Navbar />
      <DoctorPhoto />
      <div
        className="upper-shadow"
        style={{
          position: "relative",
          zIndex: 1,
          top: "50%",
          width: window.innerWidth,
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <DoctorInfo />
      </div>
    </div>
  );
}

export default Info;
