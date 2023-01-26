import React, { Fragment } from "react";
import styles from "./Response.module.css";
function Responses(props) {
  return (
    <Fragment>
      <h2>Congratulations the form submitted successfully</h2>
      <div className={styles.container}>
        <div className={`${styles.div} ${styles.cell}`}></div>
        <div className={styles.cell}>{props.questions}</div>
      </div>
    </Fragment>
  );
}

export default Responses;
