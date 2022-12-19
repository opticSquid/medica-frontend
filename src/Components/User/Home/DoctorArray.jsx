import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { array } from "../../Data/SampleData";
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
        {array.map((d) => (
          <Col
            xs={3}
            style={
              width > 400
                ? { paddingTop: "1%", paddingBottom: "1%" }
                : { padding: "0%" }
            }
          >
            <Row>
              <PersonCircle color="#0D6EFD" size={width < 400 ? 24 : 48} />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <p
                style={
                  width < 400
                    ? {
                        fontFamily: "'Roboto', sans-serif",
                        MozOsxFontSmoothing: "grayscale",
                        WebkitFontSmoothing: "antialiased",
                        fontWeight: 400,
                        fontSize: "1em",
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
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Doctorarray;
