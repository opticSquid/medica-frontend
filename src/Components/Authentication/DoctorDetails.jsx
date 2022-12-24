import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
function DoctorDetails({ details, handleChange }) {
  return (
    <Fragment>
      <Form.Group controlId="regNo">
        <Form.Label>Doctor Registration Number</Form.Label>
        <Form.Control
          type="text"
          name="regNo"
          vlue={details.regNo}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="degrees">
        <Form.Label>Degree/s</Form.Label>
        <Form.Control
          type="text"
          name="degrees"
          value={details.degrees}
          onChange={handleChange}
          required
        />
        <Form.Text>
          In case you hold multiple degrees seperate them by commas (",")
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="specialization">
        <Form.Label>Specialization/s</Form.Label>
        <Form.Control
          type="text"
          name="specialization"
          value={details.specialization}
          onChange={handleChange}
          required
        />
        <Form.Text>
          In case you have multiple specializations seperate them by commas
          (",")
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="experience">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          name="experience"
          value={details.experience}
          onChange={handleChange}
          required
        />
      </Form.Group>
    </Fragment>
  );
}

export default DoctorDetails;
