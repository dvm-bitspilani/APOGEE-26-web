import { create } from "zustand";

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
  dob: string;
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

  userData: { name: "", email: "", phone: "9999999999", gender: "", dob: "", college: "", year: "", state: "", city: "" },
  setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),

  accessToken: "",
  setAccessToken: (token) => set({ accessToken: token }),
}));
