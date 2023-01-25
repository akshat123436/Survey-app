import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import inputSliceAction from "../store/slices/input";
import { useSelector, useDispatch } from "react-redux";
function TypeTwo(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeTwo);
  const inputRef = useRef();
  const options = props.question.choices.map((choice) => {
    // console.log(input);
    return (
      <option key={choice.id} value={choice.id}>
        {choice.choice_text}
      </option>
    );
  });
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <label htmlFor={props.question.id}>{props.question.question_text}</label>
      <select
        value={input[props.question.id].value}
        onChange={(e) => {
          dispatch(
            inputSliceAction.input({
              type: "TWO",
              id: props.question.id,
              value: e.target.value,
            })
          );
        }}
        id={props.question.id}
        name={props.question.id}
        ref={inputRef}
      >
        <option value="none" selected disabled hidden>
          Select Any Option
        </option>
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
