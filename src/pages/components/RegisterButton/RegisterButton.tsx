import { useNavigate } from "react-router-dom";
import styles from "./RegisterButton.module.scss";

export default function RegisterButton() {
    const navigate = useNavigate();

    return (
        <div className={styles.registerButton} onClick={() => navigate("/registration")}>
            <img
                className={styles.registerIcon}
                src="/img/landing/reg_portal.png"
                alt="Register Image"
            />
            <div className={styles.registerText}>Register</div>
        </div>
    );
}
