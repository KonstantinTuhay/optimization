import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";
import { useCallback, useState, useMemo } from "react";

function App() {
  const [names, setNames] = useState(["Alex", "Max", "Sasha", "Dima"]);

  console.log("App");

  const [strState, setStrState] = useState("");
  const [counter, setCounter] = useState(0);

  const callbackFuncStr = useCallback((value) => {
    setStrState(value);
  }, []);

  const increaseCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  // const names = useMemo(() => ["Alex", "Max", "Sasha", "Dima"], []);

  return (
    <>
      <SearchInput strState={strState} callbackFuncStr={callbackFuncStr} />
      <CounterButton counter={counter} increaseCounter={increaseCounter} />
      <ItemList names={names} strState={strState} />
    </>
  );
}

export default App;
