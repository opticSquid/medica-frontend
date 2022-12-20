import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import { TelephoneFill, Envelope } from "react-bootstrap-icons";
function DoctorInfo(props) {
  return (
    <Container style={{ padding: "2%" }}>
      <section style={{ paddingTop: "1%" }}>
        <h1
          className="roboto"
          style={{
            fontWeight: "bold",
          }}
        >
          Dr.
        </h1>
        <h1
          className="roboto"
          style={{
            fontWeight: "bold",
          }}
        >
          Doctor Name
        </h1>
      </section>
      <div
        className="roboto"
        style={{
          color: "gray",
          fontSize: "0.8em",
        }}
      >
        Doctor of what
      </div>
      <div
        className="roboto"
        style={{
          color: "gray",
          fontSize: "0.8em",
        }}
      >
        Relevant degrees that the person holds
      </div>
      <div
        className="roboto"
        style={{
          fontWeight: "bold",
          fontSize: "1.2em",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        Emergency Contact
      </div>
      <Container>
        <Row>
          <Col xs={5}>
            <a href="tel:+918617882389">
              <Button variant="success" style={{ width: "100%" }}>
                <TelephoneFill />
                <span
                  className="align-middle roboto"
                  style={{ paddingLeft: "5%" }}
                >
                  Call
                </span>
              </Button>
            </a>
          </Col>
          <Col xs={{ span: 5, offset: 2 }}>
            <a href="mailto:soumalyabhattacharya6@gmail.com">
              <Button variant="danger" style={{ width: "100%" }}>
                <Envelope />
                <span
                  className="align-middle roboto"
                  style={{ paddingLeft: "5%" }}
                >
                  Mail
                </span>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <div
        className="roboto"
        style={{
          fontWeight: "bolder",
          fontSize: "1em",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        Visiting Time
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>WeekDays</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>Monday 9:00 am - 12:00 pm</ListGroup.Item>
              <ListGroup.Item>Tuesday 9:00 am - 12:00 pm</ListGroup.Item>
              <ListGroup.Item>Wednesday 9:00 am - 12:00 pm</ListGroup.Item>
              <ListGroup.Item>Thursday 9:00 am - 12:00 pm</ListGroup.Item>
              <ListGroup.Item>Friday 9:00 am - 12:00 pm</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Weekends</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>Saturday 9:00 am - 12:00 pm</ListGroup.Item>
              <ListGroup.Item>Sunday 9:00 am - 12:00 pm</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Container fluid style={{ marginTop: "2%" }}>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Button variant="warning" size="lg" style={{ width: "80%" }}>
            Book Appointment
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default DoctorInfo;
