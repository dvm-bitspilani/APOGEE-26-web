// @ts-expect-error ScrollyVideo does not have types
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';
import styles from './vidLanding.module.scss';

import { useEffect } from 'react';

export default function VideoLanding() {
    useEffect(() => {
        // Enable scrolling for this page
        const root = document.getElementById('root');
        
        // Save original values
        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalRootOverflow = root ? root.style.overflow : '';
        const originalBodyHeight = document.body.style.height;
        const originalHtmlHeight = document.documentElement.style.height;
        const originalRootHeight = root ? root.style.height : '';

        // Apply new styles
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.height = 'auto';
        document.documentElement.style.height = 'auto';
        
        if (root) {
            root.style.overflow = 'auto';
            root.style.height = 'auto';
        }

        return () => {
            // Restore default (hidden for R3F pages)
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.height = originalBodyHeight;
            document.documentElement.style.height = originalHtmlHeight;
            
            if (root) {
                root.style.overflow = originalRootOverflow;
                root.style.height = originalRootHeight;
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <ScrollyVideo
                    src="/videos/landingBg.mp4"
                    transitionSpeed={8} // Smooth scrubbing
                    frameThreshold={0.1}
                    useWebCodecs={true}
                />
            </div>
            <div className={styles.content}>
                <h1>Video Landing</h1>
                <div style={{ height: '200vh' }}></div> {/* Spacer to allow scrolling */}
            </div>
        </div>
    );
}