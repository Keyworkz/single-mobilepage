import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);
  console.log(useState(0));
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
