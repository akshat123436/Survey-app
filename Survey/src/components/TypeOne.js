import React, { Fragment } from "react";

function TypeOne(props) {
  const choices = props.question.choices.map((choice) => (
    <label key={choice.id}>
      <input type="radio" name={props.question.id} value={choice.id}></input>
      {choice.choice_text}
    </label>
  ));

  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>

      {choices}
    </Fragment>
  );
}

export default TypeOne;
