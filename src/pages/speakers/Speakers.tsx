import styles from "./Speakers.module.scss";

export default function Speakers() {
    const years = ["24", "25", "2026", "82", "83"];
    const activeIndex = 2; // "2026" is active

    return (
        <div className={styles.speakersContainer}>
            {/* The base page background with blur */}
            <div className={styles.backgroundOverlay}></div>

            <div className={styles.header}>
                <h1 className={styles.title}>
                    SPEAKERS
                </h1>
            </div>

            {/* Wheel Section */}
            <div className={styles.wheelContainer}>
                <img src="/svg/speakers/frameEvents.svg" alt="Wheel Frame" className={styles.wheelFrameBg} />

                <div
                    className={styles.yearsWrapper}
                >
                    {years.map((year, index) => {
                        const isActive = index === activeIndex;
                        const rotations = [-45, -22, 0, 22, 44];
                        const rot = rotations[index];
                        return (
                            <div
                                key={year}
                                className={`${styles.yearNode} ${isActive ? styles.active : ''} ${styles[`pos${index}`]}`}
                            >
                                <img src="/svg/speakers/yearFrame.svg" alt="Year Frame" className={styles.yearBg} />
                                <span className={styles.yearText}>{year}</span>

                                <div
                                    className={`${styles.speakerLabelWrapper} ${isActive ? styles.activeLabel : ''}`}
                                    style={{ transform: `translateY(-50%) rotate(${-rot}deg)` }}
                                >
                                    <img
                                        src={isActive ? "/svg/speakers/activeSpeakerName.svg" : "/svg/speakers/speakerName.svg"}
                                        alt="Speaker Frame"
                                        className={styles.speakerLabelBg}
                                    />
                                    <span className={styles.speakerNameText}>
                                        {isActive ? "NAME SURNAME" : "PRANJAL GUPTA"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}
