import React from "react";
import NavigationButtons from "../UI/NavigationButtons";
import submitAction from "../../store/slices/submit.js";
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
    <div>
      SubmitPage
      <button onClick={onClickHandler}>SUBMIT</button>
      <button onClick={previous}>GO BACK</button>
    </div>
  );
}

export default SubmitPage;
