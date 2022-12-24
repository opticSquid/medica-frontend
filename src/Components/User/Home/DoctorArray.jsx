import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { array } from "../../Data/User/SampleData";
import Image5 from "../../../Images/Image5.jpg";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
function Doctorarray(props) {
  const width = useWindowDimensions();
  return (
    <Container
      style={{
        border: "1px solid #0D6EFD",
        borderRadius: "15px",
        padding: "2%",
      }}
    >
      <Row>
        {array.map((d, idx) => (
          <Col
            key={idx}
            xs={3}
            style={
              width > 400
                ? { paddingTop: "1%", paddingBottom: "1%" }
                : { padding: "1.5%" }
            }
          >
            <Link to={"/info/" + idx} style={{ textDecoration: "none" }}>
              <Row>
                <Image
                  className="mx-auto d-block"
                  roundedCircle
                  src={Image5}
                  style={
                    width <= 576
                      ? { width: "90%", heigt: "auto", objectFit: "contain" }
                      : {
                          width: "24%",
                          heigt: "auto",
                          objectFit: "contain",
                        }
                  }
                />
              </Row>
              <Row style={{ textAlign: "center" }}>
                <p
                  style={
                    width <= 576
                      ? {
                          fontFamily: "'Roboto', sans-serif",
                          MozOsxFontSmoothing: "grayscale",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 400,
                          fontSize: "0.8em",
                        }
                      : {
                          fontFamily: "'Roboto', sans-serif",
                          MozOsxFontSmoothing: "grayscale",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 400,
                          fontSize: "1.2em",
                        }
                  }
                >
                  {d}
                </p>
              </Row>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Doctorarray;
