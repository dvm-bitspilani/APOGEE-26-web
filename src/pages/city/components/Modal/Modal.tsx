import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useCurrentSectionStore, useModalStore } from "../../../../utils/store";
import ComingSoon from "../../../comingSoon/ComingSoon";
import styles from "./Modal.module.scss";

export default function Modal({ children }: { children?: React.ReactNode }) {
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  const currentsection = useCurrentSectionStore((s) => s.currentSection);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Build and play the opening timeline on mount, reverse on isModalOpen=false
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // 1. Fade in overlay
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
    );

    // 2. Scale up modal container
    tl.fromTo(
      modalRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 },
      "<0.1",
    );

    // 3. Expand the blueprint border
    tl.fromTo(
      backgroundRef.current,
      { height: "0%" },
      { height: "81%", duration: 0.6 },
      "<0.15",
    );

    // 4. Fade in content
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2",
    );
  }, []);

  return (
    <div
      className={`${styles.modalOverlay} ${isModalOpen ? styles.visible : ""}`}
      ref={overlayRef}
    >
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.content} ref={contentRef}>
          {currentsection === "about" ? (
            <ComingSoon />
          ) : currentsection === "contact" ? (
            <ComingSoon />
          ) : (
            children
          )}
        </div>
        <div className={styles.backgroundlite} ref={backgroundRef} />
      </div>
    </div>
  );
}
