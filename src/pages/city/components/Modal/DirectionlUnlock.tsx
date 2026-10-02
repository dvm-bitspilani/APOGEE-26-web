import { useEffect, useRef } from "react";
import { Observer } from "gsap/all";
import { gsap } from "gsap";
import { useCurrentSectionStore, useModalStore, usePullProgressStore, useScrollStore } from "../../../../utils/store";
import { stopPoints, maxSequenceLength } from "../ScrollSync/ScrollSync";

gsap.registerPlugin(Observer);
interface DirectionalUnlockProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  modalUIRef?: React.RefObject<HTMLDivElement | null>;
}
export const THRESHOLD = 2000;
export const MOBILE_THRESHOLD = 750;
export const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export default function DirectionalUnlock({ containerRef, modalUIRef }: DirectionalUnlockProps) {
  const isModalOpen = useModalStore(s => s.isModalOpen);
  const closeModal = useModalStore(s => s.closeModal);
  const currentSection = useCurrentSectionStore(s => s.currentSection);
  const setCurrentSection = useCurrentSectionStore(s => s.setCurrentSection);
  const scroll = useScrollStore(s => s.scroll);
  const pullProgress = usePullProgressStore(s => s.pullProgress);
  const setPullProgress = usePullProgressStore(s => s.setPullProgress);
  const direction = useRef<"up" | "down" | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = containerRef?.current;
    if (!element || !modalUIRef?.current || !isModalOpen) return;
    let decayTimer: ReturnType<typeof setTimeout> | undefined;
    let decayAnimation: gsap.core.Tween | undefined;
    let lastTouchY = 0;
    const progress = () => usePullProgressStore.getState().pullProgress;
    const interruptDecay = () => {
      clearTimeout(decayTimer);
      decayAnimation?.kill();
    };
    const accumulate = (delta: number) => {
      interruptDecay();
      const atTop = element.scrollTop <= 2;
      const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 2;
      if (atTop && delta < 0) direction.current = "up";
      else if (atBottom && delta > 0 && stopPoints[currentSection] !== maxSequenceLength) direction.current = "down";
      else { setPullProgress(Math.max(0, progress() - 10)); return false; }
      setPullProgress(Math.min(progress() + Math.abs(delta), THRESHOLD + 20));
      return true;
    };
    const decay = () => {
      interruptDecay();
      if (!progress() || progress() >= (isMobileDevice() ? MOBILE_THRESHOLD : THRESHOLD)) return;
      decayTimer = setTimeout(() => {
        decayAnimation = gsap.to({ value: progress() }, {
          value: 0, duration: 0.8, ease: "power2.inOut",
          onUpdate() { setPullProgress(this.targets()[0].value); },
        });
      }, 2000);
    };
    const observer = Observer.create({
      target: element, type: "wheel,pointer",
      onChange(self) { if (!isMobileDevice()) accumulate(self.deltaY); },
      onStop: decay,
    });
    const touchStart = (event: TouchEvent) => { interruptDecay(); lastTouchY = event.touches[0].clientY; };
    const touchMove = (event: TouchEvent) => {
      const y = event.touches[0].clientY;
      if (accumulate(lastTouchY - y)) event.preventDefault();
      lastTouchY = y;
    };
    element.addEventListener("touchstart", touchStart, { passive: true });
    element.addEventListener("touchmove", touchMove, { passive: false });
    element.addEventListener("touchend", decay, { passive: true });
    element.addEventListener("touchcancel", decay, { passive: true });
    return () => {
      interruptDecay(); observer.kill();
      element.removeEventListener("touchstart", touchStart);
      element.removeEventListener("touchmove", touchMove);
      element.removeEventListener("touchend", decay);
      element.removeEventListener("touchcancel", decay);
    };
  }, [containerRef, modalUIRef, isModalOpen, currentSection, setPullProgress]);

  useEffect(() => {
    if (isModalOpen && scroll?.el && pullProgress >= (isMobileDevice() ? MOBILE_THRESHOLD : THRESHOLD)) {
      gsap.set(scroll.el, { scrollTop: direction.current === "up" ? "-=400" : "+=400" });
      closeModal();
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => setCurrentSection("transition"), 800);
      setPullProgress(0);
    }
  }, [pullProgress, isModalOpen, scroll, closeModal, setCurrentSection, setPullProgress]);
  useEffect(() => () => { if (transitionTimer.current) clearTimeout(transitionTimer.current); }, []);
  return null;
}
