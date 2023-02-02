import React from "react";
import styles from "./QuestionContainer.module.css";
function QuestionContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default QuestionContainer;
