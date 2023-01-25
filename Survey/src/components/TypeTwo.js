import React, { Fragment } from "react";

function TypeTwo(props) {
  const options = props.question.choices.map((choice) => (
    <option key={choice.id} value={choice.id}>
      {choice.choice_text}
    </option>
  ));
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <label htmlFor={props.question.id}>{props.question.question_text}</label>
      <select id={props.question.id} name={props.question.id}>
        {options}
      </select>
    </Fragment>
  );
}

export default TypeTwo;
