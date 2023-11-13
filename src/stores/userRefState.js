import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const useRefStore = create(
  subscribeWithSelector(set => ({
    counter: 0,
    increment: () => set(state => ({ counter: state.counter + 1 })),
  }))
);

export default useRefStore;
