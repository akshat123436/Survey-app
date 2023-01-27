import "./App.css";

import React, { useState, useEffect, Fragment } from "react";
import TypeOne from "./components/TypeOne.js";
import TypeTwo from "./components/TypeTwo.js";
import TypeThree from "./components/TypeThree.js";
import TypeFour from "./components/TypeFour.js";
import TypeFive from "./components/TypeFive.js";
import QuestionContainer from "./components/question/QuestionContainer.js";
import Loader from "./components/UI/Loader.js";
import SubmitPage from "./components/submit/SubmitPage.js";
import { transitions, positions } from "react-alert";
import Responses from "./components/submit/Responses.js";
import { useDispatch, useSelector } from "react-redux";
import inputSliceActions from "./store/slices/input";
import submitSliceAction from "./store/slices/submit";
import givenData from "./data";
import { useAlert } from "react-alert";
function App() {
  const showAlert = useAlert();
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionText, setquestionText] = useState([]);
  const numberOfQuestion = givenData.questions.length;
  let isFirst = true;
  const { loading, submitted, alert } = useSelector((state) => state.submit);
  const state = useSelector((state) => state);
  useEffect(() => {
    let i = 0;
    let count = 1;
    const initialState = givenData.questions.map((question) => {
      i++;
      if (question.question_type === 1) {
        if (count > 1) isFirst = false;
        dispatch(
          inputSliceActions.input({
            type: "ONE",
            id: question.id,
            value: "",
          })
        );
        count++;
        return (
          <TypeOne
            isFirst={isFirst}
            key={i}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            numberOfQuestion={numberOfQuestion}
          ></TypeOne>
        );
      } else if (question.question_type === 2) {
        dispatch(
          inputSliceActions.input({
            type: "TWO",
            id: question.id,
            value: "",
          })
        );
        return (
          <TypeTwo
            key={i}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            numberOfQuestion={numberOfQuestion}
          ></TypeTwo>
        );
      } else if (question.question_type === 3) {
        dispatch(
          inputSliceActions.input({
            type: "THREE_INITIAL",
            id: question.id,
            choices: question.choices,
          })
        );
        return (
          <TypeThree
            question={question}
            key={i}
            setCurrentQuestion={setCurrentQuestion}
            numberOfQuestion={numberOfQuestion}
          ></TypeThree>
        );
      } else if (question.question_type === 4) {
        dispatch(
          inputSliceActions.input({
            type: "FOUR",
            id: question.id,
            value: "",
          })
        );
        return (
          <TypeFour
            key={i}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            numberOfQuestion={numberOfQuestion}
          ></TypeFour>
        );
      }
      dispatch(
        inputSliceActions.input({ type: "FIVE", id: question.id, value: "" })
      );

      return (
        <TypeFive
          question={question}
          key={i}
          setCurrentQuestion={setCurrentQuestion}
          numberOfQuestion={numberOfQuestion}
        ></TypeFive>
      );
    });
    setquestionText(initialState);
  }, []);
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: "30px",
    transition: transitions.SCALE,
    onOpen: () => {
      console.log(state);
    },
    onClose: () => {
      console.log("closed");
      dispatch(submitSliceAction.alert({ type: "END" }));
    },
  };
  const alertMessage = () => {
    showAlert.error("This field is compoulsary", { ...options });
  };

  alert && alertMessage();

  return (
    <div className="App">
      {loading ? (
        <Loader></Loader>
      ) : (
        <Fragment>
          {submitted ? (
            <Responses questions={questionText}></Responses>
          ) : (
            <Fragment>
              {currentQuestion === numberOfQuestion ? (
                <SubmitPage
                  setCurrentQuestion={setCurrentQuestion}
                  numberOfQuestion={numberOfQuestion}
                ></SubmitPage>
              ) : (
                <QuestionContainer>
                  {questionText[currentQuestion]}
                </QuestionContainer>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default App;
