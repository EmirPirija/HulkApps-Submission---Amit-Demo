import React from "react";
import classes from "./AnnouncementBar.module.css";

function AnnouncementBar() {
  return (
    <div>
      <h1 className={classes["announcement-bar"]}>Welcome to our store</h1>
    </div>
  );
}

export default AnnouncementBar;
