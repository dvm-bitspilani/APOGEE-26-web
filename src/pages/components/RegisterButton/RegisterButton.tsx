import { useNavigate } from "react-router-dom";
import styles from "./RegisterButton.module.scss";
import { useHamburgerStore } from "../../../utils/store";

export default function RegisterButton() {
    const navigate = useNavigate();
    const manualHidden = useHamburgerStore((s) => s.manualHidden);
    return (
        <div className={styles.registerButton} onClick={() => navigate("/registration")} style={{
        opacity: manualHidden ? 0 : 1,
        pointerEvents: manualHidden ? "none" : "auto",
        transition: "opacity 0.3s ease",
      }}>
            <img
                className={styles.registerIcon}
                src="/img/landing/reg_btn.png"
                alt="Register Image"
            />
            {/* <div className={styles.registerText}>Register</div> */}
        </div>
    );
}
