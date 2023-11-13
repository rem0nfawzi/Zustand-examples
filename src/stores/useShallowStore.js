import { create } from "zustand";

const useShallowStore = create(set => ({
  user: {
    name: "A",
  },
  setUser: newUser => set({ user: newUser }),
}));

export default useShallowStore;
