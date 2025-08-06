import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Img from "../assets/illustration-sign-up-desktop.svg";
import SuccessModal from "./SuccessModal";

const Form = () => {
  const emailRegExp =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  const [formEmail, setFormEmail] = useState("");
  const [formEmailError, setFormEmailError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setFormEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formEmail.trim()) {
      setFormEmailError("Email cannot be empty");
      return;
    }
    if (!emailRegExp.test(formEmail)) {
      setFormEmailError("Invalid email detected");
      return;
    }
    setShowModal(true);
  };
  const onDismiss = () => {
    setFormEmail("");
    setFormEmailError("");
    setShowModal(false);
  };
  return (
    <>
      {showModal && <SuccessModal email={formEmail} onDismiss={onDismiss} />}
      <div className="container">
        <div className="left">
          <div className="form-heading">
            <h2>Stay Updated!</h2>
          </div>
          <div className="form-text">
            <p>Join 60,000+ product managers receiving monthly updates on :</p>
          </div>
          <div className="form-list">
            <ul>
              <li>
                <FaCheck className="icon" /> Product discovery and building what
                matters.
              </li>
              <li>
                <FaCheck className="icon" /> Measuring to ensure updates are a
                success
              </li>
              <li>
                <FaCheck className="icon" />
                And much more.
              </li>
            </ul>
          </div>
          <form
            className="myForm"
            action="submit"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="labels">
              <label htmlFor="email">Email address</label>
              {<div className="error">{formEmailError}</div>}
            </div>
            <input
              label="formEmail"
              name="email"
              onChange={handleChange}
              value={formEmail}
              type="email"
              placeholder="email@company.com"
              error={formEmailError}
            />
            <div className="btn">
              <button type="submit">Subscribe to my monthly newsletter</button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Form;
