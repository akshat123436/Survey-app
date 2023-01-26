import React, { Fragment } from "react";
import styles from "./Response.module.css";
function Responses(props) {
  return (
    <Fragment>
      <h2 className={styles.h2}>
        Congratulations the form submitted successfully
      </h2>
      <a className={styles.button} href="/">
        SUBMIT ANOTHER RESPONSE
      </a>
      <h1 className={styles.h1}>YOUR RESPONSE</h1>
      <div className={styles.container}>{props.questions}</div>
    </Fragment>
  );
}

export default Responses;
