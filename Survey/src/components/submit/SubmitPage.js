import React from "react";
import NavigationButtons from "../UI/NavigationButtons";
function SubmitPage(props) {
  return (
    <div>
      SubmitPage
      <NavigationButtons
        setCurrentQuestion={props.setCurrentQuestion}
        numberOfQuestion={props.numberOfQuestion}
      ></NavigationButtons>
    </div>
  );
}

export default SubmitPage;
