import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";

import state from "../../state-carnival.json";
import { useActiveSheetStore, useModalStore, usePreloaderStateStore } from "../../../../utils/store";
import { type Section, useCurrentSectionStore } from "../../../../utils/store";
import { useEffect, useRef } from "react";

// import { useLocation, useNavigate } from "react-router-dom";
export const project = getProject("City Project", { state });
export const scrollSheet = project.sheet("Cyber City");
export const introAnimSheet = project.sheet("Intro Sequence");

const stopPoints: Record<Section, [number, number]> = {
  "home": [0, 0.25],
  "about": [6, 6],
  "contact": [10, 10],
  "transition": [-1, -1],
}
const sequenceLength = 15;

export default function ScrollSync() {
  const scroll = useScroll();
  const introOverRef = useRef<boolean>(false);
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  const showPreloader = usePreloaderStateStore((s) => s.showPreloader);
  const currentSection = useCurrentSectionStore((s) => s.currentSection);
  const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);
  // const activeSheet = useActiveSheetStore((s) => s.activeSheet);
  const setActiveSheet = useActiveSheetStore((s) => s.setActiveSheet);

  useEffect(() => {
    scrollSheet.sequence.position = 0;
    introAnimSheet.sequence.play({iterationCount: 1}).then(() => {
      if (!showPreloader) {
        introOverRef.current = true;
        setActiveSheet("Cyber City");
      }
    });
    if (showPreloader) introAnimSheet.sequence.pause();
  }, [showPreloader])

  useFrame(() => {
    if (!introOverRef.current) return;

    if (!isModalOpen) {
      for (const path in stopPoints) {
        if (path !== currentSection && scrollSheet.sequence.position >= stopPoints[path as Section]?.[0] && scrollSheet.sequence.position <= stopPoints[path as Section]?.[1]) {
          if (path !== "home") {
            // scrollLock();
            openModal();
          }
          setCurrentSection(path as Section)
          break;
        }
      }
    }
    else {
      if (scrollSheet.sequence.position <= stopPoints[currentSection]?.[0] || scrollSheet.sequence.position >= stopPoints[currentSection]?.[1]) {
        closeModal();
        setCurrentSection("transition");
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