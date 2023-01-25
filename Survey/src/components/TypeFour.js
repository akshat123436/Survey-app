import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationButtons from "./UI/NavigationButtons.js";
import inputSliceActions from "../store/slices/input";
function TypeFour(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => {
    // console.log(state.input);
    return state.input.typeFour[props.question.id].value;
  });
  const onChangeHandler = (e) => {
    dispatch(
      inputSliceActions.input({
        type: "FOUR",
        id: props.question.id,
        value: e.target.value,
      })
    );
  };
  return (
    <Fragment>
      <h2>{props.question.question_text}</h2>
      <input
        onChange={onChangeHandler}
        type="text"
        name={props.question.id}
        value={input}
      />
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeFour;
