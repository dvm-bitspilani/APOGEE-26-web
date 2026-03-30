import { useEffect, useRef } from 'react'
import { Observer } from 'gsap/Observer'
import { gsap } from 'gsap'
import { useCurrentSectionStore, useModalStore, usePullProgressStore, useScrollStore } from '../../../../utils/store';
import { stopPoints, maxSequenceLength } from '../ScrollSync/ScrollSync';

gsap.registerPlugin(Observer)

interface DirectionalUnlockProps {
    containerRef?: React.RefObject<HTMLDivElement | null>;
    modalUIRef?: React.RefObject<HTMLDivElement | null>;
}

export const THRESHOLD = 2000;
export const MOBILE_THRESHOLD = 750;
export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
export default function DirectionalUnlock({ containerRef, modalUIRef }: DirectionalUnlockProps) {

    const isModalOpen = useModalStore((s) => s.isModalOpen);
    const closeModal = useModalStore((s) => s.closeModal);
    const currentSection = useCurrentSectionStore((s) => s.currentSection);
    const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);
    const scroll = useScrollStore((s) => s.scroll);

    const scrollDirectionRef = useRef<"up" | "down" | null>(null);
    const decayTimer = useRef<number | null>(null);
    const snapAnim = useRef<gsap.core.Tween | null>(null);
    
    // Mobile touch tracking
    const touchStartYRef = useRef<number>(0);
    const lastTouchYRef = useRef<number>(0);
    const touchOverscrollRef = useRef<number>(0);

    const pullProgress = usePullProgressStore((s) => s.pullProgress);
    const setPullProgress = usePullProgressStore((s) => s.setPullProgress);

    useEffect(() => {
        if (!containerRef?.current || !modalUIRef?.current) return;
        if (!isModalOpen) {
            setPullProgress(0);
            return;
        };

        // DESKTOP: Keep existing GSAP Observer for wheel events
        const observer = Observer.create({
            target: containerRef?.current,
            type: "wheel,pointer",
            onChange: (self) => {
                if (!containerRef.current || isMobileDevice()) return;

                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                const isAtTop = !(scrollHeight - clientHeight) || scrollTop <= 2;
                const isAtBottom = !(scrollHeight - clientHeight) || scrollTop + clientHeight >= scrollHeight - 2;

                if (isAtTop && self.deltaY < 0) {
                    setPullProgress(Math.min(pullProgress + Math.abs(self.deltaY), THRESHOLD + 20));
                    scrollDirectionRef.current = "up";
                }
                else if (isAtBottom && self.deltaY > 0) {
                    if (stopPoints[currentSection] === maxSequenceLength) return;
                    setPullProgress(Math.min(pullProgress + Math.abs(self.deltaY), THRESHOLD + 20));
                    scrollDirectionRef.current = "down";
                }
                else if (pullProgress > 0) {
                    setPullProgress(Math.max(0, pullProgress - 10));
                }
            },
            onStop: () => {
                if (pullProgress > 0 && pullProgress < THRESHOLD) {
                    decayTimer.current = setTimeout(() => {
                        snapAnim.current = gsap.to({ val: pullProgress }, {
                            val: 0,
                            duration: 0.8,
                            ease: "power2.inOut",
                            onUpdate: function () {
                                setPullProgress(this.targets()[0].val);
                            }
                        });
                    }, 2000);
                }
            }
        });

        // MOBILE: Add native touch listener for overscroll detection
        const handleTouchStart = (e: TouchEvent) => {
            touchStartYRef.current = e.touches[0].clientY;
            lastTouchYRef.current = touchStartYRef.current;
            touchOverscrollRef.current = 0;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!containerRef.current) return;

            const currentTouchY = e.touches[0].clientY;
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            const isAtTop = !(scrollHeight - clientHeight) || scrollTop <= 2;
            const isAtBottom = !(scrollHeight - clientHeight) || scrollTop + clientHeight >= scrollHeight - 2;

            const deltaY = lastTouchYRef.current - currentTouchY; // positive = swipe up, negative = swipe down

            // Check if at boundary AND swiping past it
            if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
                if (isAtBottom && stopPoints[currentSection] === maxSequenceLength) return;

                e.preventDefault();
                touchOverscrollRef.current += Math.abs(deltaY);
                setPullProgress(Math.min(pullProgress + touchOverscrollRef.current, THRESHOLD + 20));
                scrollDirectionRef.current = isAtTop ? "up" : "down";
            } else {
                touchOverscrollRef.current = 0; // Reset if scrolling normally inside content
            }

            lastTouchYRef.current = currentTouchY;
        };

        const handleTouchEnd = () => {
            if (pullProgress > 0 && pullProgress < THRESHOLD) {
                decayTimer.current = setTimeout(() => {
                    snapAnim.current = gsap.to({ val: pullProgress }, {
                        val: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                        onUpdate: function () {
                            setPullProgress(this.targets()[0].val);
                        }
                    });
                }, 2000);
            }
        };

        const el = containerRef.current;
        el.addEventListener("touchstart", handleTouchStart, { passive: true });
        el.addEventListener("touchmove", handleTouchMove, { passive: false });
        el.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            observer?.kill();
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isModalOpen, pullProgress]);

    // Trigger the actual close when threshold is met
    useEffect(() => {
        if (pullProgress >= (isMobileDevice() ? MOBILE_THRESHOLD : THRESHOLD)) {
            if (!containerRef?.current) return;

            if (scrollDirectionRef.current === "up") gsap.set(scroll.el, { scrollTop: "-=400" });
            else gsap.set(scroll.el, { scrollTop: "+=400" });

            closeModal();
            setTimeout(() => setCurrentSection("transition"), 800)
            setPullProgress(0);
        }
    }, [pullProgress]);
    
    return null
}