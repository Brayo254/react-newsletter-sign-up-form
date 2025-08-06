import React from "react";
import { FaCheck } from "react-icons/fa";

const SuccessModal = ({ onDismiss, email }) => {
  return (
    <>
      <div className="modal-overlay">

      <div className="modal-container">
        <div className="success-icon">
          <FaCheck />
        </div>
        <div className="modal-heading">Thanks for subscribing!</div>
        <p className="confirmation">
          A confirmation email has been sent to {email} . Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button onClick={onDismiss}>Dismiss Message</button>
      </div>
      </div>
    </>
  );
};

export default SuccessModal;
