import React, { Fragment, useState } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import { useSelector } from "react-redux";
import inputSliceAction from "../store/slices/input";
import submitSliceAction from "../store/slices/submit";
import { useDispatch } from "react-redux";
import styles from "./TypeOne.module.css";

function TypeOne(props) {
  const [goToEnd, setGoToEnd] = useState(false);
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeOne);
  const isSubmitted = useSelector((state) => state.submit.submitted);

  const { alert } = useSelector((state) => state.submit);
  const choices = props.question.choices.map((choice) => (
    <label className={styles.label} key={choice.id}>
      <input
        className={styles.input}
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
    if (props.question.required) {
      if (!input[props.question.id].value) {
        dispatch(submitSliceAction.alert({ type: "START" }));
        return;
      }
      dispatch(submitSliceAction.alert({ type: "END" }));
    }
    if (goToEnd) {
      props.setCurrentQuestion(props.numberOfQuestion);
    } else {
      props.setCurrentQuestion((previous) => {
        return (previous + 1) % (props.numberOfQuestion + 1);
      });
    }
  };
  const alertClose = () => {
    dispatch(submitSliceAction.alert({ type: "END" }));
  };
  return (
    <Fragment>
      <h2 className={styles.h2}>{props.question.question_text}</h2>
      {props.isFirst && !isSubmitted && (
        <label className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            onChange={(e) => {
              setGoToEnd((previous) => {
                return !previous;
              });
            }}
          ></input>
          Go to Submission Page
        </label>
      )}
      {choices}
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
      {props.question.required === 1 ? <h6>REQUIRED</h6> : ""}
      {alert && (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>This field is compoulsary</strong>
          <button
            onClick={alertClose}
            type="button"
            class="close"
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

export default TypeOne;
