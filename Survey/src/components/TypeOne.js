import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";

function TypeOne(props) {
  const inputRef = useRef();
  const choices = props.question.choices.map((choice) => (
    <label key={choice.id}>
      <input type="radio" name={props.question.id} value={choice.id}></input>
      {choice.choice_text}
    </label>
  ));
  const clickHandler = () => {
    console.log(inputRef);
  };
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <form ref={inputRef}>{choices}</form>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeOne;
