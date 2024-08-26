import React, { useContext } from "react";
import "./../styles/App.css";
import Counter from "./Counter";
import { CounterContext } from "../context/CounterContex";

const App = () => {
  const counterState = useContext(CounterContext);

  console.log(counterState);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Count is {counterState.count}</h1>
      <Counter />
    </div>
  );
};

export default App;
