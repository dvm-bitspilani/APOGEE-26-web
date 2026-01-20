import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";

function Registration() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src="/svg/registrations/back-button.svg" alt="Back" />
      </button>
      <div className={styles.leftPanel}>
        <img
          src="/img/registrations/apogee-text-banner.png"
          alt="APOGEE 2026"
          className={styles.bannerText}
        />
        <img
          src="/img/registrations/robot-face.png"
          alt="Mascot"
          className={styles.robotFace}
        />
      </div>
      <div className={styles.rightPanel}>
        <img
          src="/img/registrations/instructions-right-panel.png"
          alt="Background"
          className={styles.backgroundImage}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Registration;
