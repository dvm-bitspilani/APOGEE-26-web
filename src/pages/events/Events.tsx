import { useState } from "react";
import styles from "./Events.module.scss";
import EventsItem from "./eventsItem/EventsItem";
import { DUMMY_EVENTS } from "./eventsData";

const EVENT_CATEGORIES = [
    "CODING",
    "KERNEL",
    "EXHIBITIONS",
    "COMPETITIONS",
    "ART & CINEMA",
    "MISCELLANEOUS",
    "E SUMMIT",
    "GAMES & QUIZ",
];

export default function Events() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className={styles.eventsContainer}>
            {/* The base page background */}
            <div className={styles.backgroundOverlay}></div>

            {/* This div acts as the expanding background originating from the card.
                If selectedCategory is truthy, it appears and scales up */}
            <div className={`${styles.expandedBg} ${selectedCategory ? styles.show : ""}`}>
                <img src="/img/events/sample3.png" alt="background" />
                <div className={styles.expandedBgDarken}></div>
            </div>

            <div className={styles.header}>
                <h1
                    className={`${styles.title} ${selectedCategory ? styles.clickableTitle : ""}`}
                    onClick={() => selectedCategory && setSelectedCategory(null)}
                >
                    EVENTS
                </h1>
            </div>

            <div className={`${styles.carouselContainer} ${selectedCategory ? styles.hide : ""}`}>
                {EVENT_CATEGORIES.map((category, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.card}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardImageContainer}>
                                    {/* We use a sample image for all of them as requested */}
                                    <img
                                        src="/img/events/sample3.png"
                                        alt={category}
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>

                                <div className={styles.cardTextContainer}>
                                    <span className={styles.cardText}><span className={styles.bra}>[</span>{category}<span className={styles.bra}>]</span></span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Subpage implementation component */}
            {selectedCategory && (
                <EventsItem
                    category={selectedCategory}
                    events={DUMMY_EVENTS[selectedCategory] || []}
                />
            )}
        </div>
    );
}
