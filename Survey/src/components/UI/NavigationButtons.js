import React from "react";

function NavigationButtons(props) {
  const increase = () => {
    if (props.clickHandler) props.clickHandler();
    props.setCurrentQuestion((previous) => {
      // console.log(previous);
      return (previous + 1) % (props.numberOfQuestion + 1);
    });
  };
  const decrease = () => {
    props.setCurrentQuestion(
      (previous) => (previous - 1) % (props.numberOfQuestion + 1)
    );
  };
  return (
    <div>
      <button onClick={decrease}>PREVIOUS</button>
      <button onClick={increase}>NEXT</button>
    </div>
  );
}

export default NavigationButtons;
