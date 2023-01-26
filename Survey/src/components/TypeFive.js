import React, { Fragment, useEffect, useState } from "react";
import inputSliceAction from "../store/slices/input";
import { useSelector, useDispatch } from "react-redux";
import NavigationButtons from "./UI/NavigationButtons.js";
function TypeFive(props) {
  const dispatch = useDispatch();
  // const [input, setInput] = useState([]);
  const input = useSelector((state) => state.input.typeFive);
  const { filename, url } = input[props.question.id];
  // console.log("key", key);
  return (
    <Fragment>
      {props.keyCopy === props.currentQuestion ? (
        <Fragment>
          <h2>{props.question.question_text}</h2>
          <div onClick={() => document.querySelector(".input").click()}>
            <h3> File Name : {filename ? filename : "ADD a file"}</h3>
            <h4> File Path : {url ? url : "URL not found"}</h4>
          </div>
          {filename && (
            <button
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
              console.log(e.target.files);
              dispatch(
                inputSliceAction.input({
                  type: "FIVE",
                  id: props.question.id,
                  filename: e.target.files[0].name,
                  url: URL.createObjectURL(e.target.files[0]),
                })
              );
              // setInput(e.target.files[0]);
              // console.log(e.target.files[0]);
            }}
            type="file"
            name={props.question.id}
            value={input[props.question.id].value}
          ></input>
          <NavigationButtons
            setCurrentQuestion={props.setCurrentQuestion}
            numberOfQuestion={props.numberOfQuestion}
          ></NavigationButtons>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}

export default TypeFive;
