import React, { Fragment } from "react";
import { useSelector } from "react-redux";
function NavigationButtons(props) {
  const submitted = useSelector((state) => state.submit.submitted);
  const increase = () => {
    if (props.clickHandler) props.clickHandler();
    else
      props.setCurrentQuestion((previous) => {
        // console.log(previous);
        return (previous + 1) % (props.numberOfQuestion + 1);
      });
  };
  const decrease = () => {
    props.setCurrentQuestion((previous) => {
      if (previous >= 1) return (previous - 1) % (props.numberOfQuestion + 1);
      else return previous;
    });
  };
  return (
    <Fragment>
      {submitted ? (
        <Fragment></Fragment>
      ) : (
        <div>
          <button onClick={decrease}>PREVIOUS</button>
          {<button onClick={increase}>NEXT</button>}
        </div>
      )}
    </Fragment>
  );
}

export default NavigationButtons;
