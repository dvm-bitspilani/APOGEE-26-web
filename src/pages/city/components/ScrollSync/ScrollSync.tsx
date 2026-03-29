import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";

import state from "../../state-stray.json";
import { useActiveSheetStore, useModalStore, useNavStateStore, usePreloaderStateStore, useScrollStore } from "../../../../utils/store";
import { type Section, useCurrentSectionStore } from "../../../../utils/store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// import { useLocation, useNavigate } from "react-router-dom";
export const project = getProject("City Project", { state });
export const scrollSheet = project.sheet("Cyber City");
export const introAnimSheet = project.sheet("Intro Sequence");

export const stopPoints: Record<Section, number> = {
  "home": 0,
  "about": 6,
  "contact": 13,
  "transition": -1,
}
export const maxSequenceLength = 13;

export default function ScrollSync() {
  const scroll = useScroll();
  const introOverRef = useRef<boolean>(false);
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  const showPreloader = usePreloaderStateStore((s) => s.showPreloader);
  const currentSection = useCurrentSectionStore((s) => s.currentSection);
  const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);
  const activeSheet = useActiveSheetStore((s) => s.activeSheet);
  const setActiveSheet = useActiveSheetStore((s) => s.setActiveSheet);
  const navState = useNavStateStore((s) => s.navState);
  const modalTriggerThrehold = 0.5;
  const setScroll = useScrollStore((s) => s.setScroll);

  const sequenceLength = activeSheet === "Intro Sequence" ? 0 : maxSequenceLength;

  useEffect(() => {
    setScroll(scroll);
  }, [scroll])

  useEffect(() => {
    scrollSheet.sequence.position = 0;
    introAnimSheet.sequence.play({ iterationCount: 1 }).then(() => {
      if (!showPreloader) {
        introOverRef.current = true;
        setActiveSheet("Cyber City");
      }
    });
    if (showPreloader) introAnimSheet.sequence.pause();
  }, [showPreloader])
  // Added to control front movement by up arrow and back mpovement by down arrow
  useEffect(() => {
    const scrollContainer = scroll.el;
    const scrollStep = 400;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen || showPreloader) return;

      if (event.key === "ArrowUp") {
        scrollContainer.scrollBy({
          top: scrollStep,
          behavior: "smooth",
        });
      } else if (event.key === "ArrowDown") {
        scrollContainer.scrollBy({
          top: -scrollStep,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scroll.el, isModalOpen, showPreloader]);

  useEffect(() => {
    console.log(currentSection,  stopPoints[currentSection] * scroll.el.scrollHeight / sequenceLength)
    if (scroll && isModalOpen) {
      gsap.set(scroll.el, { scrollTop: (stopPoints[currentSection]) * (scroll.el.scrollHeight - scroll.el.clientHeight) / sequenceLength });
    }
  }, [scroll, isModalOpen])

  useFrame(() => {
    if (!introOverRef.current || navState !== "off") return;
  })

  useFrame((_state) => {
    // ----- Scroll velocity for motion blur -----
    // const rawVelocity =
    //   Math.abs(scroll.offset - prevOffset.current) / Math.max(delta, 0.001);
    // prevOffset.current = scroll.offset;
    // smoothedVelocity.current +=
    //   (rawVelocity - smoothedVelocity.current) * VELOCITY_SMOOTHING;
    // // Publish via getState to avoid React re-renders
    // useScrollVelocityStore.getState().setVelocity(smoothedVelocity.current);

    // ----- Section / modal logic (unchanged) -----
    if (!isModalOpen) {
      for (const path in stopPoints) {
        const scrollDiff = Math.abs(scrollSheet.sequence.position - stopPoints[path as Section]);
        if (
          path !== currentSection &&
          scrollDiff > -modalTriggerThrehold &&
          scrollDiff < modalTriggerThrehold
        ) {
          if (path !== "home") {
            openModal();
          }
          setCurrentSection(path as Section);
          break;
        }
      }
    } else {
      const scrollDiff = Math.abs(scrollSheet.sequence.position - stopPoints[currentSection]);
      if (
        scrollDiff < -modalTriggerThrehold ||
        scrollDiff > modalTriggerThrehold
      ) {
        closeModal();
        setTimeout(() => setCurrentSection("transition"), 500)
      }
    }

    // Update the sequence position
    scrollSheet.sequence.position = scroll.offset * sequenceLength;
  });

  return null;
}

// const stopPoints = {
//   "home": [0, 0],
//   "about": [5, 8],
//   "contact": [13, 16],
// }
// const sequenceLength = 20;

// export default function ScrollSync() {

//   const scroll = useScroll();
//   const targetPosition = useRef<number>(0);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const scrollLock = useScrollLockStore((s) => s.lock);
//   const openModal = useModalStore((s) => s.openModal);
//   const isScrollLocked = useScrollLockStore((s) => s.locked);
//   const getCurrentPage = (path: string) => {
//     if (path === "/") return "home";
//     return path.slice(1);
//   }

//   const maxVelocity = 5;
//   const acceleration = 0.1;
//   const threshold = 0.8; //? point to start decelerating

//   useFrame(() => {

//     targetPosition.current = scroll.offset * sequenceLength;
//     if (!isScrollLocked) {
//       for (let path in stopPoints) {
//         path = getCurrentPage(path);
//         if (path !== location.pathname && targetPosition.current >= stopPoints[path]?.[0] && targetPosition.current <= stopPoints[path]?.[1]) {
//           scrollLock();
//           openModal();
//           navigate(path);
//           break;
//         }
//       }
//     }

//   })
// }
