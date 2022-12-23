import React, { useState, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { SlotContext } from "../Contexts/Doctor/SlotContext";
function EditSlots({ show, close }) {
  const { slots, setSlots } = useContext(SlotContext);
  const [timing, setTiming] = useState(slots);
  const handleChange = (event) => {
    let updateSlot = { day: event.target.name, time: event.target.value };
    let selectedIndex = timing.findIndex(
      (element) => element.day === event.target.name
    );
    let Temptiming = timing;
    Temptiming[selectedIndex] = updateSlot;
    setTiming(Temptiming);
    console.log("Updated States: ", timing);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSlots(timing);
    close();
  };
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Timing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {timing.map((day, idx) => {
            return (
              <Form.Group key={idx + day.time} className="mb-2">
                <Form.Label htmlFor={day.day}>{day.day}</Form.Label>
                <Form.Control
                  id={day.day}
                  name={day.day}
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>
            );
          })}
        </Form>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

export default EditSlots;
