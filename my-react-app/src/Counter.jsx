import React, { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);
  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const decrementNumber = () => {
    setNumber(number - 1);
  };
  const resetNumber = () => {
    setNumber(0);
  };
  return (
    <div id="container">
      <p>{number}</p>
      <button id="increment-number" onClick={incrementNumber}>
        Increment
      </button>
      <button id="reset-number" onClick={resetNumber}>
        Reset
      </button>
      <button id="decrement-number" onClick={decrementNumber}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;
