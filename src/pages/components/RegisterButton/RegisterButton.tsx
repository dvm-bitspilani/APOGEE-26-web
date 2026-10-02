import { useRegistrationClosed } from "../../../hooks/registrationContext";
import styles from "./RegisterButton.module.scss";
import { useHamburgerStore } from "../../../utils/store";

export default function RegisterButton({ alwaysAvailable = false }: { alwaysAvailable?: boolean }) {
    const openRegistration = useRegistrationClosed();
    const manualHidden = useHamburgerStore((s) => s.manualHidden);
    const hidden = !alwaysAvailable && manualHidden;
    return (
        <button type="button" aria-label="Register" aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : 0} className={styles.registerButton} onClick={openRegistration} style={{
        background: "transparent", border: "none",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 0.3s ease",
      }}>
            <img
                className={styles.registerIcon}
                src="/img/landing/reg_btn22.webp"
                alt="Register Image"
            />
            {/* <div className={styles.registerText}>Register</div> */}
        </button>
    );
}
