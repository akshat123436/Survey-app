import React, { Fragment, useEffect, useState } from "react";

import NavigationButtons from "./UI/NavigationButtons.js";
function TypeFive(props) {
  const [input, setInput] = useState([]);
  const clickHandler = () => {
    console.log(input);
  };
  // console.log("key", key);
  return (
    <Fragment>
      {props.keyCopy === props.currentQuestion ? (
        <Fragment>
          <h2>{props.question.question_text}</h2>
          <input
            onChange={(e) => {
              setInput(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
            type="file"
            name={props.question.id}
            // value={input}
          ></input>
          <NavigationButtons
            setCurrentQuestion={props.setCurrentQuestion}
            numberOfQuestion={props.numberOfQuestion}
            clickHandler={clickHandler}
          ></NavigationButtons>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}

export default TypeFive;
