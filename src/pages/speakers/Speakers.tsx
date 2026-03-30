import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Speakers.module.scss";
import speakersData from "./speakerData";
import { PowerGlitch } from "powerglitch";
import gsap from "gsap";

// Position coordinates for each of the 5 year node slots
const YEAR_POSITIONS = [
    { left: "13%", top: "24%", transform: "translateY(0%)" },
    { left: "27.5%", top: "32%", transform: "translateY(0%)" },
    { left: "30%", top: "50%", transform: "translateY(-30%)" },
    { left: "27.5%", top: "63%", transform: "translateY(0%)" },
    { left: "15%", top: "72%", transform: "translateY(0%)" },
];

const MOBILE_YEAR_POSITIONS = [
    { left: "10vw", top: "auto", bottom: "8vw", transform: "rotate(-30deg)" },
    { left: "22vw", top: "auto", bottom: "30vw", transform: "rotate(-15deg)" },
    { left: "50%", top: "auto", bottom: "40vw", transform: "translateX(-50%) rotate(0deg)" },
    { left: "auto", right: "22vw", top: "auto", bottom: "30vw", transform: "rotate(15deg)" },
    { left: "auto", right: "10vw", top: "auto", bottom: "8vw", transform: "rotate(30deg)" },
];

const YEAR_FILTERS = [
    "brightness(0.55) opacity(0.72)",
    "brightness(1.2) drop-shadow(0 0 14px rgba(0, 255, 255, 0.6))",
    "brightness(1.2)",
    "brightness(1.2) drop-shadow(0 0 14px rgba(0, 255, 255, 0.6))",
    "brightness(0.55) opacity(0.72)",
];

const SVG_FRAMES = ["first", "second", "third", "fourth", "fifth"];

export default function Speakers() {
    const [activeYearIndex, setActiveYearIndex] = useState(0);
    const [virtualSpeakerIndex, setVirtualSpeakerIndex] = useState(0);

    const activeYearData = speakersData[activeYearIndex] || speakersData[0];
    const speakersList = activeYearData.speakers || [];
    const len = speakersList.length;
    const activeSpeakerIndex = len > 0 ? ((virtualSpeakerIndex % len) + len) % len : 0;

    const imageRef = useRef<HTMLImageElement>(null);
    const isAnimating = useRef(false);
    const yearNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
    // 5 nodes × 5 frame images each = refs for cross-fade
    const frameImgRefs = useRef<(HTMLImageElement | null)[][]>([[], [], [], [], []]);
    // Refs for the text spans (short + full per node)
    const yearTextShortRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const yearTextFullRefs = useRef<(HTMLSpanElement | null)[]>([]);

    // PowerGlitch effect
    useEffect(() => {
        if (imageRef.current) {
            const glitch = PowerGlitch.glitch(imageRef.current, {
                playMode: "manual",
                createContainers: true,
                hideOverflow: false,
                timing: { duration: 600, iterations: 1 },
                shake: { velocity: 15, amplitudeX: 0.04, amplitudeY: 0.04 },
                slice: { count: 12, velocity: 15, minHeight: 0.02, maxHeight: 0.1, hueRotate: true },
                pulse: false,
            });
            glitch.startGlitch();
            const timer = setTimeout(() => glitch.stopGlitch(), 600);
            return () => clearTimeout(timer);
        }
    }, [activeSpeakerIndex, activeYearIndex]);

    // Sliding window helper
    const getWindow = (arr: any[], activeIdx: number) => {
        const arrLen = arr.length;
        if (arrLen === 0) return [];
        const result = [];
        for (let i = -2; i <= 2; i++) {
            let idx = (activeIdx + i) % arrLen;
            if (idx < 0) idx += arrLen;
            result.push({ item: arr[idx], originalIndex: idx });
        }
        return result;
    };

    const displayedYears = getWindow(speakersData, activeYearIndex);
    const activeSpeaker = speakersList[activeSpeakerIndex];

    // GSAP year wheel rotation with cross-fade
    const handleYearClick = useCallback(
        (targetOriginalIndex: number) => {
            if (targetOriginalIndex === activeYearIndex || isAnimating.current) return;
            isAnimating.current = true;

            const clickedSlot = displayedYears.findIndex(
                (d) => d.originalIndex === targetOriginalIndex
            );
            if (clickedSlot === -1) {
                isAnimating.current = false;
                return;
            }

            const shift = clickedSlot - 2;

            const tl = gsap.timeline({
                onComplete: () => {
                    // Clear GSAP inline overrides so React CSS re-applies
                    yearNodeRefs.current.forEach((node) => {
                        if (node) gsap.set(node, { clearProps: "left,top,transform,width,height,filter,zIndex,opacity" });
                    });
                    // Clear frame image opacity overrides
                    frameImgRefs.current.forEach((nodeFrames) => {
                        nodeFrames.forEach((img) => {
                            if (img) gsap.set(img, { clearProps: "opacity" });
                        });
                    });
                    // Clear text opacity overrides
                    yearTextShortRefs.current.forEach((el) => {
                        if (el) gsap.set(el, { clearProps: "opacity" });
                    });
                    yearTextFullRefs.current.forEach((el) => {
                        if (el) gsap.set(el, { clearProps: "opacity" });
                    });

                    setActiveYearIndex(targetOriginalIndex);
                    setVirtualSpeakerIndex(0);
                    isAnimating.current = false;
                },
            });

            for (let i = 0; i < 5; i++) {
                const node = yearNodeRefs.current[i];
                if (!node) continue;

                const destSlot = i - shift;
                const isLeavingTop = destSlot < 0;
                const isLeavingBottom = destSlot > 4;
                const isBecomingActive = destSlot === 2;
                const wasActive = i === 2;

                if (isLeavingTop || isLeavingBottom) {
                    tl.to(
                        node,
                        {
                            top: isLeavingTop ? "5svh" : "95svh",
                            opacity: 0,
                            duration: 0.5,
                            ease: "power2.in",
                        },
                        0
                    );
                } else {
                    const isMobile = window.matchMedia("(max-aspect-ratio: 1/1)").matches;
                    const posArray = isMobile ? MOBILE_YEAR_POSITIONS : YEAR_POSITIONS;
                    const targetPos = posArray[destSlot];
                    const isActive = destSlot === 2;
                    const targetW = isMobile
                        ? (isActive ? "clamp(60px, 12vw, 95px)" : "clamp(45px, 9vw, 70px)")
                        : (isActive ? "clamp(140px, 18vh, 240px)" : "clamp(110px, 14vh, 180px)");
                    const targetH = isMobile
                        ? (isActive ? "clamp(60px, 12vw, 95px)" : "clamp(45px, 9vw, 70px)")
                        : (isActive ? "clamp(140px, 22vh, 240px)" : "clamp(110px, 14vh, 180px)");

                    // Slide position + resize
                    tl.to(
                        node,
                        {
                            ...targetPos,
                            width: targetW,
                            height: targetH,
                            filter: YEAR_FILTERS[destSlot],
                            zIndex: isActive ? 5 : destSlot === 1 || destSlot === 3 ? 2 : 1,
                            duration: 0.6,
                            ease: "power2.inOut",
                        },
                        0
                    );

                    // Cross-fade SVG frames: fade out current, fade in destination
                    const currentFrameImg = frameImgRefs.current[i]?.[i]; // current slot's frame
                    const destFrameImg = frameImgRefs.current[i]?.[destSlot]; // destination slot's frame

                    if (currentFrameImg && destFrameImg && i !== destSlot) {
                        tl.to(currentFrameImg, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 0);
                        tl.to(destFrameImg, { opacity: 1, duration: 0.6, ease: "power2.inOut" }, 0);
                    }

                    // Text expand/collapse: smooth cross-fade between short and full
                    const shortText = yearTextShortRefs.current[i];
                    const fullText = yearTextFullRefs.current[i];

                    if (isBecomingActive && shortText && fullText) {
                        tl.to(shortText, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.1);
                        tl.to(fullText, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0.15);
                    } else if (wasActive && shortText && fullText) {
                        tl.to(fullText, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.1);
                        tl.to(shortText, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0.15);
                    }
                }
            }
        },
        [activeYearIndex, displayedYears]
    );

    const handleSpeakerClick = (v_index: number) => {
        if (v_index !== virtualSpeakerIndex) {
            setVirtualSpeakerIndex(v_index);
        }
    };

    return (
        <div className={styles.speakersContainer}>
            <div className={styles.backgroundOverlay}></div>

            <div className={styles.header}>
                <h1 className={styles.title}>SPEAKERS</h1>
            </div>

            <div className={styles.wheelContainer}>
                <img src="/svg/speakers/frameEvents.svg" alt="Wheel Frame" className={styles.wheelFrameBg} />

                <div className={styles.yearsWrapper}>
                    {[0, 1, 2, 3, 4].map((posIndex) => {
                        const isActive = posIndex === 2;
                        const yearData = displayedYears[posIndex];

                        return (
                            <div
                                key={`year-pos-${posIndex}`}
                                ref={(el) => { yearNodeRefs.current[posIndex] = el; }}
                                className={`${styles.yearNode} ${isActive ? styles.active : ''} ${styles[`slot${posIndex}`]}`}
                                onClick={() => yearData && handleYearClick(yearData.originalIndex)}
                            >
                                {/* All 5 frame SVGs stacked — only current slot visible */}
                                {SVG_FRAMES.map((frameName, frameIdx) => {
                                    const isCurrentFrame = frameIdx === posIndex;
                                    return (
                                        <img
                                            key={frameName}
                                            ref={(el) => {
                                                if (!frameImgRefs.current[posIndex]) {
                                                    frameImgRefs.current[posIndex] = [];
                                                }
                                                frameImgRefs.current[posIndex][frameIdx] = el;
                                            }}
                                            src={`/svg/speakers/${frameName}.svg`}
                                            alt="Year Frame"
                                            className={styles.yearBg}
                                            style={{
                                                opacity: isCurrentFrame ? 1 : 0,
                                            }}
                                        />
                                    );
                                })}

                                {/* Dual year text: short (26) and full (2026) stacked */}
                                <span
                                    ref={(el) => { yearTextShortRefs.current[posIndex] = el; }}
                                    className={styles.yearText}
                                    style={{ opacity: isActive ? 0 : 1 }}
                                >
                                    {yearData ? yearData.item.year.toString().slice(-2) : ''}
                                </span>
                                <span
                                    ref={(el) => { yearTextFullRefs.current[posIndex] = el; }}
                                    className={`${styles.yearText} ${styles.yearTextFull}`}
                                    style={{ opacity: isActive ? 1 : 0 }}
                                >
                                    {yearData ? yearData.item.year.toString() : ''}
                                </span>
                            </div>
                        );
                    })}

                    {/* Virtual speaker positions */}
                    {len > 0 && Array.from({ length: 9 }).map((_, i) => {
                        const offset = i - 4;
                        const v_index = virtualSpeakerIndex + offset;
                        const physicalIndex = ((v_index % len) + len) % len;
                        const speakerData = speakersList[physicalIndex];
                        const posIndex = offset + 2;
                        const isVisible = posIndex >= 0 && posIndex <= 4;
                        const isActiveSpeaker = offset === 0;

                        let assignedClass = styles[`speakerPos${posIndex}`];
                        if (posIndex < 0) assignedClass = styles.speakerPosOffTop;
                        if (posIndex > 4) assignedClass = styles.speakerPosOffBottom;

                        return (
                            <div
                                key={`v-speaker-${v_index}`}
                                className={`${styles.speakerLabelWrapper} ${isActiveSpeaker ? styles.activeLabel : ''} ${assignedClass}`}
                                onClick={() => handleSpeakerClick(v_index)}
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    pointerEvents: isVisible ? 'auto' : 'none'
                                }}
                            >
                                <img
                                    src="/svg/speakers/speakerName.svg"
                                    alt="Speaker Frame"
                                    className={`${styles.speakerLabelBg} ${styles.inactiveSvg} ${isActiveSpeaker ? styles.fadeOut : ''}`}
                                />
                                <img
                                    src="/svg/speakers/activeSpeakerName.svg"
                                    alt="Active Frame"
                                    className={`${styles.speakerLabelBg} ${styles.activeSvg} ${isActiveSpeaker ? styles.fadeIn : ''}`}
                                />
                                <span className={styles.speakerNameText}>
                                    {speakerData.name.toUpperCase()}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {activeSpeaker && (
                <div className={styles.speakerImageContainer}>
                    <img src="/img/speakers/imageFrame.png" alt="Image Frame" className={styles.speakerImageFrame} />
                    <div key={`img-${activeSpeaker.id}`} className={styles.speakerImagePos}>
                        <div className={styles.glitchTarget} ref={imageRef}>
                            <img src={activeSpeaker.img} alt={activeSpeaker.name} className={styles.speakerImage} />
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile speaker name navigation — single name with arrows */}
            {activeSpeaker && (
                <div className={styles.mobileSpeakerNav}>
                    <button
                        className={styles.mobileArrow}
                        onClick={() => setVirtualSpeakerIndex(virtualSpeakerIndex - 1)}
                        aria-label="Previous speaker"
                    >
                        <img src="/svg/speakers/arrows.svg" alt="Previous" className={styles.mobileArrowLeft} />
                    </button>

                    <div className={styles.mobileNameContainer}>
                        <img src="/svg/speakers/mobileNameFrame.svg" alt="Name Frame" className={styles.mobileNameFrameImg} />
                        <span className={styles.mobileNameText}>
                            {activeSpeaker.name.toUpperCase()}
                        </span>
                    </div>

                    <button
                        className={styles.mobileArrow}
                        onClick={() => setVirtualSpeakerIndex(virtualSpeakerIndex + 1)}
                        aria-label="Next speaker"
                    >
                        <img src="/svg/speakers/arrows.svg" alt="Next" className={styles.mobileArrowRight} />
                    </button>
                </div>
            )}
        </div>
    );
}
