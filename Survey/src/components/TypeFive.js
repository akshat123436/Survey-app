import React, { Fragment } from "react";

function TypeFive(props) {
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <input type="file" name={props.question.id}></input>
    </Fragment>
  );
}

export default TypeFive;
