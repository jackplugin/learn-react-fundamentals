import { useState } from "react";
export default function ComponentUsingState() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <h1>Using State - useState hook</h1>
      <h2>the current count: {count}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>–</button>
      </div>
    </div>
  );
}
