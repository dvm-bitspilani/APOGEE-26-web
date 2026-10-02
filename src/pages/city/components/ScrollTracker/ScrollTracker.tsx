import { useEffect, useRef } from "react";
import useDocumentVisible from "../../../../hooks/useDocumentVisible";
import { usePullProgressStore, useScrollStore } from "../../../../utils/store";
import { maxSequenceLength, stopPoints } from "../ScrollSync/ScrollSync";
import styles from "./ScrollTracker.module.scss";
import { THRESHOLD, MOBILE_THRESHOLD, isMobileDevice } from "../Modal/DirectionlUnlock";

export default function ScrollTracker() {
    const scroll = useScrollStore((s) => s.scroll);
    const trackerRef = useRef<HTMLDivElement>(null);
    const forceMeterRef = useRef<HTMLDivElement>(null);
    const visible = useDocumentVisible();

    useEffect(() => {
        if (!visible) return;
        let frameId: number;
        let previousOffset = -1;
        let previousPull = -1;
        const threshold = isMobileDevice() ? MOBILE_THRESHOLD : THRESHOLD;

        const loop = () => {
            if (trackerRef.current && forceMeterRef.current) {
                const offset = scroll?.offset ?? 0;
                const pull = usePullProgressStore.getState().pullProgress;
                if (offset !== previousOffset) trackerRef.current.style.width = `${offset * 100}%`;
                if (pull !== previousPull) forceMeterRef.current.style.width = `${Math.min(1, pull / threshold) * 100}%`;
                previousOffset = offset; previousPull = pull;
            }
            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, [scroll, visible]);

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