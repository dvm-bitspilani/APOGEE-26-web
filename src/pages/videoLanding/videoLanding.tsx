import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import styles from './vidLanding.module.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const FRAME_COUNT = 160;
const FRAME_PATH = '/videos/frames_webp/f_';

// Generate frame path with zero-padded number (1-indexed: f_0001.webp to f_0160.webp)
const getFramePath = (index: number): string => {
    const paddedIndex = String(index).padStart(4, '0');
    return `${FRAME_PATH}${paddedIndex}.webp`;
};

export default function VideoLanding() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const smootherRef = useRef<ScrollSmoother | null>(null);

    // Preload all 192 images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFramePath(i);

            img.onload = () => {
                loadedCount++;
                // Store at 0-indexed position (frame_0001.jpg => index 0)
                loadedImages[i - 1] = img;
                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

                if (loadedCount === FRAME_COUNT) {
                    setImages([...loadedImages]);
                    setIsLoading(false);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages([...loadedImages]);
                    setIsLoading(false);
                }
            };
        }
    }, []);

    // Enable scrolling for this page
    useEffect(() => {
        const root = document.getElementById('root');

        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalRootOverflow = root ? root.style.overflow : '';
        const originalBodyHeight = document.body.style.height;
        const originalHtmlHeight = document.documentElement.style.height;
        const originalRootHeight = root ? root.style.height : '';

        document.body.style.overflow = 'visible';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflow = 'visible';
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.height = 'auto';
        document.documentElement.style.height = 'auto';

        if (root) {
            root.style.overflow = 'visible';
            root.style.overflowX = 'hidden';
            root.style.height = 'auto';
        }

        return () => {
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

    // Setup ScrollSmoother and frame animation
    useEffect(() => {
        if (images.length !== FRAME_COUNT || !canvasRef.current || !wrapperRef.current || !contentRef.current) {
            console.log('Waiting for images/refs:', { imagesLen: images.length, canvas: !!canvasRef.current, wrapper: !!wrapperRef.current, content: !!contentRef.current });
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Failed to get canvas context');
            return;
        }

        // Set canvas size to match first image dimensions
        const firstImage = images[0];
        if (firstImage && firstImage.naturalWidth > 0) {
            canvas.width = firstImage.naturalWidth;
            canvas.height = firstImage.naturalHeight;
            console.log('Canvas size set:', canvas.width, canvas.height);
        } else {
            // Fallback dimensions
            canvas.width = 1920;
            canvas.height = 1080;
            console.log('Using fallback canvas size');
        }

        // Frame object for GSAP animation
        const frameObj = { frame: 0 };

        // Draw frame function - uses all 192 frames (index 0-191)
        const drawFrame = () => {
            const frameIndex = Math.round(frameObj.frame);
            const safeIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));
            const img = images[safeIndex];
            if (img && img.complete && img.naturalWidth > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        // Draw initial frame immediately
        drawFrame();
        console.log('Initial frame drawn');

        // Initialize ScrollSmoother for smooth scrolling
        smootherRef.current = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });

        // Create ScrollTrigger animation for frame scrubbing with snap points
        // 5 sections = snap at 0, 0.25, 0.5, 0.75, 1
        gsap.to(frameObj, {
            frame: FRAME_COUNT - 1,
            ease: 'none',
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5,
                snap: {
                    snapTo: [0, 0.2, 0.4, 0.6, 0.8, 1], // Snap points for each section
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                    ease: 'power1.inOut',
                },
                onUpdate: () => {
                    drawFrame();
                },
            },
        });

        return () => {
            if (smootherRef.current) {
                smootherRef.current.kill();
            }
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [images]);

    return (
        <>
            {/* Preloader */}
            <div className={`${styles.preloader} ${!isLoading ? styles.preloaderHidden : ''}`}>
                <div className={styles.preloaderContent}>
                    <div className={styles.preloaderLogo}>
                        <span>APOGEE</span>
                    </div>
                    <div className={styles.preloaderBarContainer}>
                        <div className={styles.preloaderBar}>
                            <div
                                className={styles.preloaderProgress}
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <span className={styles.preloaderText}>{loadProgress}%</span>
                    </div>
                    <p className={styles.preloaderHint}>Loading experience...</p>
                </div>
            </div>

            {/* Fixed canvas background - OUTSIDE ScrollSmoother to stay truly fixed */}
            <div className={styles.canvasContainer}>
                <canvas ref={canvasRef} className={styles.canvas} />
            </div>

            {/* ScrollSmoother wrapper structure */}
            <div id="smooth-wrapper" ref={wrapperRef} className={styles.wrapper}>
                <div id="smooth-content" ref={contentRef} className={styles.smoothContent}>
                    {/* Scrollable content overlay */}
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h1>Video Landing</h1>
                            <p>Scroll down to explore</p>
                        </section>

                        <section className={styles.section}>
                            <h2>Section 2</h2>
                        </section>

                        <section className={styles.section}>
                            <h2>Section 3</h2>
                        </section>

                        <section className={styles.section}>
                            <h2>Section 4</h2>
                        </section>

                        <section className={styles.section}>
                            <h2>Final Section</h2>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}