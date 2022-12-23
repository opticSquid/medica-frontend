import React from "react";
import { Image } from "react-bootstrap";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import Image4 from "../../../Images/Image4.jpg";
function DoctorPhoto(props) {
  const width = useWindowDimensions();
  return (
    <Image
      fluid
      src={Image4}
      style={
        width <= 576
          ? {
              marginTop: "14%",
              width: "100%",
              objectFit: "cover",
              position: "fixed",
            }
          : {
              marginTop: "5%",
              objectFit: "cover",
              height: "20%",
              width: "auto",
            }
      }
    />
  );
}

export default DoctorPhoto;
