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
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
function DoctorInfo(props) {
  const width = useWindowDimensions();
  return (
    <Container fluid={width < 400 ? false : true} style={{ padding: "2%" }}>
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
        style={
          width < 400
            ? {
                color: "gray",
                fontSize: "0.8em",
              }
            : {
                color: "gray",
                fontSize: "1.5em",
              }
        }
      >
        Doctor of what
      </div>
      <div
        className="roboto"
        style={
          width < 400
            ? {
                color: "gray",
                fontSize: "0.8em",
              }
            : { color: "gray", fontSize: "1.5em" }
        }
      >
        Relevant degrees that the person holds
      </div>
      <div
        className="roboto"
        style={
          width < 400
            ? {
                fontWeight: "bold",
                fontSize: "1.2em",
                paddingTop: "2%",
                paddingBottom: "2%",
              }
            : {
                fontWeight: "bold",
                fontSize: "1.7em",
                paddingTop: "2%",
                paddingBottom: "2%",
              }
        }
      >
        Emergency Contact
      </div>
      <Container>
        <Row>
          <Col xs={5}>
            <a href="tel:+918617882389">
              <Button
                variant="success"
                style={
                  width < 400
                    ? { width: "100%" }
                    : {
                        width: "100%",
                        padding: "3%",
                      }
                }
              >
                <TelephoneFill size={width < 400 ? 16 : 40} />
                <span
                  className="align-middle roboto"
                  style={
                    width < 400
                      ? { paddingLeft: "5%" }
                      : { paddingLeft: "2%", fontSize: "2em" }
                  }
                >
                  Call
                </span>
              </Button>
            </a>
          </Col>
          <Col xs={{ span: 5, offset: 2 }}>
            <a href="mailto:soumalyabhattacharya6@gmail.com">
              <Button
                variant="danger"
                style={
                  width < 400
                    ? { width: "100%" }
                    : {
                        width: "100%",
                        padding: "3%",
                      }
                }
              >
                <Envelope size={width < 400 ? 16 : 40} />
                <span
                  className="align-middle roboto"
                  style={
                    width < 400
                      ? { paddingLeft: "5%" }
                      : { paddingLeft: "2%", fontSize: "2em" }
                  }
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
        style={
          width < 400
            ? {
                fontWeight: "bolder",
                fontSize: "1em",
                paddingTop: "2%",
                paddingBottom: "2%",
              }
            : {
                fontWeight: "bolder",
                fontSize: "1.7em",
                paddingTop: "2%",
                paddingBottom: "2%",
              }
        }
      >
        Visiting Time
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span
              className="roboto"
              style={width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }}
            >
              Weekdays
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Monday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Tuesday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Wednesday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Thursday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Friday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span
              className="roboto"
              style={width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }}
            >
              Weekends
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Saturday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span
                  className="roboto"
                  style={
                    width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }
                  }
                >
                  Sunday 9:00 am - 12:00 pm
                </span>
              </ListGroup.Item>
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
          <Button
            variant="warning"
            size="lg"
            className="shadow upper-shadow"
            style={
              width < 400 ? { width: "80%" } : { width: "80%", padding: "2%" }
            }
          >
            <span
              className="roboto"
              style={width < 400 ? { fontSize: "1em" } : { fontSize: "1.5em" }}
            >
              Book Appointment
            </span>
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default DoctorInfo;
