import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { sheet } from "../../theatre";
import { getProject } from "@theatre/core";

import state from "../../state7.json";
import { useModalStore } from "../../../../utils/store";
import { type Section, useCurrentSectionStore } from "../../../../utils/store";
// import { useLocation, useNavigate } from "react-router-dom";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");

const stopPoints: Record<Section, [number, number]> = {
  "home": [0, 0.25],
  "about": [4, 6],
  "contact": [10, 16],
  "transition": [-1, -1],
}
const sequenceLength = 12;

export default function ScrollSync() {
  const scroll = useScroll();
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  // const scrollLock = useScrollLockStore((s) => s.lock);
  // const isScrollLocked = useScrollLockStore((s) => s.locked); 
  // const currentSection = useRef<Section>("home");
  const currentSection = useCurrentSectionStore((s) => s.currentSection);
  const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);

  useFrame(() => {
    // Calculate the sequence position based on scroll offset
    // Using a fixed sequence length of 10 for consistency, or we can use sheet.sequence.length
    // if that is available and reliable. For now, let's assume we want to map full scroll
    // to to the sequence length.

    if (!isModalOpen) {
      for (const path in stopPoints) {
        if (path !== currentSection && sheet.sequence.position >= stopPoints[path as Section]?.[0] && sheet.sequence.position <= stopPoints[path as Section]?.[1]) {
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
      if (sheet.sequence.position <= stopPoints[currentSection]?.[0] || sheet.sequence.position >= stopPoints[currentSection]?.[1]) {
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