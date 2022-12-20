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
        width < 400
          ? {
              marginTop: "14%",
              width: "100%",
              objectFit: "cover",
              position: "fixed",
            }
          : { marginTop: "5%", width: "100%", objectFit: "cover" }
      }
    />
  );
}

export default DoctorPhoto;