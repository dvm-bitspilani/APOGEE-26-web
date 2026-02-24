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
    const [showContent, setShowContent] = useState(false);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);

    const handleCategoryClick = (category: string, element: HTMLElement) => {
        setOriginRect(element.getBoundingClientRect());
        setSelectedCategory(category);

        // Wait for the background expansion (0.6s) before showing content
        setTimeout(() => {
            setShowContent(true);
        }, 600);
    };

    const handleClose = () => {
        setShowContent(false);
        setSelectedCategory(null);
    };

    return (
        <div className={styles.eventsContainer}>
            {/* The base page background */}
            <div className={styles.backgroundOverlay}></div>

            {/* This div acts as the expanding background originating from the card.
                If selectedCategory is truthy, it appears and scales up */}
            <div
                className={`${styles.expandedBg} ${selectedCategory ? styles.show : ""}`}
                style={{
                    "--origin-top": originRect ? `${originRect.top}px` : "50%",
                    "--origin-left": originRect ? `${originRect.left}px` : "50%",
                    "--origin-width": originRect ? `${originRect.width}px` : "0px",
                    "--origin-height": originRect ? `${originRect.height}px` : "0px",
                } as React.CSSProperties}
            >
                <img src="/img/events/sample3.png" alt="background" />
                <div className={styles.expandedBgDarken}></div>
            </div>

            <div className={styles.header}>
                <h1
                    className={`${styles.title} ${selectedCategory ? styles.clickableTitle : ""}`}
                    onClick={() => selectedCategory && handleClose()}
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
                            onClick={(e) => handleCategoryClick(category, e.currentTarget)}
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
            {showContent && selectedCategory && (
                <EventsItem
                    category={selectedCategory}
                    events={DUMMY_EVENTS[selectedCategory] || []}
                />
            )}
        </div>
    );
}
