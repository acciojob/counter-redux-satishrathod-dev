import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <span>
        <button
          id="increment-button"
          onClick={() => counterContext.setCount(counterContext.count + 1)}
        >
          Increment
        </button>
      </span>
      <span>
        <button
          id="decrement-button"
          onClick={() => counterContext.setCount(counterContext.count - 1)}
        >
          decrease
        </button>
      </span>
    </div>
  );
};

export default Counter;
