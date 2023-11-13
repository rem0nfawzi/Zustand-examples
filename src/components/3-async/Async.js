import React from "react";
import useFetchUser from "../../stores/useFetchUser";

const Async = () => {
  const fetchUser = useFetchUser(state => state.fetchUser);
  return <button onClick={fetchUser}>Fetch user</button>;
};

export default Async;
