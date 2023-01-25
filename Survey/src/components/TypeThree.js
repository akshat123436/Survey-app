import React, { Fragment } from "react";

function TypeThree(props) {
  const choices = props.question.choices.map((choice) => (
    <Fragment key={choice.id}>
      <input
        type="checkbox"
        value={choice.id}
        id={choice.id}
        name={props.question.id}
      ></input>
      <label htmlFor={choice.id}>{choice.choice_text}</label>
    </Fragment>
  ));
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      {choices}
    </Fragment>
  );
}

export default TypeThree;
