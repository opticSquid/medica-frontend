import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
function Doctorarray(props) {
  const array = [
    "Doctor Name 1",
    "Doctor Name 2",
    "Doctor Name 3",
    "Doctor Name 4",
    "Doctor Name 5",
    "Doctor Name 6",
    "Doctor Name 7",
    "Doctor Name 8",
  ];
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
          <Col xs={3}>
            <Row>
              <PersonCircle color="#0D6EFD" size={24} />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontWeight: 400,
                  fontSize: "1em",
                }}
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
