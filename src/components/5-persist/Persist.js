import React from "react";
import usePersistStore from "../../stores/userPersistStore";

const Persist = () => {
  const counter = usePersistStore(state => state.counter);
  const increment = usePersistStore(state => state.increment);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Persist;
