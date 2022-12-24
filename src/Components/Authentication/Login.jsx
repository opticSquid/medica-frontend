import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
function Login(props) {
  const width = useWindowDimensions();
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", pass: "" });
  const handleChange = (event) => {
    setCred({ ...cred, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    if (cred.email === "" || cred.pass === "") {
      alert("Fill all the fields");
    } else {
      event.preventDefault();
      navigate("/");
    }
  };
  return (
    <Container fluid>
      <Card
        className="shadow"
        bg="success"
        style={
          width <= 576
            ? { marginTop: "65%", color: "white" }
            : { marginTop: "15%", color: "white" }
        }
      >
        <Card.Header>
          <Card.Title className="roboto text-center">Medica</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={cred.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                value={cred.pass}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={12} className="text-center">
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Login
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Row>
        <Link to="/signup">Do not have an Account? Signup</Link>
      </Row>
    </Container>
  );
}

export default Login;
