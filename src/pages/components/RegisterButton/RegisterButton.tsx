import { useNavigate } from "react-router-dom";
import styles from "./RegisterButton.module.scss";
import { useState, useEffect } from "react";
import NavButton from "../../registration/components/navButton/NavButton";

export default function RegisterButton() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile ? (
        <NavButton onClick={() => navigate("/registration")} outerClass={styles.confirmButton} innerClass={styles.confirmButtonContent}>Register</NavButton>
    ) : (
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
