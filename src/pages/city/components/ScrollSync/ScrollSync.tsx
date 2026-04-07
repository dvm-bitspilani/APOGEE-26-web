import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";

import state from "../../state-jukebox.json";
import { useActiveSheetStore, useModalStore, usePreloaderStateStore, useScrollStore, useScrollToSectionStore } from "../../../../utils/store";
import { type Section, useCurrentSectionStore } from "../../../../utils/store";
import { useEffect, useRef, useState } from "react";
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
  const modalTriggerThrehold = 0.5;
  const setScroll = useScrollStore((s) => s.setScroll);
  const [isAutoScrolling, setIsAutoScroll] = useState(false);
  const targetPositionRef = useRef<number>(0);

  const sequenceLength = activeSheet === "Intro Sequence" ? 0 : maxSequenceLength;

  useEffect(() => {
    if (activeSheet !== "Cyber City") return;
    const scrollToSection = (section: Section) => {
      if (!scroll.el || section === "transition") return;
      const targetPosition = stopPoints[section] * (scroll.el.scrollHeight - scroll.el.clientHeight) / sequenceLength;
      setIsAutoScroll(true);
      scroll.el.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      targetPositionRef.current = stopPoints[section];
      closeModal();
      setTimeout(() => setCurrentSection("transition"), 500)
    }
    useScrollToSectionStore.getState().scrollToSection = scrollToSection;
  }, [activeSheet, scroll])

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

      // 🔥 prevent default scroll (important)
      if (event.code === "ArrowUp" || event.code === "ArrowDown") {
        event.preventDefault();
      }

      switch (event.code) {
        case "KeyS":
        case "ArrowDown":
          scrollContainer.scrollBy({
            top: -scrollStep, // ⬆️ up = negative
            behavior: "smooth",
          });
          break;

        case "KeyW":
        case "ArrowUp":
          scrollContainer.scrollBy({
            top: scrollStep, // ⬇️ down = positive
            behavior: "smooth",
          });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scroll.el, isModalOpen, showPreloader]);

  useEffect(() => {
    if (scroll && isModalOpen && !isAutoScrolling) {
      gsap.set(scroll.el, { scrollTop: (stopPoints[currentSection]) * (scroll.el.scrollHeight - scroll.el.clientHeight) / sequenceLength });
    }
  }, [scroll, isModalOpen])

  useFrame((_state) => {
    // ----- Scroll velocity for motion blur -----
    // const rawVelocity =
    //   Math.abs(scroll.offset - prevOffset.current) / Math.max(delta, 0.001);
    // prevOffset.current = scroll.offset;
    // smoothedVelocity.current +=
    //   (rawVelocity - smoothedVelocity.current) * VELOCITY_SMOOTHING;
    // // Publish via getStonsole.log(scrollToSection);ate to avoid React re-renders
    // useScrollVelocityStore.getState().setVelocity(smoothedVelocity.current);
    if (isAutoScrolling) {
      const scrollDiff = Math.abs(scrollSheet.sequence.position - targetPositionRef.current);
      if (scrollDiff < modalTriggerThrehold) setIsAutoScroll(false); //* Who gives a sheet about naming
    }
    // ----- Section / modal logic (unchanged) -----
    else {
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
    }

    // Update the sequence position
    scrollSheet.sequence.position = scroll.offset * sequenceLength;
  });

  return null;
}
