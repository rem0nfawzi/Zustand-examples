import React, { useEffect, useRef } from "react";
import useRefStore from "../../stores/userRefState";

const RefState = () => {
  const counterRef = useRef(useRefStore.getState().counter);
  const increment = useRefStore(state => state.increment);

  useEffect(() => {
    useRefStore.subscribe(
      state => state.counter,
      counter => {
        console.log("COUNTER", counter);
      }
    );
  }, []);
  return (
    <div>
      <p ref={counterRef}>NO COUNTER</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default RefState;
