import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import DoctorDetails from "./DoctorDetails";
import PatientDetails from "./PatientDetails";
function Signup() {
  const [basicdetails, setBasicDetails] = useState({
    name: "",
    email: "",
    contactnumber: "",
    role: "role",
  });
  const [doctorDetails, setDoctorDetails] = useState({
    regNo: "",
    degrees: "",
    specialization: "",
    experience: "",
  });
  const [patientDetails, setpatientDetails] = useState({
    age: 0,
    gender: "",
    medicalConditions: "",
  });
  const handleChange = (event) => {
    setBasicDetails({
      ...basicdetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleDoctorChange = (event) => {
    setDoctorDetails({
      ...doctorDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handlePatientChange = (event) => {
    setpatientDetails({
      ...patientDetails,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    if (basicdetails.role === "role") {
      alert("Specify a role");
    } else {
      event.preventDefault();
      console.log("Basic Details: ", basicdetails);
      console.log("Doctor Details: ", doctorDetails);
      console.log("Patient Details: ", patientDetails);
      navigate("/");
    }
  };
  const roleBasedDetails = () => {
    if (basicdetails.role === "doctor") {
      return (
        <DoctorDetails
          details={doctorDetails}
          handleChange={handleDoctorChange}
        />
      );
    } else if (basicdetails.role === "user") {
      return (
        <PatientDetails
          details={patientDetails}
          handleChange={handlePatientChange}
        />
      );
    } else {
      return <div />;
    }
  };
  const width = useWindowDimensions();
  const switchMargin = () => {
    if (basicdetails.role === "doctor" && width <= 576) {
      return { marginTop: "5%" };
    } else if (basicdetails.role === "user" && width <= 576) {
      return { marginTop: "20%" };
    } else if (basicdetails.role === "doctor" && width >= 576) {
      return { marginTop: "0%" };
    } else if (basicdetails.role === "user" && width >= 576) {
      return { marginTop: "2%" };
    } else if (width <= 576) {
      return { marginTop: "65%" };
    } else {
      return { marginTop: "10%" };
    }
  };
  return (
    <Container fluid>
      <Card className="shadow" bg="warning" style={switchMargin()}>
        <Card.Header>
          <Card.Title className="roboto text-center">Medica</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={basicdetails.name}
                onChange={handleChange}
                type="text"
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={basicdetails.email}
                name="email"
                onChange={handleChange}
                type="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="contactnumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                value={basicdetails.contactnumber}
                name="contactnumber"
                onChange={handleChange}
                type="tel"
                required
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>You are a</Form.Label>
              <Form.Select
                value={basicdetails.role}
                name="role"
                onChange={handleChange}
                required
              >
                <option>Role</option>
                <option value="user">Normal User</option>
                <option value="doctor">Doctor</option>
              </Form.Select>
            </Form.Group>
            {roleBasedDetails()}
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={12} className="text-center">
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Signup
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Row>
        <Link to="/login">Already have an account? Login</Link>
      </Row>
    </Container>
  );
}

export default Signup;
