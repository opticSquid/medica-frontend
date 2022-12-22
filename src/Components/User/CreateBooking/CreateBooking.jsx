import React, { Fragment, useState } from "react";
import { Modal, InputGroup, Form, Container, Button } from "react-bootstrap";
import { Calendar } from "react-bootstrap-icons";

function CreateBooking({ show, close, handleSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);
  const handleReset = () => {
    setDate("");
    setTime(0);
  };
  return (
    <Fragment>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    aria-label="Booking Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <InputGroup.Text>
                    <Calendar />
                  </InputGroup.Text>
                </InputGroup>
                <Form.Select
                  size="lg"
                  className="mb-3 text-center"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value={0}>Available Time Slots</option>
                  <option value={1}>9:00am - 9:15am</option>
                  <option value={2}>9:15am - 9:30am</option>
                  <option value={3}>9:30am - 9:45am</option>
                  <option value={4}>9:45am - 10:00am</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="reset" onClick={handleReset} variant="outline-danger">
            Reset
          </Button>
          <Button type="submit" onClick={handleSubmit} variant="primary">
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CreateBooking;
