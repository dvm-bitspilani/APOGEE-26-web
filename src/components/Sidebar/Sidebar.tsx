import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

// Reusing Icons or importing them if I had them. Using placeholder text/simple SVGs for now inside helper components.
const SocialIcon = ({ type }: { type: string }) => (
    <div className={styles.socialIcon}>
        {/* Simple placeholder content based on type */}
        {type === 'youtube' && <span style={{ fontSize: '10px' }}>YT</span>}
        {type === 'instagram' && <span style={{ fontSize: '10px' }}>IG</span>}
        {type === 'facebook' && <span style={{ fontSize: '10px' }}>FB</span>}
    </div>
);

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 99, hours: 99, mins: 99 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, mins } = prev;
                if (mins > 0) mins--; else { mins = 59; hours--; }
                if (hours < 0) { hours = 23; days--; }
                return { days, hours, mins };
            });
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.timerSection}>
            <div className={styles.timerDisplay}>
                <span>{String(timeLeft.days).padStart(2, '0')}</span> :
                <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
                <span>{String(timeLeft.mins).padStart(2, '0')}</span>
            </div>
            <div className={styles.timerLabels}>
                <span>Days</span>
                <span>Hours</span>
                <span>Mins</span>
            </div>
        </div>
    );
}

const Sidebar = () => {
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.wingLeft}></div>
            <div className={styles.wingRight}></div>

            <Timer />

            <nav className={styles.navSection}>
                <div className={styles.sideDecoLeft}></div>
                <div className={styles.sideDecoRight}></div>

                <a href="/" className={`${styles.navItem} ${currentPath === "/" ? styles.active : ""}`}>Home</a>
                <a href="/about" className={`${styles.navItem} ${currentPath === "/about" ? styles.active : ""}`}>About Us</a>
                <a href="/events" className={`${styles.navItem} ${currentPath === "/events" ? styles.active : ""}`}>Events</a>
                <a href="/speakers" className={`${styles.navItem} ${currentPath === "/speakers" ? styles.active : ""}`}>Speakers</a>
                <a href="/contact-us" className={`${styles.navItem} ${currentPath.includes("contact") ? styles.active : ""}`}>Contact</a>
            </nav>

            <div className={styles.socialSection}>
                <SocialIcon type="youtube" />
                <SocialIcon type="instagram" />
                <SocialIcon type="facebook" />
            </div>
        </div>
    );
};

export default Sidebar;
