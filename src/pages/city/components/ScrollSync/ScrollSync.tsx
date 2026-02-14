import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { sheet } from "../../theatre";
import { getProject } from "@theatre/core";

import { useRef } from "react";
import {
  type Section,
  useCurrentSectionStore,
  useModalStore,
  useScrollVelocityStore,
} from "../../../../utils/store";
import state from "../../state7.json";
// import { useLocation, useNavigate } from "react-router-dom";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");

const stopPoints: Record<Section, [number, number]> = {
  home: [0, 0.25],
  about: [4, 6],
  contact: [10, 16],
  transition: [-1, -1],
};
const sequenceLength = 12;

const VELOCITY_SMOOTHING = 0.12;

export default function ScrollSync() {
  const scroll = useScroll();
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  const currentSection = useCurrentSectionStore((s) => s.currentSection);
  const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);

  const prevOffset = useRef(0);
  const smoothedVelocity = useRef(0);

  useFrame((_state, delta) => {
    // ----- Scroll velocity for motion blur -----
    const rawVelocity =
      Math.abs(scroll.offset - prevOffset.current) / Math.max(delta, 0.001);
    prevOffset.current = scroll.offset;
    smoothedVelocity.current +=
      (rawVelocity - smoothedVelocity.current) * VELOCITY_SMOOTHING;
    // Publish via getState to avoid React re-renders
    useScrollVelocityStore.getState().setVelocity(smoothedVelocity.current);

    // ----- Section / modal logic (unchanged) -----
    if (!isModalOpen) {
      for (const path in stopPoints) {
        if (
          path !== currentSection &&
          sheet.sequence.position >= stopPoints[path as Section]?.[0] &&
          sheet.sequence.position <= stopPoints[path as Section]?.[1]
        ) {
          if (path !== "home") {
            openModal();
          }
          setCurrentSection(path as Section);
          break;
        }
      }
    } else {
      if (
        sheet.sequence.position <= stopPoints[currentSection]?.[0] ||
        sheet.sequence.position >= stopPoints[currentSection]?.[1]
      ) {
        closeModal();
        setCurrentSection("transition");
      }
    }

    // Update the sequence position
    sheet.sequence.position = scroll.offset * sequenceLength;
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
