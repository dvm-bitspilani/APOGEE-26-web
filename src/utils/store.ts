import { create } from "zustand";
import * as THREE from "three";
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

type CityPhase = "Landing" | "AboutStart" | "AboutFinished" | "ContactStart" | "ContactFinished";


export const useCityPhase = create<{
  phase: CityPhase;
  setPhase: (p: CityPhase) => void;
}>((set) => ({
  phase: "Landing",
  setPhase: (p) => set({ phase: p }),
}));

type CityStore = {
  city: THREE.Group | null
  setCity: (city: THREE.Group) => void
}

export const useCityStore = create<CityStore>((set) => ({
  city: null,
  setCity: (city) => set({ city }),
}))