import "./App.css";

import React, { useState, useEffect, Fragment } from "react";
import TypeOne from "./components/TypeOne.js";
import TypeTwo from "./components/TypeTwo.js";
import TypeThree from "./components/TypeThree.js";
import TypeFour from "./components/TypeFour.js";
import TypeFive from "./components/TypeFive.js";
import Header from "./components/layout/Header.js";
import QuestionContainer from "./components/question/QuestionContainer.js";
import Loader from "./components/UI/Loader.js";
import SubmitPage from "./components/submit/SubmitPage.js";
import Responses from "./components/submit/Responses.js";
import { useDispatch, useSelector } from "react-redux";
import inputSliceActions from "./store/slices/input";
const givenData = {
  setting: {
    title: "Intern Application Form",
    favicon: "",
  },
  questions: [
    {
      id: 90,
      question_text: "Your Email ?",
      question_type: 4,
      required: 1,
    },
    {
      id: 91,
      question_text: "Your Age ?",
      question_type: 4,
      required: 0,
    },
    {
      id: 92,
      question_text: "Your Gender ?",
      question_type: 1,
      required: 1,
      choices: [
        {
          id: 777,
          choice_text: "Male",
        },
        {
          id: 778,
          choice_text: "Female",
        },
        {
          id: 779,
          choice_text: "Other",
        },
      ],
    },
    {
      id: 93,
      question_text: "Your prefered job location ?",
      question_type: 1,
      required: 0,
      choices: [
        {
          id: 780,
          choice_text: "Work from home",
        },
        {
          id: 781,
          choice_text: "Work in office",
        },
        {
          id: 782,
          choice_text: "work in hybrid way",
        },
      ],
    },
    {
      id: 94,
      question_text: "Your Salary expectation (CTC in rupees)?",
      question_type: 2,
      required: 1,
      choices: [
        {
          id: 783,
          choice_text: "2-3 lakh",
        },
        {
          id: 784,
          choice_text: "4-5 lakh",
        },
        {
          id: 785,
          choice_text: "5-6 lakh",
        },
        {
          id: 786,
          choice_text: "6-7 lakh",
        },
      ],
    },
    {
      id: 95,
      question_text: "Your Educational Qualification ?",
      question_type: 2,
      required: 0,
      choices: [
        {
          id: 787,
          choice_text: "Illiterate",
        },
        {
          id: 788,
          choice_text: "Below 10th standard",
        },
        {
          id: 789,
          choice_text: "10th passed",
        },
        {
          id: 790,
          choice_text: "12th passed",
        },
        {
          id: 791,
          choice_text: "Undergraduate",
        },
        {
          id: 792,
          choice_text: "Postgraduate",
        },
      ],
    },
    {
      id: 96,
      question_text: "Your Skills",
      question_type: 3,
      required: 1,
      choices: [
        {
          id: 793,
          choice_text: "Node.js",
        },
        {
          id: 794,
          choice_text: "ReactJS",
        },
        {
          id: 795,
          choice_text: "Mongodb",
        },
        {
          id: 796,
          choice_text: "Express",
        },
      ],
    },
    {
      id: 97,
      question_text: "Your Extra Activities",
      question_type: 3,
      required: 0,
      choices: [
        {
          id: 797,
          choice_text: "Cricket",
        },
        {
          id: 798,
          choice_text: "Football",
        },
        {
          id: 799,
          choice_text: "Tenis",
        },
        {
          id: 800,
          choice_text: "Badminton",
        },
      ],
    },
    {
      id: 98,
      question_text: "Your Photo",
      question_type: 5,
      required: 1,
    },
    {
      id: 99,
      question_text: "Your CV in pdf",
      question_type: 5,
      required: 0,
    },
  ],
};

function App() {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionText, setquestionText] = useState([]);
  const numberOfQuestion = givenData.questions.length;
  let isFirst = true;
  const { loading, submitted } = useSelector((state) => state.submit);
  useEffect(() => {
    console.log("app use effect");
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
            value: "none",
          })
        );
        count++;
        console.log(isFirst);
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
            value: "none",
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
          inputSliceActions.input({ type: "FOUR", id: question.id, value: "" })
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
