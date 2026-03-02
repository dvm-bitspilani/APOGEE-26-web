import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.scss";
import { useEffect, useState } from "react";

export default function Error404() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "COMING SOON...";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.icon}>&#x26A0;</span> CONNECTION LOST //
          SECTOR 404
        </div>

        <h1 className={styles.title} data-text="404">
          404
        </h1>

        <div className={styles.terminal}>
          <span className={styles.terminalText}>{typedText}</span>
          <span className={styles.cursor}></span>
        </div>

        {/* <p className={styles.description}>
          The requested data stream has been interrupted. The
          <br />
          grid location you are attempting to access does not exist
          <br />
          in this sector.
        </p> */}

        <button className={styles.rebootButton} onClick={() => navigate("/")}>
          <span className={styles.powerIcon}>&#x23FB;</span> REBOOT TO HOME
        </button>

        <div className={styles.errorCode}>ERROR CODE: AP2026_UNREACHABLE</div>
      </div>
    </div>
  );
}
