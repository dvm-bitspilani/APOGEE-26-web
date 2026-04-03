import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Speakers.module.scss";
import speakersData from "./speakerData";
import { PowerGlitch } from "powerglitch";
import mobileYearFrame from "/svg/speakers/mobileYearFrame.svg";
import gsap from "gsap";

// Position coordinates for each of the 5 year node slots
const YEAR_POSITIONS = [
    { left: "13%", top: "24%", yPercent: 0 },
    { left: "27.5%", top: "32%", yPercent: 0 },
    { left: "30%", top: "43%", yPercent: 0 },
    { left: "27.5%", top: "63%", yPercent: 0 },
    { left: "15%", top: "72%", yPercent: 0 },
];

const MOBILE_YEAR_POSITIONS = [
    // 0: Void Left (Off-screen left)
    { left: "-10%", top: "110%", rotation: 20, scale: 0.5, xPercent: -50, yPercent: -50, opacity: 0, fontSize: "0.6rem", textOpacity: 0 },
    // 1: Left
    { left: "15%", top: "82%", rotation: 8, scale: 1, xPercent: -50, yPercent: -50, opacity: 1, fontSize: "0.8rem", textOpacity: 0.5 },
    // 2: Center
    { left: "50%", top: "26%", rotation: 0, scale: 1.2, xPercent: -50, yPercent: -50, opacity: 1, fontSize: "1.1rem", textOpacity: 1 },
    // 3: Right
    { left: "85%", top: "82%", rotation: -8, scale: 1, xPercent: -50, yPercent: -50, opacity: 1, fontSize: "0.8rem", textOpacity: 0.5 },
    // 4: Void Right (Off-screen right)
    { left: "110%", top: "110%", rotation: -20, scale: 0.5, xPercent: -50, yPercent: -50, opacity: 0, fontSize: "0.6rem", textOpacity: 0 },
];

const YEAR_FILTERS = [
    "brightness(0.55) opacity(0.72)",
    "brightness(1.2) drop-shadow(0 0 14px rgba(0, 255, 255, 0.6))",
    "brightness(1.2)",
    "brightness(1.2) drop-shadow(0 0 14px rgba(0, 255, 255, 0.6))",
    "brightness(0.55) opacity(0.72)",
];

// Desktop slot constants — mirrors the SCSS classes exactly
const DESKTOP_ZINDEX = [1, 2, 5, 2, 1];
const DESKTOP_WIDTH_ACTIVE = "clamp(140px, 18vh, 240px)";
const DESKTOP_HEIGHT_ACTIVE = "clamp(140px, 22vh, 240px)";
const DESKTOP_WIDTH_INACTIVE = "clamp(110px, 14vh, 180px)";
const DESKTOP_HEIGHT_INACTIVE = "clamp(110px, 14vh, 180px)";

const SVG_FRAMES = ["first", "second", "third", "fourth", "fifth"];

export default function Speakers() {
    const navigate = useNavigate();
    const [activeYearIndex, setActiveYearIndex] = useState(0);
    const [virtualSpeakerIndex, setVirtualSpeakerIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-aspect-ratio: 1/1)");
        setIsMobile(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

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

    // ── Desktop FLIP state ─────────────────────────────────────────────────────
    // Stores the shift direction calculated at click time so useLayoutEffect can
    // run the reverse-FLIP animation after React has committed new state to the DOM.
    const pendingFlipRef = useRef<{ shift: number } | null>(null);
    // Used to fire the initial entrance animation on the very first render.
    const isInitialMount = useRef(true);

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
    const getWindow = (arr: typeof speakersData, activeIdx: number) => {
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

    // ── Desktop FLIP animation ─────────────────────────────────────────────────
    // Fires after every activeYearIndex change (and on initial mount).
    // Runs only for desktop — mobile handles its own animation inside handleYearClick.
    useLayoutEffect(() => {
        if (isMobile) return;

        // ── Initial mount entrance animation ──────────────────────────────────
        if (!pendingFlipRef.current) {
            if (isInitialMount.current) {
                isInitialMount.current = false;
                yearNodeRefs.current.forEach((node, i) => {
                    if (!node) return;
                    gsap.fromTo(
                        node,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.45,
                            delay: i * 0.09,
                            ease: "power2.out",
                            clearProps: "opacity",
                        }
                    );
                });
            }
            return;
        }

        // ── Reverse-FLIP animation ─────────────────────────────────────────────
        // At this point React has already committed the new state to the DOM, so
        // every slot node is sitting at its CSS-class position for the NEW state.
        // We immediately override positions to where those nodes visually came FROM
        // (the source slot), then animate them forward to their natural CSS position.
        const { shift } = pendingFlipRef.current;
        pendingFlipRef.current = null;

        const clearAll = () => {
            yearNodeRefs.current.forEach((node) => {
                if (node)
                    gsap.set(node, {
                        clearProps:
                            "left,top,transform,width,height,filter,zIndex,opacity",
                    });
            });
            frameImgRefs.current.forEach((nodeFrames) => {
                nodeFrames.forEach((img) => {
                    if (img) gsap.set(img, { clearProps: "opacity" });
                });
            });
            yearTextShortRefs.current.forEach((el) => {
                if (el) gsap.set(el, { clearProps: "opacity" });
            });
            yearTextFullRefs.current.forEach((el) => {
                if (el) gsap.set(el, { clearProps: "opacity" });
            });
            isAnimating.current = false;
        };

        const tl = gsap.timeline({ onComplete: clearAll });

        yearNodeRefs.current.forEach((node, i) => {
            if (!node) return;

            // Which old slot did this node's new data come from?
            // new slot[i].data came from old slot[i + shift].
            const sourceSlot = i + shift;
            const destIsActive = i === 2;

            if (sourceSlot < 0 || sourceSlot > 4) {
                // ── Entering from off-screen ───────────────────────────────────
                const isFromTop = sourceSlot < 0;
                gsap.set(node, {
                    left: YEAR_POSITIONS[i].left,
                    top: isFromTop ? "-15svh" : "115svh",
                    yPercent: YEAR_POSITIONS[i].yPercent,
                    width: destIsActive ? DESKTOP_WIDTH_ACTIVE : DESKTOP_WIDTH_INACTIVE,
                    height: destIsActive ? DESKTOP_HEIGHT_ACTIVE : DESKTOP_HEIGHT_INACTIVE,
                    filter: YEAR_FILTERS[i],
                    zIndex: DESKTOP_ZINDEX[i],
                    opacity: 0,
                    scale: 0.8,
                });
                tl.to(
                    node,
                    {
                        top: YEAR_POSITIONS[i].top,
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        ease: "power3.out",
                    },
                    0
                );
            } else {
                // ── INVERT: snap node to source slot CSS position ──────────────
                const srcIsActive = sourceSlot === 2;
                gsap.set(node, {
                    left: YEAR_POSITIONS[sourceSlot].left,
                    top: YEAR_POSITIONS[sourceSlot].top,
                    yPercent: YEAR_POSITIONS[sourceSlot].yPercent,
                    width: srcIsActive ? DESKTOP_WIDTH_ACTIVE : DESKTOP_WIDTH_INACTIVE,
                    height: srcIsActive ? DESKTOP_HEIGHT_ACTIVE : DESKTOP_HEIGHT_INACTIVE,
                    filter: YEAR_FILTERS[sourceSlot],
                    zIndex: DESKTOP_ZINDEX[sourceSlot],
                    opacity: 1,
                });

                // Frame cross-fade: show the source-slot frame image first,
                // then cross-fade to the destination-slot frame image.
                if (sourceSlot !== i) {
                    const srcFrameImg = frameImgRefs.current[i]?.[sourceSlot];
                    const dstFrameImg = frameImgRefs.current[i]?.[i];
                    if (srcFrameImg && dstFrameImg) {
                        gsap.set(srcFrameImg, { opacity: 1 });
                        gsap.set(dstFrameImg, { opacity: 0 });
                        tl.to(srcFrameImg, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 0);
                        tl.to(dstFrameImg, { opacity: 1, duration: 0.6, ease: "power2.inOut" }, 0);
                    }
                }

                // Text cross-fade: short ↔ full year number
                const wasActive = sourceSlot === 2;
                const shortText = yearTextShortRefs.current[i];
                const fullText = yearTextFullRefs.current[i];
                if (destIsActive && shortText && fullText) {
                    gsap.set(shortText, { opacity: 1 });
                    gsap.set(fullText, { opacity: 0 });
                    tl.to(shortText, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.1);
                    tl.to(fullText, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0.15);
                } else if (wasActive && !destIsActive && shortText && fullText) {
                    gsap.set(shortText, { opacity: 0 });
                    gsap.set(fullText, { opacity: 1 });
                    tl.to(fullText, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.1);
                    tl.to(shortText, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0.15);
                }

                // ── PLAY: animate from source to destination CSS position ──────
                tl.to(
                    node,
                    {
                        left: YEAR_POSITIONS[i].left,
                        top: YEAR_POSITIONS[i].top,
                        yPercent: YEAR_POSITIONS[i].yPercent,
                        width: destIsActive ? DESKTOP_WIDTH_ACTIVE : DESKTOP_WIDTH_INACTIVE,
                        height: destIsActive ? DESKTOP_HEIGHT_ACTIVE : DESKTOP_HEIGHT_INACTIVE,
                        filter: YEAR_FILTERS[i],
                        zIndex: DESKTOP_ZINDEX[i],
                        duration: 0.6,
                        ease: "power2.inOut",
                    },
                    0
                );
            }
        });
    }, [activeYearIndex]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Click handler ──────────────────────────────────────────────────────────
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

            // ── Mobile: animation runs first, state updates in onComplete ──────
            if (isMobile) {
                const tl = gsap.timeline({
                    onComplete: () => {
                        setActiveYearIndex(targetOriginalIndex);
                        setVirtualSpeakerIndex(0);

                        yearNodeRefs.current.forEach((node) => {
                            if (node)
                                gsap.set(node, {
                                    clearProps:
                                        "left,top,bottom,right,transform,width,height,filter,zIndex,opacity,display",
                                });
                        });
                        frameImgRefs.current.forEach((nodeFrames) => {
                            nodeFrames.forEach((img) => {
                                if (img) gsap.set(img, { clearProps: "opacity" });
                            });
                        });
                        yearTextShortRefs.current.forEach((el) => {
                            if (el) gsap.set(el, { clearProps: "opacity" });
                        });
                        yearTextFullRefs.current.forEach((el) => {
                            if (el) gsap.set(el, { clearProps: "opacity,font-size" });
                        });
                        isAnimating.current = false;
                    },
                });

                const duration = 0.5;
                const ease = "power2.inOut";

                [0, 1, 2, 3, 4].forEach((posIdx) => {
                    const node = yearNodeRefs.current[posIdx];
                    const text = yearTextFullRefs.current[posIdx];
                    if (!node) return;
                    const { fontSize, textOpacity, ...nodePos } = MOBILE_YEAR_POSITIONS[posIdx];
                    gsap.set(node, { ...nodePos, zIndex: posIdx === 2 ? 10 : 2 });
                    if (text) gsap.set(text, { fontSize, opacity: textOpacity });
                });

                const move = (from: number, to: number) => {
                    const node = yearNodeRefs.current[from];
                    const text = yearTextFullRefs.current[from];
                    if (!node) return;

                    const { fontSize, textOpacity, ...nodePos } = MOBILE_YEAR_POSITIONS[to];

                    tl.to(node, {
                        ...nodePos,
                        zIndex: to === 2 ? 10 : 2,
                        duration: 0.5,
                        ease: "power2.inOut",
                    }, 0);

                    if (text) {
                        tl.to(text, {
                            fontSize,
                            opacity: textOpacity,
                            duration: 0.5,
                            ease: "power2.inOut",
                        }, 0);
                    }
                };

                const drop = (from: number, direction: "left" | "right") => {
                    const node = yearNodeRefs.current[from];
                    const text = yearTextFullRefs.current[from];
                    if (!node) return;

                    const voidIdx = direction === "left" ? 0 : 4;
                    const voidPos = MOBILE_YEAR_POSITIONS[voidIdx];
                    const { fontSize, textOpacity, ...nodePos } = voidPos;

                    tl.to(node, {
                        ...nodePos,
                        duration,
                        ease: "power2.in",
                    }, 0);

                    if (text) {
                        tl.to(text, {
                            fontSize,
                            opacity: textOpacity,
                            duration,
                            ease: "power2.in",
                        }, 0);
                    }
                };

                const bringFromVoid = (from: number, to: number) => {
                    const node = yearNodeRefs.current[from];
                    const text = yearTextFullRefs.current[from];
                    if (!node) return;

                    const voidIdx = to === 1 ? 0 : 4;
                    const voidPos = MOBILE_YEAR_POSITIONS[voidIdx];
                    const destPos = MOBILE_YEAR_POSITIONS[to];

                    const { fontSize: startSize, textOpacity: startOpacity, ...startNodePos } = voidPos;
                    const { fontSize: endSize, textOpacity: endOpacity, ...endNodePos } = destPos;

                    tl.set(node, { ...startNodePos }, 0);
                    if (text) tl.set(text, { fontSize: startSize, opacity: startOpacity }, 0);

                    tl.to(node, {
                        ...endNodePos,
                        duration,
                        ease,
                    }, 0);

                    if (text) {
                        tl.to(text, {
                            fontSize: endSize,
                            opacity: endOpacity,
                            duration,
                            ease,
                        }, 0);
                    }
                };

                if (clickedSlot === 1) {
                    move(1, 2);
                    move(2, 3);
                    drop(3, "right");
                    bringFromVoid(0, 1);
                } else if (clickedSlot === 3) {
                    move(3, 2);
                    move(2, 1);
                    drop(1, "left");
                    bringFromVoid(4, 3);
                } else {
                    isAnimating.current = false;
                    return;
                }

                // ── Desktop: state changes immediately, FLIP runs in useLayoutEffect
            } else {
                if (shift === 0) {
                    isAnimating.current = false;
                    return;
                }
                // Store shift so useLayoutEffect knows the animation direction.
                // State update happens first; the FLIP effect fires synchronously
                // after React commits the new DOM, before the browser paints.
                pendingFlipRef.current = { shift };
                setActiveYearIndex(targetOriginalIndex);
                setVirtualSpeakerIndex(0);
            }
        },
        [isMobile, activeYearIndex, displayedYears]
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
                <img
                    src="/img/speakers/backBtn.png"
                    alt="Back"
                    className={styles.backBtn}
                    onClick={() => navigate("/")}
                />
                <h1 className={styles.title}>SPEAKERS</h1>
            </div>

            <div className={styles.wheelContainer}>
                <img
                    src={isMobile ? "/img/speakers/mobileWheel.png" : "/svg/speakers/frameEvents.svg"}
                    alt="Wheel Frame"
                    className={styles.wheelFrameBg}
                />

                <div className={styles.yearsWrapper}>
                    {isMobile && (
                        <img src={mobileYearFrame} alt="Mobile Year Frame" className={styles.mobileActiveYearBox} />
                    )}
                    {[0, 1, 2, 3, 4].map((posIndex) => {
                        const isActive = posIndex === 2;
                        const yearData = displayedYears[posIndex];

                        return (
                            <div
                                // Stable key — React reuses the same DOM node across year
                                // changes so the FLIP animation has a persistent element to
                                // INVERT and PLAY on.
                                key={`slot-${posIndex}`}
                                ref={(el) => { yearNodeRefs.current[posIndex] = el; }}
                                className={`${styles.yearNode} ${isActive ? styles.active : ''} ${styles[`slot${posIndex}`]}`}
                                onClick={() => yearData && handleYearClick(yearData.originalIndex)}
                            >
                                {/* All 5 frame SVGs stacked — only current slot visible (Removed for mobile) */}
                                {!isMobile && SVG_FRAMES.map((frameName, frameIdx) => {
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

                                {isMobile ? (
                                    <>
                                        <span
                                            className={styles.yearTextFull}
                                            ref={(el) => { yearTextFullRefs.current[posIndex] = el; }}
                                        >
                                            {yearData ? yearData.item.year.toString() : ''}
                                        </span>
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
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
                <div className={isMobile ? styles.mobileSpeakerProfileUnit : ''}>
                    <div className={styles.speakerImageContainer}>
                        <img src="/img/speakers/imageFrame.png" alt="Image Frame" className={styles.speakerImageFrame} />
                        <div key={`img-${activeSpeaker.id}`} className={styles.speakerImagePos}>
                            <div className={styles.glitchTarget} ref={imageRef}>
                                <img src={activeSpeaker.img} alt={activeSpeaker.name} className={styles.speakerImage} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.mobileSpeakerNav}>
                        <button
                            className={styles.mobileArrow}
                            onClick={() => setVirtualSpeakerIndex(virtualSpeakerIndex - 1)}
                            aria-label="Previous speaker"
                        >
                            <img src="/svg/speakers/arrows.svg" alt="Previous" className={styles.mobileArrowLeft} />
                        </button>

                        <div className={styles.mobileNameContainer}>
                            {!isMobile && <img src="/svg/speakers/mobileNameFrame.svg" alt="Name Frame" className={styles.mobileNameFrameImg} />}
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
                </div>
            )}
        </div>
    );
}
