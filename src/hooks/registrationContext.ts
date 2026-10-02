import { createContext, useContext } from "react";

export type OpenRegistration = (onClose?: (() => void) | unknown) => void;
export const RegistrationContext = createContext<OpenRegistration>(() => {});
export const useRegistrationClosed = () => useContext(RegistrationContext);
