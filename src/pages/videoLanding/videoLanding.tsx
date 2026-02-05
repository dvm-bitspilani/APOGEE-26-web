import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import styles from './vidLanding.module.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const FRAME_PATH = '/videos/frames/frame_';

// Generate frame path with zero-padded number
const getFramePath = (index: number): string => {
    const paddedIndex = String(index).padStart(4, '0');
    return `${FRAME_PATH}${paddedIndex}.jpg`;
};

export default function VideoLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const frameRef = useRef({ current: 0 });

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFramePath(i);

            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoading(false);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoading(false);
                }
            };

            loadedImages.push(img);
        }
    }, []);

    // Enable scrolling for this page
    useEffect(() => {
        const root = document.getElementById('root');

        // Save original values
        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalRootOverflow = root ? root.style.overflow : '';
        const originalBodyHeight = document.body.style.height;
        const originalHtmlHeight = document.documentElement.style.height;
        const originalRootHeight = root ? root.style.height : '';

        // Apply scroll-enabling styles
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

    // Setup canvas and scroll animation
    useEffect(() => {
        if (images.length === 0 || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match first image dimensions
        const firstImage = images[0];
        canvas.width = firstImage.naturalWidth;
        canvas.height = firstImage.naturalHeight;

        // Draw initial frame
        const drawFrame = (index: number) => {
            const safeIndex = Math.max(0, Math.min(images.length - 1, Math.floor(index)));
            const img = images[safeIndex];
            if (img && img.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        drawFrame(0);

        // Smooth scroll effect using GSAP
        let currentFrame = 0;
        let targetFrame = 0;

        // Animation loop for smooth frame interpolation
        const animate = () => {
            // Lerp towards target frame for smooth effect
            currentFrame += (targetFrame - currentFrame) * 0.1;
            drawFrame(currentFrame);
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        // ScrollTrigger for frame scrubbing
        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            onUpdate: (self) => {
                targetFrame = self.progress * (FRAME_COUNT - 1);
                frameRef.current.current = targetFrame;
            },
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [images]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Loading indicator */}
            {isLoading && (
                <div className={styles.loader}>
                    <div className={styles.loaderContent}>
                        <div className={styles.loaderBar}>
                            <div
                                className={styles.loaderProgress}
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <span className={styles.loaderText}>Loading {loadProgress}%</span>
                    </div>
                </div>
            )}

            {/* Fixed canvas background */}
            <div className={styles.canvasContainer}>
                <canvas ref={canvasRef} className={styles.canvas} />
            </div>

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
    );
}