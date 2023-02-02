import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import inputSliceAction from "../store/slices/input";
import submitSliceAction from "../store/slices/submit";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TypeTwo.module.css";
function TypeTwo(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeTwo);
  const { alert } = useSelector((state) => state.submit);
  const inputRef = useRef();
  const options = props.question.choices.map((choice) => {
    return (
      <option key={choice.id} value={choice.id}>
        {choice.choice_text}
      </option>
    );
  });
  const clickHandler = () => {
    if (props.question.required) {
      if (!input[props.question.id].value) {
        dispatch(submitSliceAction.alert({ type: "START" }));
        return;
      }
      dispatch(submitSliceAction.alert({ type: "END" }));
    }
    props.setCurrentQuestion((previous) => {
      return (previous + 1) % (props.numberOfQuestion + 1);
    });
  };
  const alertClose = () => {
    dispatch(submitSliceAction.alert({ type: "END" }));
  };
  return (
    <Fragment>
      <h2 className={styles.h2}>{props.question.question_text}</h2>
      <select
        className={styles.select}
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
        <option value="" selected disabled hidden>
          Select Any Option
        </option>
        {options}
      </select>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
      {props.question.required === 1 ? <h6>REQUIRED</h6> : ""}
      {alert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>This field is compoulsary</strong>
          <button
            onClick={alertClose}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default TypeTwo;
