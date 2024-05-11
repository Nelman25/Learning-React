// updater function - a function passed as an argument to useState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    used with multiple state updates and asynchronous functions
//                    good practice to use updater functions



import React, { useState } from "react";
function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    
    //  Takes the PENDING state to calculate NEXT state.
    //  React puts your updater function in a queue (data structure).
    //  During the next render, it will call them in the same order.

    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default MyComponent;
