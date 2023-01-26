import React, { Fragment, useRef } from "react";
import NavigationButtons from "./UI/NavigationButtons.js";
import { useSelector, useDispatch } from "react-redux";
import inputSliceAction from "../store/slices/input";
import styles from "./TypeThree.module.css";
function TypeThree(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeThree);
  const inputRef = useRef();
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
  return (
    <Fragment>
      <h2 className={styles.h2}>{props.question.question_text}</h2>
      {choices}
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeThree;
