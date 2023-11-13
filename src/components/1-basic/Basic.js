import React from "react";
import useCountStore from "../../stores/useCountStore";

const Basic = () => {
  const counter = useCountStore(state => state.counter);
  const increment = useCountStore(state => state.increment);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Basic;
