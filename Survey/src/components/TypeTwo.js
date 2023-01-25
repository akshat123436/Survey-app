import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";

function TypeTwo(props) {
  const inputRef = useRef();
  const options = props.question.choices.map((choice) => (
    <option key={choice.id} value={choice.id}>
      {choice.choice_text}
    </option>
  ));
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <label htmlFor={props.question.id}>{props.question.question_text}</label>
      <select id={props.question.id} name={props.question.id} ref={inputRef}>
        {options}
      </select>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeTwo;
