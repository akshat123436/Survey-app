import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";

function TypeThree(props) {
  const inputRef = useRef();
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
      <form ref={inputRef}>{choices}</form>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeThree;
