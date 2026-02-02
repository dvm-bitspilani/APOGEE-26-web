import { create } from "zustand";

type IntroState = {
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
};

export const useIntroStore = create<IntroState>((set) => ({
  introDone: false,
  setIntroDone: (done) => set({ introDone: done }),
}));

type CameraPhase = "intro" | "free" | "return" | "scroll";


export const useCameraPhase = create<{
  phase: CameraPhase;
  setPhase: (p: CameraPhase) => void;
}>((set) => ({
  phase: "scroll",
  setPhase: (p) => set({ phase: p }),
}));