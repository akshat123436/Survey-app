import React, { Fragment } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import { useSelector, useDispatch } from "react-redux";
import inputSliceAction from "../store/slices/input";
import submitSliceAction from "../store/slices/submit";
import styles from "./TypeThree.module.css";
function TypeThree(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeThree);
  const choices = props.question.choices.map((choice) => (
    <Fragment key={choice.id}>
      <label className={styles.label} key={choice.id}>
        <input
          className={styles.input}
          type="checkbox"
          value={choice.id}
          id={choice.id}
          name={props.question.id}
          onChange={(e) => {
            dispatch(
              inputSliceAction.input({
                type: "THREE",
                id: props.question.id,
                value: choice.id,
              })
            );
          }}
          defaultChecked={input[props.question.id][choice.id] ? true : false}
        ></input>

        {choice.choice_text}
      </label>
    </Fragment>
  ));
  const clickHandler = () => {
    if (props.question.required) {
      for (let choice of props.question.choices) {
        if (input[props.question.id][choice.id]) {
          return props.setCurrentQuestion((previous) => {
            return (previous + 1) % (props.numberOfQuestion + 1);
          });
        }
      }
      dispatch(submitSliceAction.alert({ type: "START" }));
      return;
    }
    props.setCurrentQuestion((previous) => {
      return (previous + 1) % (props.numberOfQuestion + 1);
    });
  };
  return (
    <Fragment>
      <h2 className={styles.h2}>{props.question.question_text}</h2>
      {choices}
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
      {props.question.required === 1 ? <h6>REQUIRED</h6> : ""}
    </Fragment>
  );
}

export default TypeThree;
