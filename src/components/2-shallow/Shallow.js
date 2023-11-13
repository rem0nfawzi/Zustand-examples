import React, { useEffect, useState } from "react";
import useShallowStore from "../../stores/useShallowStore";
import { useShallow } from "zustand/react/shallow";

const Shallow = () => {
  const user = useShallowStore(state => state.user);
  //   const user = useShallowStore(useShallow(state => state.user));

  const setUser = useShallowStore(state => state.setUser);

  const [renders, setRenders] = useState(1);
  useEffect(() => {
    setRenders(prev => prev + 1);
  }, [user]);
  return (
    <>
      <h1>USER = {user.name}</h1>
      <button onClick={() => setUser({ name: "A" })}>A</button>
      <button onClick={() => setUser({ name: "B" })}>B</button>
      <p>{renders}</p>
    </>
  );
};

export default Shallow;
