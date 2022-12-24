import React from "react";
import { Container, Navbar as Bar, Nav } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
function Navbar(props) {
  const width = useWindowDimensions();
  return (
    <Bar bg="primary" variant="dark" fixed="top" className="shadow">
      <Container fluid>
        <Bar.Brand href="/" className="me-auto">
          Medica
        </Bar.Brand>
        <Nav>
          <Nav.Link href="/login">
            <PersonCircle color="white" size={width <= 576 ? 25 : 30} />
          </Nav.Link>
        </Nav>
      </Container>
    </Bar>
  );
}

export default Navbar;
