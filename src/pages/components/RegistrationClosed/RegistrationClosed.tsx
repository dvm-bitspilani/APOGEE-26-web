import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { RegistrationContext, type OpenRegistration } from "../../../hooks/registrationContext";
import styles from "./RegistrationClosed.module.scss";

export function RegistrationClosedDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const element = dialog.current!;
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);
  return <dialog ref={dialog} className={styles.dialog} aria-labelledby="registration-closed-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) onClose();
    }}>
    <h2 id="registration-closed-title">Registration is closed for this edition</h2>
    <button type="button" autoFocus onClick={onClose}>Close</button>
  </dialog>;
}

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const closeAction = useRef<(() => void) | null>(null);
  const openRegistration = useCallback<OpenRegistration>(onClose => {
    closeAction.current = typeof onClose === "function" ? onClose as () => void : null;
    setOpen(true);
  }, []);
  const closeRegistration = useCallback(() => {
    setOpen(false);
    closeAction.current?.();
    closeAction.current = null;
  }, []);
  return <RegistrationContext.Provider value={openRegistration}>
    {children}
    {open && <RegistrationClosedDialog onClose={closeRegistration} />}
  </RegistrationContext.Provider>;
}
