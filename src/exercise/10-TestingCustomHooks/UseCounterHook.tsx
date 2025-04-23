import React from "react";
import useCounter from "../sharedComponent/useCounter";  

function UseCounterHook() {
  const { count, increment, decrement } = useCounter();  

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseCounterHook;
