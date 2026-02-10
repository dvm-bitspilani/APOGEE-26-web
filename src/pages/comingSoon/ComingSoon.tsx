import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./comingSoon.module.scss";

export default function ComingSoon() {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Expand box height (matching the modal's blueprint border animation)
    tl.fromTo(
      boxRef.current,
      { height: "0%", opacity: 0 },
      { height: "80%", opacity: 1, duration: 0.6 },
    );

    // Fade in title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2",
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box} ref={boxRef}>
        <h1 className={styles.title} ref={titleRef}>
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
