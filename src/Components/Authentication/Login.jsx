import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
function Login(props) {
  const width = useWindowDimensions();
  const [cred, setCred] = useState({ email: "", pass: "" });
  const handleChange = (event) => {
    setCred({ ...cred, [event.target.name]: event.target.value });
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                value={cred.pass}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={12} className="text-center">
              <Button variant="primary">Login</Button>
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
