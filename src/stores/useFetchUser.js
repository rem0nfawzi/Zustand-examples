import { create } from "zustand";

const useFetchUser = create((set, get) => ({
  user: null,
  somethingHasChanged: false,
  fetchUser: async () => {
    const user = await fetch("/api/user");
    if (!get().somethingHasChanged) set({ user });
  },
  changeSomething: () => set({ somethingHasChanged: true }),
}));

// Getting non reactive value
const nonReactiveValue = useFetchUser.getState().user;

export default useFetchUser;
