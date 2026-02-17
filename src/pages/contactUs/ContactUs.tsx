import { useEffect, useState } from "react";
import styles from "./ContactUs.module.scss";
import costaans from "./costaan";
import Card from "./UI/Card";
import bg from "/img/contacts/bg.png";

export default function ContactUs() {
  const [width, setwidth] = useState(window.innerWidth < 550 ? true : false);
  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 550) {
        setwidth(true);
      } else {
        setwidth(false);
      }
      return () => {
        removeEventListener("resize", () => {});
      };
    });
  }, []);
  return (
    <div className={`${styles.modalOverlay} ${styles.showModal}`}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.container}>
            <img src={bg} alt="bg" className={styles.bgImg} />
            <p className={styles.title}>Contact Us</p>
            <div className={styles.cards}>
              {costaans.map((costaan, i) => (
                <Card
                  key={i}
                  contact={costaan}
                  classname={
                    i == (width ? 8 : 5) ? styles.gridBox2 : styles.gridBox
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.backgroundlite} />
      </div>
    </div>
  );
}
