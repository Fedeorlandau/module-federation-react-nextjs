import create from "zustand";
import { persist } from "zustand/middleware";

const useAppShell = create(
  persist(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) => set((state) => ({ score: state.score + amount })),
    }),
    {
      name: "app-shell",
    }
  )
);

export default useAppShell;
