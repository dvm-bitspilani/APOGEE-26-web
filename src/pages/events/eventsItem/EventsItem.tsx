import { useState, useEffect, useRef } from "react";
import styles from "./EventsItem.module.scss";
import NavButton from "../../registration/components/navButton/NavButton";
import { PowerGlitch } from "powerglitch";

export interface EventData {
    name: string;
    description: string;
    location: string;
    time: string;
    phone: string;
    unstop_url: string;
}

interface EventsItemProps {
    category: string;
    events: EventData[];
}

export default function EventsItem({ category, events }: EventsItemProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const glitchRef = useRef<any>(null);

    useEffect(() => {
        if (contentRef.current && !glitchRef.current) {
            glitchRef.current = PowerGlitch.glitch(contentRef.current, {
                playMode: "manual",
                createContainers: true,
                hideOverflow: false,
                timing: {
                    duration: 500,
                    iterations: 1,
                },
                shake: {
                    velocity: 10,
                    amplitudeX: 0.05,
                    amplitudeY: 0.05,
                },
                slice: {
                    count: 6,
                    velocity: 10,
                    minHeight: 0.02,
                    maxHeight: 0.1,
                    hueRotate: true,
                },
            });
        }
    }, [category]); // re-init if category changes significantly replacing the div

    useEffect(() => {
        if (glitchRef.current && glitchRef.current.startGlitch) {
            glitchRef.current.startGlitch();
            const timer = setTimeout(() => {
                if (glitchRef.current && glitchRef.current.stopGlitch) {
                    glitchRef.current.stopGlitch();
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, category]);

    if (!events || events.length === 0) return null;

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % events.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

    const currentEvent = events[currentIndex];

    return (
        <div className={styles.eventsItemContainer}>
            <div className={styles.mainLayout}>
                <div
                    className={`${styles.arrowContainer} ${events.length <= 1 ? styles.hiddenArrow : ""}`}
                    onClick={events.length > 1 ? handlePrev : undefined}
                >
                    <img
                        src="/svg/events/arrows.svg"
                        alt="Previous"
                        className={styles.arrowImg}
                        style={{ transform: "rotate(180deg)" }}
                    />
                </div>

                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.contentWrapper} ref={contentRef}>
                        <div className={styles.imageSection}>
                            <div className={styles.imageClipping}>
                                <img src="/img/events/sutt.jpeg" alt="Event" className={styles.eventImg} />
                            </div>
                            <img src="/svg/events/frame.svg" alt="Frame" className={styles.frameImg} />
                        </div>

                        <div className={styles.detailsSection}>
                            <div className={styles.glowBoxWrapper}>
                                <div className={styles.glowBox}></div>
                                <div className={styles.glowBoxInner}>
                                    <div className={styles.glowBoxBg}></div>
                                    <div className={styles.titleContainer}>

                                        <h2 className={styles.title}>
                                            <span className={styles.bracket}>[</span>
                                            {currentEvent.name}
                                            <span className={styles.bracket}>]</span>
                                        </h2>
                                    </div>
                                    <p className={styles.desc}>{currentEvent.description}</p>

                                    <div className={styles.infoGrid}>
                                        <div className={styles.infoItem}>
                                            <img src="/svg/events/loc.svg" alt="Location" className={styles.icon} />
                                            <span>{currentEvent.location}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <img src="/svg/events/time.svg" alt="Time" className={styles.icon} />
                                            <span>{currentEvent.time}</span>
                                        </div>
                                        <div className={styles.infoItem} style={{ gridColumn: "span 2" }}>
                                            <img src="/svg/events/call.svg" alt="Phone" className={styles.icon} />
                                            <span>{currentEvent.phone}</span>
                                        </div>
                                    </div>

                                    <div className={styles.actionContainer}>
                                        {currentEvent.unstop_url && (
                                            <NavButton
                                                innerClass={styles.registerBtn}
                                                onClick={() => {
                                                    window.open(currentEvent.unstop_url, "_blank", "noopener,noreferrer");
                                                }}
                                            >
                                                Register
                                            </NavButton>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.arrowContainer} ${events.length <= 1 ? styles.hiddenArrow : ""}`}
                    onClick={events.length > 1 ? handleNext : undefined}
                >
                    <img
                        src="/svg/events/arrows.svg"
                        alt="Next"
                        className={styles.arrowImg}
                    />
                </div>
            </div>
        </div>
    );
}
