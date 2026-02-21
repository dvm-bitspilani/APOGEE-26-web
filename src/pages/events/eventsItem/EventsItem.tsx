import { useState } from "react";
import styles from "./EventsItem.module.scss";
import NavButton from "../../registration/components/navButton/NavButton";

export interface EventData {
    name: string;
    description: string;
    location: string;
    time: string;
    phone: string;
}

interface EventsItemProps {
    category: string;
    events: EventData[];
}

export default function EventsItem({ category, events }: EventsItemProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

                <div className={styles.contentWrapper}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageClipping}>
                            <img src="/img/events/sample2.jpg" alt="Event" className={styles.eventImg} />
                        </div>
                        <img src="/svg/events/frame.svg" alt="Frame" className={styles.frameImg} />
                    </div>

                    <div className={styles.detailsSection}>
                        <div className={styles.glowBoxWrapper}>
                            <div className={styles.glowBox}></div>
                            <div className={styles.glowBoxInner}>
                                <h2 className={styles.title}>
                                    <span className={styles.bracket}>[</span>
                                    {category} - {currentEvent.name}
                                    <span className={styles.bracket}>]</span>
                                </h2>
                                <p className={styles.desc}>{currentEvent.description}</p>

                                <div className={styles.infoGrid}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.icon}>📍</span>
                                        <span>{currentEvent.location}</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.icon}>🕒</span>
                                        <span>{currentEvent.time}</span>
                                    </div>
                                    <div className={styles.infoItem} style={{ gridColumn: "span 2" }}>
                                        <span className={styles.icon}>📞</span>
                                        <span>{currentEvent.phone}</span>
                                    </div>
                                </div>

                                <div className={styles.actionContainer}>
                                    {/* <button className={styles.registerBtn}>
                                        <div className={styles.btnInner}>Register</div>
                                    </button> */}
                                    <NavButton
                                        onClick={() => { }}
                                    >Register
                                    </NavButton>
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
