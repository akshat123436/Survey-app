import React from "react";
import NavigationButtons from "../UI/NavigationButtons";
import submitAction from "../../store/slices/submit.js";
import styles from "./SubmitPage.module.css";
import QestionContainer from "../question/QuestionContainer";
import { useDispatch } from "react-redux";
function SubmitPage(props) {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(submitAction.loader({ type: "START" }));
    //some task
    dispatch(submitAction.submit());
    const temp = setTimeout(() => {
      dispatch(submitAction.loader({ type: "END" }));
    }, 1000);
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
