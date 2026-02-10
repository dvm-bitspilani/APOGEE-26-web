import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { sheet } from "../../theatre";
import { getProject } from "@theatre/core";

import state from "../../state5.json";
import { useModalStore, useScrollLockStore } from "../../../../utils/store";
import { useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");

type Section = ["home", "about", "contact"][number];

const stopPoints: Record<Section, [number, number]> = {
  "home": [0, 1],
  "about": [5, 8],
  "contact": [13, 16],
}
const sequenceLength = 20;

export default function ScrollSync() {
  const scroll = useScroll();
  const openModal = useModalStore((s) => s.openModal);
  const scrollLock = useScrollLockStore((s) => s.lock);
  const isScrollLocked = useScrollLockStore((s) => s.locked); 
  const currentSection = useRef<Section>("home");

  useFrame(() => {
    // Calculate the sequence position based on scroll offset
    // Using a fixed sequence length of 10 for consistency, or we can use sheet.sequence.length
    // if that is available and reliable. For now, let's assume we want to map full scroll
    // to to the sequence length.

    if (!isScrollLocked) {
      for (const path in stopPoints) {
        if (path !== currentSection.current && sheet.sequence.position >= stopPoints[path as Section]?.[0] && sheet.sequence.position <= stopPoints[path as Section]?.[1]) {
          if (path !== "home") {
            scrollLock();
            openModal();
          }
          currentSection.current = path as Section;
          break;
        }
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