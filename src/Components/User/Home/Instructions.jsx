import React from "react";
import { Container, Row, Table, Modal, ListGroup } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Instructions({ show, close }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>Instructions</Modal.Header>
      <Modal.Body>
        <Container className="roboto">
          <Row>
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>About</p>
          </Row>
          <Row>
            This website connects individual doctors with patients and helps:
          </Row>
          <Row>
            <ListGroup>
              <ListGroup.Item>
                <span style={{ fontWeight: "700" }}>Doctors: </span>Keep a track
                of their appointments in an efficient manner
              </ListGroup.Item>
              <ListGroup.Item>
                <span style={{ fontWeight: "700" }}>Patients: </span>Create
                appointments with different doctors giving them a pool of choice
                and also keeping track of their appointments.
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            This is just the frontend in its initial stage. are two pathways
            that you can take:
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Link to Home Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Patient</th>
                  <td>
                    <Link to="/">Patient Home Page</Link>
                    &nbsp;Which is this page
                  </td>
                </tr>
                <tr>
                  <th>Doctor</th>
                  <td>
                    <Link to="/doctors">Doctor Home Page</Link>&nbsp;This would
                    be the home page if would signup as a doctor
                  </td>
                </tr>
              </tbody>
            </Table>
            In future with the help of backend we will dynamically route users
            to their respective home pages using their roles
          </Row>
          <Row>
            Other than that we also have login and signup pages which can be
            reached by clicking the
            <span className="d-inline-block">
              <PersonCircle />
            </span>{" "}
            icon on the top right of the navbar
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Instructions;
