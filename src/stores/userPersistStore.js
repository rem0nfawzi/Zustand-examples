import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePersistStore = create(
  persist(
    set => ({
      counter: 0,
      increment: () => set(state => ({ counter: state.counter + 1 })),
    }),
    {
      name: "counter",
    }
  )
);

export default usePersistStore;
