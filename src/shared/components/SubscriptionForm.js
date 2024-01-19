import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setShowPopup(true);
    } else {
      // Handle the subscription logic here (for ex., send email to the server)
      console.log("Subscribed with email: ", email);
      // Assuming the subscription logic is successful, clear the email input and hide the popup.
      setEmail("");
      setShowPopup(false);
    }
  };

  // Determine if the label should be animated
  const isLabelAnimated = email !== "";

  return (
    <div className={classes["subscription-container"]}>
      <h2 className={classes.h2}>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div
          className={`${classes["input-container"]} ${
            showPopup ? "active-popup" : ""
          }`}
        >
          <div className={classes["input-wrapper"]}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label
              htmlFor="email"
              className={`${isLabelAnimated ? classes.animated : ""}`}
            >
              Enter your email
            </label>
            <button type="submit" className={classes["button-submit"]}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {showPopup && (
            <div className={`${classes.popup} ${showPopup ? "active" : ""}`}>
              <div className={classes["popup-content"]}>
                <span>Please enter a valid email address.</span>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
