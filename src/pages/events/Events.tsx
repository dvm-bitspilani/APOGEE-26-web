import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.scss";
import EventsItem from "./eventsItem/EventsItem";
import { fetchEvents } from "./eventsService";
import type { EventData } from "./eventsItem/EventsItem";
import EventPreLoader from "./components/eventPreLoader/EventPreLoader";

const EVENT_CATEGORIES = [
    { name: "CODING", image: "/img/events/coding1.png" },
    { name: "KERNEL", image: "/img/events/kernel.png" },
    { name: "EXHIBITIONS", image: "/img/events/esummit1.png" },
    { name: "COMPETITIONS", image: "/img/events/caseComp.png" },
    { name: "ART & CINEMA", image: "/img/events/art.png" },
    { name: "MISCELLANEOUS", image: "/img/events/misc1.png" },
    { name: "TALKS & WORKSHOPS", image: "/img/events/exhibition1.png" },
    { name: "GAMES & QUIZ", image: "/img/events/quiz.png" },
];

const PRELOAD_IMAGES = [
    "/img/events/bg.png",
    "/img/events/backBtn.png",
    "/img/events/sample3.png",
    "/img/events/sutt.jpeg",
    "/svg/events/arrows.svg",
    "/svg/events/frame.svg",
    "/svg/events/loc.svg",
    "/svg/events/time.svg",
    "/svg/events/call.svg",
    ...EVENT_CATEGORIES.map(c => c.image)
];

export default function Events() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showContent, setShowContent] = useState(false);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const [eventsData, setEventsData] = useState<Record<string, EventData[]>>({});
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadAll = async () => {
            const totalItems = PRELOAD_IMAGES.length + 1; // +1 for API call
            let loadedItems = 0;

            const incrementProgress = () => {
                loadedItems++;
                setProgress((loadedItems / totalItems) * 100);
            };

            // 1. Fetch Events Data
            const dataPromise = fetchEvents().then((data) => {
                console.log("Events data loaded in component:", data);
                setEventsData(data);
                incrementProgress();
                return data;
            });

            // 2. Preload Images
            const imagePromises = PRELOAD_IMAGES.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        incrementProgress();
                        resolve(src);
                    };
                    img.onerror = () => {
                        incrementProgress(); // Count even if it fails to avoid getting stuck
                        resolve(src);
                    };
                });
            });

            await Promise.all([dataPromise, ...imagePromises]);
            
            // Artificial delay to show "ACESS GRANTED" state if sequence is too fast
            setTimeout(() => {
                setLoading(false);
            }, 600);
        };

        loadAll();
    }, []);

    const handleCategoryClick = (category: string, element: HTMLElement) => {
        console.log("Category clicked:", category);
        console.log("Events for this category:", eventsData[category]);
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

            {loading && <EventPreLoader loading={loading} progress={progress} />}

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
                <img src={EVENT_CATEGORIES.find(c => c.name === selectedCategory)?.image || "/img/events/sample3.png"} alt="background" />
                <div className={styles.expandedBgDarken}></div>
            </div>

            <div className={styles.header}>
                <img
                    src="/img/events/backBtn.png"
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
                            onClick={(e) => handleCategoryClick(category.name, e.currentTarget)}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardImageContainer}>
                                    <img
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
    );
}

