import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrement] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function upIncrementBy() {
    setIncrement(incrementBy + 1);
  }

  function dwnIncrementBy() {
    setIncrement(incrementBy - 1);
  }
  return (
    <div>
      <h1>Counter is : {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing by {incrementBy}</h1>
      <button onClick={upIncrementBy}>Increase Increment</button>
      <button onClick={dwnIncrementBy}>Decrease Decrement</button>
    </div>
  );
}
