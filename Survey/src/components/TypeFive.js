import React, { Fragment, useEffect, useState } from "react";
import inputSliceAction from "../store/slices/input";
import submitSliceAction from "../store/slices/submit";
import { useSelector, useDispatch } from "react-redux";
import NavigationButtons from "./UI/NavigationButtons.js";
import styles from "./TypeFive.module.css";
function TypeFive(props) {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.typeFive);
  const { filename } = input[props.question.id];
  const isSubmitted = useSelector((state) => state.submit.submitted);
  const clickHandler = () => {
    if (props.question.required) {
      if (!filename) {
        dispatch(submitSliceAction.alert({ type: "START" }));
        return;
      }
    }
    props.setCurrentQuestion((previous) => {
      return (previous + 1) % (props.numberOfQuestion + 1);
    });
  };
  return (
    <Fragment>
      <h2 className={styles.h2}>{props.question.question_text}</h2>
      <div
        className={styles.input}
        onClick={() => document.querySelector(".input").click()}
      >
        <span> {filename ? `File Name : ${filename}` : "UPLOAD"}</span>
      </div>
      {filename && !isSubmitted && (
        <button
          className={styles.removeButton}
          onClick={() => {
            dispatch(
              inputSliceAction.input({
                type: "FIVE",
                id: props.question.id,
                filename: null,
                url: null,
              })
            );
          }}
        >
          {" "}
          REMOVE{" "}
        </button>
      )}
      <input
        className={"input"}
        hidden
        onChange={(e) => {
          dispatch(
            inputSliceAction.input({
              type: "FIVE",
              id: props.question.id,
              filename: e.target.files[0].name,
              url: URL.createObjectURL(e.target.files[0]),
            })
          );
        }}
        type="file"
        accept=".jpg, .png, .jpeg, .pdf, .docx"
        name={props.question.id}
        value={input[props.question.id].value}
      ></input>
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
        clickHandler={clickHandler}
      ></NavigationButtons>
    </Fragment>
  );
}

export default TypeFive;
