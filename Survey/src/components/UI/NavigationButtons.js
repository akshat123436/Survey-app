import React from "react";

function NavigationButtons(props) {
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
    <div>
      <button onClick={decrease}>PREVIOUS</button>
      {<button onClick={increase}>NEXT</button>}
    </div>
  );
}

export default NavigationButtons;
