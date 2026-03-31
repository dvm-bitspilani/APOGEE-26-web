import { useEffect, useRef } from "react";
import { usePullProgressStore, useScrollStore } from "../../../../utils/store";
import { maxSequenceLength, stopPoints } from "../ScrollSync/ScrollSync";
import styles from "./ScrollTracker.module.scss";
import { THRESHOLD, MOBILE_THRESHOLD, isMobileDevice } from "../Modal/DirectionlUnlock";

export default function ScrollTracker() {
    const scroll = useScrollStore((s) => s.scroll);
    const trackerRef = useRef<HTMLDivElement>(null);
    const forceMeterRef = useRef<HTMLDivElement>(null);
    const pullProgress = usePullProgressStore((s) => s.pullProgress);

    useEffect(() => {
        let frameId: number;

        const loop = () => {
            if (trackerRef.current && forceMeterRef.current) {
                trackerRef.current.style.width = `${scroll?.offset * 100}%`;
                forceMeterRef.current.style.width = `${(pullProgress/(isMobileDevice() ? MOBILE_THRESHOLD : THRESHOLD)) * 100}%`;
            }
            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, [scroll, pullProgress]);

    return (
        <div className={styles.trackerContainer}>
            <div className={styles.trackerWrapper}>
                <div className={styles.scrollTracker} ref={trackerRef} />
                <div className={styles.forceMeter} ref={forceMeterRef} />
                {
                    Object.entries(stopPoints).map(([section]) => (
                        <div
                            key={section}
                            className={styles.stopPoint}
                            style={{ left: `${(stopPoints["contact"] / maxSequenceLength) * 100}%` }}
                        >

                        </div>
                    ))
                }
            </div>
        </div>
    )
}