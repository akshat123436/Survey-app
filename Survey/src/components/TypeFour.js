import React, { Fragment } from "react";

function TypeFour(props) {
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <input type="text" name={props.question.id} />
    </Fragment>
  );
}

export default TypeFour;
