import { create } from "zustand";

type IntroState = {
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
};

export const useIntroStore = create<IntroState>((set) => ({
  introDone: false,
  setIntroDone: (done) => set({ introDone: done }),
}));
