import { useEffect, useRef, useState } from "react";
import styles from "./ContactUs.module.scss";
import costaans from "./costaan";
import Card from "./UI/Card";
import bg from "/img/contacts/bg.png";

export default function ContactUs({containerRef}: {containerRef?: React.RefObject<HTMLDivElement | null>}) {
  const [width, setwidth] = useState(window.innerWidth < 550 ? true : false);
  const scrollerRef = useRef<HTMLDivElement>(null);
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
    <div className={styles.container} ref={containerRef}>
      <img src={bg} alt="bg" className={styles.bgImg} />
      <p className={styles.title}>Contact Us</p>
      <div className={styles.cards} ref={scrollerRef}>
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
