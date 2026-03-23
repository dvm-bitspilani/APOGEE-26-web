import { useEffect, useRef, useState } from "react";
import styles from "./ContactUs.module.scss";
import costaans from "./costaan";
import Card from "./UI/Card";
import bg from "/img/contacts/bg.png";

export default function ContactUs() {
  const [width, setwidth] = useState(window.innerWidth < 550 ? true : false);
  const containerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (scrollerRef.current?.scrollTop === 0 && e.deltaY < 0 ||
        (scrollerRef.current?.scrollHeight === (scrollerRef.current?.scrollTop || 0) + (scrollerRef.current?.clientHeight || 0) && e.deltaY > 0)) {
        containerRef.current?.style.setProperty("pointer-events", "none");
      }
      else {
        containerRef.current?.style.setProperty("pointer-events", "all");
      }
    }

    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [])
  
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
