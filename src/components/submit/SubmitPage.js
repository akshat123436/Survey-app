import React from "react";
import submitAction from "../../store/slices/submit.js";
import styles from "./SubmitPage.module.css";
import QestionContainer from "../question/QuestionContainer";
import { useDispatch, useSelector } from "react-redux";
import givenData from "../../data";
function SubmitPage(props) {
  const dispatch = useDispatch();
  const inputOne = useSelector((state) => state.input.typeOne);
  const inputTwo = useSelector((state) => state.input.typeTwo);
  const inputThree = useSelector((state) => state.input.typeThree);
  const inputFour = useSelector((state) => {
    return state.input.typeFour;
  });
  const inputFive = useSelector((state) => state.input.typeFive);
  const onClickHandler = () => {
    for (let i in givenData.questions) {
      i = parseInt(i);
      console.log(givenData.questions[i]);
      if (givenData.questions[i].required) {
        if (givenData.questions[i].question_type === 1) {
          if (!inputOne[givenData.questions[i].id].value) {
            dispatch(submitAction.alert({ type: "START" }));
            props.setCurrentQuestion(i);
            return;
          }
        }
        if (givenData.questions[i].question_type === 2) {
          if (!inputTwo[givenData.questions[i].id].value) {
            dispatch(submitAction.alert({ type: "START" }));
            props.setCurrentQuestion(i);
            return;
          }
        }
        if (givenData.questions[i].question_type === 3) {
          if (givenData.questions[i].required) {
            let found = false;
            for (let choice of givenData.questions[i].choices) {
              if (inputThree[givenData.questions[i].id][choice.id]) {
                found = true;
                break;
              }
            }
            if (!found) {
              dispatch(submitAction.alert({ type: "START" }));
              props.setCurrentQuestion(i);
              return;
            }
          }
        }
        if (givenData.questions[i].question_type === 4) {
          if (!inputFour[givenData.questions[i].id].value) {
            dispatch(submitAction.alert({ type: "START" }));
            props.setCurrentQuestion(i);
            return;
          }
        }
        if (givenData.questions[i].question_type === 5) {
          const { filename } = inputFive[givenData.questions[i].id];
          if (!filename) {
            dispatch(submitAction.alert({ type: "START" }));
            props.setCurrentQuestion(i);
            return;
          }
        }
      }
    }
    dispatch(submitAction.submit());
    // dispatch(submitAction.loader({ type: "END" }));
  };
  const previous = () => {
    props.setCurrentQuestion((previousState) => previousState - 1);
  };
  return (
    <QestionContainer>
      <h4 className={styles.h4}>DO YOU WANT TO SUBMIT THE FORM ?</h4>
      <button className={styles.button} onClick={onClickHandler}>
        SUBMIT
      </button>
      <button className={styles.button} onClick={previous}>
        GO BACK
      </button>
    </QestionContainer>
  );
}

export default SubmitPage;
