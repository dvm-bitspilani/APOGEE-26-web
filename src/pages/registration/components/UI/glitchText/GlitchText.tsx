import styles from "./GlitchText.module.scss";
import { PowerGlitch } from "powerglitch";
import { useRef, useEffect } from "react";
import ApogeeText from "/img/registrations/apogee2026.png"

// interface PowerGlitchConfig {
//     playMode: "always" | "hover";
//     createContainers: boolean;
//     hideOverflow: boolean;
//     timing: { duration: number; iterations: number };
//     glitchTimeSpan: { start: number; end: number };
//     shake: { velocity: number; amplitudeX: number; amplitudeY: number };
//     slice: {
//         count: number;
//         velocity: number;
//         minHeight: number;
//         maxHeight: number;
//         hueRotate: boolean;
//     };
// }

function GlitchText() {
    // const containerRef = useRef<HTMLDivElement | null>(null);
    const text1Ref = useRef<HTMLImageElement | null>(null);
    // const text2Ref = useRef<HTMLHeadingElement | null>(null);

    // 1. Mouse Movement Logic (Opposite Move + 3D Tilt)
    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         if (!containerRef.current) return;

    //         const { innerWidth, innerHeight } = window;
    //         const x = e.clientX;
    //         const y = e.clientY;

    //         // --- CONFIGURATION ---
    //         const MOVE_FACTOR = -0.1; // Negative = Move Opposite
    //         const TILT_FACTOR = 8;    // How much it tilts (degrees)

    //         const centerX = innerWidth / 2;
    //         const centerY = innerHeight / 2;

    //         // 1. Calculate Distances
    //         const deltaX = x - centerX;
    //         const deltaY = y - centerY;

    //         // 2. Opposite Movement
    //         const moveX = deltaX * MOVE_FACTOR;
    //         const moveY = deltaY * MOVE_FACTOR;

    //         // 3. 3D Tilt (Look at cursor)
    //         // Percentage of screen position (-1 to +1)
    //         const xPercent = deltaX / centerX;
    //         const yPercent = deltaY / centerY;

    //         // RotateY tilts left/right (based on X position)
    //         // RotateX tilts up/down (based on Y position - inverted)
    //         const rotateY = xPercent * TILT_FACTOR;
    //         const rotateX = -yPercent * TILT_FACTOR;

    //         // 4. Apply Transform to Container
    //         // Note: perspective is crucial for the 3D effect
    //         containerRef.current.style.transform = `
    //     perspective(1000px)
    //     translate3d(${moveX}px, ${moveY}px, 0)
    //     rotateX(${rotateX}deg)
    //     rotateY(${rotateY}deg)
    //   `;
    //     };

    //     window.addEventListener("mousemove", handleMouseMove);
    //     return () => window.removeEventListener("mousemove", handleMouseMove);
    // }, []);

    // 2. Glitch Logic (Existing)
    useEffect(() => {
        if (text1Ref.current) {
            PowerGlitch.glitch(text1Ref.current, {
                playMode: "always",
                createContainers: true,
                hideOverflow: false,
                timing: {
                    duration: 2000,
                    iterations: Infinity,
                },
                // CHANGE THIS: 0 to 1 means it glitches 100% of the time
                glitchTimeSpan: {
                    start: 0.5,
                    end: 0.7,
                },
                shake: {
                    velocity: 15,
                    amplitudeX: 0.2,
                    amplitudeY: 0.2,
                },
                slice: {
                    count: 6,
                    velocity: 15,
                    minHeight: 0.02,
                    maxHeight: 0.15,
                    hueRotate: false, // Keep false for yellow
                },
            });
        }
    }, []);

    return (
        // We attach the movement ref to this container
        <div className={styles.container} >
            <img src={ApogeeText} className={styles.bannerText} alt="Apogee" ref={text1Ref} />
            {/* <h1 className={styles.bannerText} ref={text1Ref}>
                APOGEE
            </h1>
            <h1 className={styles.bannerText} ref={text2Ref}>
                2026
            </h1> */}
        </div>
    );
}

export default GlitchText;