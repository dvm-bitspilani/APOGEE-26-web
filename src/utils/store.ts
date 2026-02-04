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

type PivotStore={
  pivot:THREE.Group | null
  setPivot:(pivot: THREE.Group) => void
}
export const usePivotStore = create<PivotStore>((set)=>({
  pivot:null,
  setPivot:(pivot) => set({pivot}),
}))

export interface Event {
  id: number;
  name: string;
  about: string;
}

interface UserData {
  name: string;
  email: string;
  // Add other fields as needed
}

interface RegistrationStore {
  // Registration Step State
  registrationStep: 'instructions' | 'details' | 'events';
  setRegistrationStep: (step: 'instructions' | 'details' | 'events') => void;

  // Events Data State
  events: Event[];
  setEvents: (events: Event[]) => void;

  // User Selection State
  selectedEvents: Event[];
  toggleEvent: (event: Event) => void;

  // Active Event for Left Panel
  activeEvent: Event | null;
  setActiveEvent: (event: Event | null) => void;

  // Sticky Event (Clicked/Frozen)
  stickyEvent: Event | null;
  setStickyEvent: (event: Event | null) => void;

  // User Data
  userData: UserData;
  setUserData: (data: Partial<UserData>) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  registrationStep: 'instructions',
  setRegistrationStep: (step) => set({ registrationStep: step }),

  events: [],
  setEvents: (events) => set({ events }),

  selectedEvents: [],
  toggleEvent: (event) => set((state) => {
    const exists = state.selectedEvents.some((e) => e.id === event.id);
    if (exists) {
      return { selectedEvents: state.selectedEvents.filter((e) => e.id !== event.id) };
    } else {
      return { selectedEvents: [...state.selectedEvents, event] };
    }
  }),

  activeEvent: null,
  setActiveEvent: (event) => set({ activeEvent: event }),

  stickyEvent: null,
  setStickyEvent: (event) => set({ stickyEvent: event }),

  userData: { name: "", email: "" },
  setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),
}));
