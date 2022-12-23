import React from "react";
import { Carousel, Image } from "react-bootstrap";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import Image1 from "../../../Images/Image1.jpg";
import Image2 from "../../../Images/Image2.jpg";
import Image3 from "../../../Images/Image3.jpg";
function Slideshow() {
  const width = useWindowDimensions();
  return (
    <Carousel fade interval={2000}>
      <Carousel.Item>
        <Image
          rounded
          fluid
          src={Image1}
          style={
            width <= 576
              ? { height: "auto" }
              : { height: "300px", width: "100%", objectFit: "contain" }
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          rounded
          fluid
          src={Image2}
          style={
            width <= 576
              ? { height: "auto" }
              : { height: "300px", width: "100%", objectFit: "contain" }
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          rounded
          fluid
          src={Image3}
          style={
            width <= 576
              ? { height: "auto" }
              : { height: "300px", width: "100%", objectFit: "contain" }
          }
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
