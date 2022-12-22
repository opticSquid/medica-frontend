import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
function ConfirmationToast({ status }) {
  const width = useWindowDimensions();
  const [show, setShow] = useState(true);
  return (
    <ToastContainer
      className="p-3"
      position={width < 400 ? "bottom-center" : "bottom-end"}
    >
      <Toast
        autohide
        show={show}
        onClose={() => setShow(!show)}
        delay={status === true ? 2000 : 4000}
        bg={status === true ? "success" : "danger"}
      >
        <Toast.Header>
          {status === true ? "Booked Successfully" : "Error Occoured"}
        </Toast.Header>
        <Toast.Body>
          {status === true
            ? "Your Booking has been successfully done."
            : "Due to some reason the booking could not be done please try again after some time."}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ConfirmationToast;
