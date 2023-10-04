// LoadingSpinner.js
import React from "react";
import classes from "./UserLoadingSpinner.module.css";

const UserLoadingSpinner = () => {
  return (
    <div class={classes["lds-facebook"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default UserLoadingSpinner;
