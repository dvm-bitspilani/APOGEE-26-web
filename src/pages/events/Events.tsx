import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.scss";
import EventsItem from "./eventsItem/EventsItem";
import { DUMMY_EVENTS } from "./eventsData";
import ReactHelmet from "../components/ReactHelmet";

const EVENT_CATEGORIES = [
    { name: "CODING", image: "/img/events/coding1.webp" },
    { name: "KERNEL", image: "/img/events/kernel.webp" },
    { name: "EXHIBITIONS", image: "/img/events/esummit1.webp" },
    { name: "COMPETITIONS", image: "/img/events/caseComp.webp" },
    { name: "ART & CINEMA", image: "/img/events/art.webp" },
    { name: "MISCELLANEOUS", image: "/img/events/misc1.webp" },
    { name: "TALKS & WORKSHOPS", image: "/img/events/exhibition1.webp" },
    { name: "GAMES & QUIZ", image: "/img/events/quiz.webp" },
];

export default function Events() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showContent, setShowContent] = useState(false);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const eventsData = DUMMY_EVENTS;
    useEffect(() => {
      if (!selectedCategory) return;
      const timer = setTimeout(() => setShowContent(true), 600);
      return () => clearTimeout(timer);
    }, [selectedCategory]);

    const handleCategoryClick = (category: string, element: HTMLElement) => {
        setOriginRect(element.getBoundingClientRect());
        setSelectedCategory(category);

    };

    const handleClose = () => {
        setShowContent(false);
        setSelectedCategory(null);
    };

    return (
        <>
            <ReactHelmet
                title="APOGEE '26 | Under Steel Skies | Events"
                description="Explore the various exciting events of APOGEE 2026."
                url="https://apogee2026.bits-apogee.org/events"
            />
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
                    <img src={EVENT_CATEGORIES.find(c => c.name === selectedCategory)?.image || "/img/events/sample3.webp"} alt="background" />
                    <div className={styles.expandedBgDarken}></div>
                </div>

                <div className={styles.header}>
                    <img
                        src="/img/events/backBtn.png"
                        role="button" tabIndex={0} aria-label={selectedCategory ? "Back to event categories" : "Back to home"}
                        onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectedCategory ? handleClose() : navigate("/"); } }}
                        alt="Back"
                        className={styles.backBtn}
                        onClick={selectedCategory ? handleClose : () => navigate("/")}
                    />
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
                                role="button" tabIndex={selectedCategory ? -1 : 0} aria-label={category.name}
                                onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); handleCategoryClick(category.name, event.currentTarget); } }}
                                onClick={(e) => handleCategoryClick(category.name, e.currentTarget)}
                            >
                                <div className={styles.cardInner}>
                                    <div className={styles.cardImageContainer}>
                                        <img
                                            decoding="async"
                                            src={category.image}
                                            alt={category.name}
                                            className={styles.cardImage}
                                        />
                                        <div className={styles.imageOverlay}></div>
                                    </div>

                                    <div className={styles.cardTextContainer}>
                                        <span className={`${styles.cardText} ${category.name.length > 12 ? styles.longText : ""}`}>
                                            <span className={styles.bra}>[</span>{category.name}<span className={styles.bra}>]</span>
                                        </span>
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
                        events={eventsData[selectedCategory] || []}

                    />
                )}
            </div>
        </>
    );
}

