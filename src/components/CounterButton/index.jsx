const CounterButton = ({ counter, increaseCounter }) => {
  return (
    <>
      <button onClick={increaseCounter}>Increase</button>
      <p>{`Counter: ${counter}`}</p>
    </>
  );
};

export default CounterButton;
