import * as THREE from "three";
import { create } from "zustand";
import Modal from '../pages/city/components/Modal/Modal';
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

type PivotStore = {
  pivot: THREE.Group | null
  setPivot: (pivot: THREE.Group) => void
}
export const usePivotStore = create<PivotStore>((set) => ({
  pivot: null,
  setPivot: (pivot) => set({ pivot }),
}))

type InfernusStore = {
  infernus: THREE.Group | null
  setInfernus: (infernus: THREE.Group) => void
}

export const useInfernusStore = create<InfernusStore>((set) => ({
  infernus: null,
  setInfernus: (infernus) => set({ infernus }),
}))

type TheatreCameraStore = {
  theatreCamera: THREE.PerspectiveCamera | null,
  setTheatreCamera: (theatreCamera: THREE.PerspectiveCamera) => void
}

export const useTheatreCameraStore = create<TheatreCameraStore>((set) => ({
  theatreCamera: null,
  setTheatreCamera: (camera) => set({ theatreCamera: camera }),
}))

export type Section = ["home", "about", "contact", "transition"][number];

type CurrentSectionStore = {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export const useCurrentSectionStore = create<CurrentSectionStore>((set) => ({
  currentSection: "home",
  setCurrentSection: (section: Section) => set({ currentSection: section }),
}));

type ScrollLockStore = {
  locked: boolean;
  lock: () => void;
  unlock: () => void;
}

export const useScrollLockStore = create<ScrollLockStore>((set) => ({
  locked: false,
  lock: () => set({ locked: true }),
  unlock: () => set({ locked: false }),
}));

type Modal = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<Modal>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export interface Event {
  id: number;
  name: string;
  description: string;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  college: string;
  year: string;
  state: string;
  city: string;
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

  // Access Token
  accessToken: string;
  setAccessToken: (token: string) => void;
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

  userData: { name: "", email: "", phone: "", gender: "", college: "", year: "", state: "", city: "" },
  setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),

  accessToken: "",
  setAccessToken: (token) => set({ accessToken: token }),
}));

type SceneLoadedStore = {
  loaded: boolean;
  progress: number;
  setLoaded: (loaded: boolean) => void;
  setProgress: (progress: number) => void;
};

export const useSceneLoadedStore = create<SceneLoadedStore>((set) => ({
  loaded: false,
  progress: 0,
  setLoaded: (loaded) => set({ loaded }),
  setProgress: (progress) => set({ progress }),
}));
