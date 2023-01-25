import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import { useSelector } from "react-redux";
import inputSliceAction from "../store/slices/input";
import { useDispatch } from "react-redux";
function TypeOne(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeOne);
  const choices = props.question.choices.map((choice) => (
    <label key={choice.id}>
      <input
        type="radio"
        name={props.question.id}
        value={choice.id}
        onChange={(e) => {
          dispatch(
            inputSliceAction.input({
              type: "ONE",
              id: props.question.id,
              value: choice.id,
            })
          );
        }}
        defaultChecked={
          input[props.question.id].value === choice.id ? true : false
        }
      ></input>
      {choice.choice_text}
    </label>
  ));
  const clickHandler = () => {
    // console.log("typeonenext");
  };
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <form>{choices}</form>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeOne;
