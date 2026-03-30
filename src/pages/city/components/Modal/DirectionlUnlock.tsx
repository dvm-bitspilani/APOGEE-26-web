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

export const THRESHOLD = 2000; // Total "force" required to break the lock

export default function DirectionalUnlock({ containerRef, modalUIRef }: DirectionalUnlockProps) {

    const isModalOpen = useModalStore((s) => s.isModalOpen);
    const closeModal = useModalStore((s) => s.closeModal);
    const currentSection = useCurrentSectionStore((s) => s.currentSection);
    const setCurrentSection = useCurrentSectionStore((s) => s.setCurrentSection);
    const scroll = useScrollStore((s) => s.scroll);

    const scrollDirectionRef = useRef<"up" | "down" | null>(null);

    const pullProgress = usePullProgressStore((s) => s.pullProgress);
    const setPullProgress = usePullProgressStore((s) => s.setPullProgress);

    const decayTimer = useRef<number | null>(null);
    const snapAnim = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!containerRef?.current || !modalUIRef?.current) return;
        if (!isModalOpen) {
            setPullProgress(0);
            return;
        };

        const observer = Observer.create({
            target: containerRef?.current,
            type: "wheel,touch,pointer",
            onChange: (self) => {
                if (!containerRef.current) return;

                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                const isAtTop = !(scrollHeight - clientHeight) || scrollTop <= 2;
                const isAtBottom = !(scrollHeight - clientHeight) || scrollTop + clientHeight >= scrollHeight - 2;

                // PULLING UP at the Top (self.deltaY is negative when swiping down/wheeling up)
                if (isAtTop && self.deltaY < 0) {
                    setPullProgress(Math.min(pullProgress + Math.abs(self.deltaY), THRESHOLD + 20));
                    scrollDirectionRef.current = "up";
                }
                // PULLING DOWN at the Bottom (self.deltaY is positive)
                else if (isAtBottom && self.deltaY > 0) {
                    if (stopPoints[currentSection] === maxSequenceLength) return; // Don't allow pulling down if we're at the end of the sequence
                    setPullProgress(Math.min(pullProgress + Math.abs(self.deltaY), THRESHOLD + 20));
                    scrollDirectionRef.current = "down";
                }
                // Reset "Force" if they start scrolling normally inside the modal
                else if (pullProgress > 0) {
                    // Smoothly bleed off the force if they scroll back into the content
                    setPullProgress(Math.max(0, pullProgress - 10));
                }
            },
            onStop: () => {
                // 3. Instead of snapping immediately, wait 2 seconds
                if (pullProgress > 0 && pullProgress < THRESHOLD) {
                    decayTimer.current = setTimeout(() => {
                        snapAnim.current = gsap.to({ val: pullProgress }, {
                            val: 0,
                            duration: 0.8,
                            ease: "power2.inOut", // Smoother decay for a "heavy" feel
                            onUpdate: function () {
                                setPullProgress(this.targets()[0].val);
                            }
                        });
                    }, 2000); // The 2-second grace period
                }
            }
        });

        return () => observer?.kill();
    }, [isModalOpen, pullProgress]);

    // Trigger the actual close when threshold is met
    useEffect(() => {
        if (pullProgress >= THRESHOLD) {
            // * "...since the batch of '24 is all about efficient code..."
            if (!containerRef?.current) return;

            if (scrollDirectionRef.current === "up") gsap.set(scroll.el, { scrollTop: "-=400" });
            else gsap.set(scroll.el, { scrollTop: "+=400" });

            closeModal();
            setTimeout(() => setCurrentSection("transition"), 600)
            setPullProgress(0);

        }
    }, [pullProgress]);
    
    return null
}