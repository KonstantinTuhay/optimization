import React from "react";

const CounterButton = React.memo(({ counter, increaseCounter }) => {
  console.log("CounterButton");

  return (
    <>
      <button onClick={increaseCounter}>Increase</button>
      <p>{`Counter: ${counter}`}</p>
    </>
  );
});

CounterButton.displayName = "CounterButton";

export default CounterButton;
