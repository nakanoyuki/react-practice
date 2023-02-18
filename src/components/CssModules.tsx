import React from "react";
import classes from "./CssModules.module.scss";

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModules</p>
      <button className={classes.button}>fight!</button>
    </div>
  );
};

export default CssModules;
