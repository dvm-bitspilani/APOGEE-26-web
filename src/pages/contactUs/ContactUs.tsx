import { useEffect, useState } from "react";
import styles from "./ContactUs.module.scss";
import costaans from "./costaan";
import Card from "./UI/Card";
import bg from "/img/contacts/bg.webp";

export default function ContactUs({containerRef}: {containerRef?: React.RefObject<HTMLDivElement | null>}) {
  const [width, setwidth] = useState(window.innerWidth < 550 ? true : false);
  useEffect(() => {
    const update = () => setwidth(window.innerWidth < 550);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  
  return (
    <div className={styles.container}>
      <img src={bg} alt="bg" className={styles.bgImg} />
      <p className={styles.title}>Contact Us</p>
      <div className={styles.cards} ref={containerRef}>
        {costaans.map((costaan, i) => (
          <Card
            key={i}
            contact={costaan}
            classname={i == (width ? 8 : 5) ? styles.gridBox2 : styles.gridBox}
          />
        ))}
      </div>
    </div>
  );
}
