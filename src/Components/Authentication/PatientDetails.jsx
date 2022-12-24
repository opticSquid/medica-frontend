import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
function PatientDetails({ details, handleChange }) {
  return (
    <Fragment>
      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={details.age}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          name="gender"
          value={details.gender}
          onChange={handleChange}
        >
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="lgbtq+">LGBTQ+</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="medicalConditions">
        <Form.Label>Auxillary Medical Conditions</Form.Label>
        <Form.Control
          type="text"
          name="medicalConditions"
          value={details.medicalConditions}
          onChange={handleChange}
        />
        <Form.Text>
          Conditions like Diabetes, High Blood Pressure or any specific type of
          allergies etc
        </Form.Text>
      </Form.Group>
    </Fragment>
  );
}

export default PatientDetails;
