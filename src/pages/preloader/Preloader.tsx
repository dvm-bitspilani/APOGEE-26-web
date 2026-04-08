import styles from "./Preloader.module.scss";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePreloaderStateStore, useSceneLoadedStore } from "../../utils/store";
// import assetList from "../../utils/assetList";
import { assetDetailList, totalAssetSize, totalImagesSize, totalModelsSize } from "../../utils/assetDetailList";
import SVG from "./SVG";
import { PowerGlitch } from "powerglitch";

gsap.registerPlugin(SplitText);

export default function Preloader() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLDivElement[]>([]);
  const launchRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const subContainerRef = useRef<HTMLDivElement>(null);
  const apogeeLogoRef = useRef<HTMLImageElement>(null);

  const splitTextRef = useRef<SplitText | null>(null);
  const splitText2Ref = useRef<SplitText | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const timeline2Ref = useRef<gsap.core.Timeline | null>(null);
  const hasRunText2AnimationRef = useRef(false);
  const keyListenerRef = useRef(false);

  const [animDone, setAnimDone] = useState(false);
  const [animDone2, setAnimDone2] = useState(false);
  const [assetloaded, setAssetloaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 && window.innerHeight / window.innerWidth > 1
  );
  const [loaderState, setLoaderState] = useState<0 | 1 | 2 | 3>(1);

  const sceneLoaded = useSceneLoadedStore((s) => s.loaded);
  const sceneProgress = useSceneLoadedStore((s) => s.progress);
  const setShowPreloader = usePreloaderStateStore((s) => s.setShowPreloader);

  // Get assets from assetDetailList instead of assetList
  const assets = assetDetailList.images;

  // ============ PRELOAD IMAGES WITH PROGRESS TRACKING ============
  useEffect(() => {
    if (!assets || assets.length === 0) {
      setAssetloaded(true);
      return;
    }

    let downloadedImageSize = 0;

    const preloadImage = (item: { path: string; size: number }): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          downloadedImageSize += item.size;
          updateCombinedProgress(downloadedImageSize);
          resolve();
        };
        img.src = item.path;
      });
    };

    const updateCombinedProgress = (imageDownloaded: number) => {
      const sceneContribution = (sceneProgress / 100) * totalModelsSize;
      const combinedDownloaded = imageDownloaded + sceneContribution;
      const combinedProgress = (combinedDownloaded / totalAssetSize) * 100;
      setProgress(combinedProgress);
    };

    Promise.all(assets.map(preloadImage)).then(() => {
      setAssetloaded(true);
    });
  }, [assets, sceneProgress]);

  // ============ UPDATE PROGRESS WHEN SCENE LOADS ============
  useEffect(() => {
    if (assetloaded) {
      const sceneContribution = (sceneProgress / 100) * totalModelsSize;
      const combinedProgress = ((totalImagesSize + sceneContribution) / totalAssetSize) * 100;
      setProgress(combinedProgress);
    }
  }, [sceneProgress, assetloaded]);

  // ============ FINALIZE PROGRESS AT 100% ============
  useEffect(() => {
    if (sceneLoaded && assetloaded) {
      setProgress(100);
    }
  }, [sceneLoaded, assetloaded]);

  // ============ GLITCH EFFECT ============
  useEffect(() => {
    if (!apogeeLogoRef.current || loaderState !== 3) return;

    const glitch = PowerGlitch.glitch(apogeeLogoRef.current, {
      playMode: "always",
      hideOverflow: true,
      timing: {
        duration: 1000,
        iterations: 1,
      },
      glitchTimeSpan: {
        start: 0,
        end: 0.6,
      },
      shake: {
        velocity: 30,
        amplitudeX: 0.35,
        amplitudeY: 0.35,
      },
      slice: {
        count: 8,
        velocity: 25,
      },
    });

    return () => glitch.stopGlitch();
  }, [loaderState]);

  // ============ MEDIA QUERY LISTENER ============
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px) and (aspect-ratio < 1/1)");

    const handleChange = (e: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  // ============ TEXT 1 ANIMATION (INDEPENDENT OF PROGRESS) ============
  useEffect(() => {
    if (!textRef.current) return;

    const childrenToSplit = Array.from(textRef.current.children).filter(
      (child) => child !== svgRef.current
    );
    const split = new SplitText(childrenToSplit, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });
    splitTextRef.current = split;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    gsap.set(split.chars, { display: "none" });
    gsap.set([textRef.current], { display: "block" });

    split.chars.forEach((char, i) => {
      if (i === 189) {
        tl.to(svgRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          WebkitClipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "none",
        }, i * 0.008);
      }

      tl.to(char, {
        display: "inline-block",
        duration: 0.008,
        ease: "none",
        onStart() {
          if (textRef.current) {
            textRef.current.scrollTop = textRef.current.scrollHeight;
          }
          const nextChar = split.chars[i];
          if (nextChar) {
            nextChar.innerHTML += `<span class="${styles.cursor}" id="cursor">█</span>`;
          }
        },
        onComplete() {
          const cursorEl = document.getElementById("cursor");
          if (cursorEl && i !== split.chars.length - 1) {
            cursorEl.remove();
          }
          if (i === split.chars.length - 1) {
            setAnimDone2(true);
            launchRef.current?.style.setProperty("opacity", "1");
          }
        },
      }, i * 0.008);
    });

    return () => {
      split.revert();
    };
  }, []);

  // ============ TEXT 2 ANIMATION (TRIGGER AFTER TEXT 1 + PROGRESS) ============
  useLayoutEffect(() => {
    if (hasRunText2AnimationRef.current) return;
    if (!textRef2.current[0] || progress <= 6.0) return;

    hasRunText2AnimationRef.current = true;

    const tl2 = gsap.timeline();
    timeline2Ref.current = tl2;

    tl2.set([textRef2.current], { display: "block" });

    const split2 = new SplitText(textRef2.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });
    splitText2Ref.current = split2;

    tl2.from(split2.chars, {
      display: "none",
      duration: 1,
      stagger: {
        each: 0.008,
        onStart: () => {
          textRef2.current.forEach((el) => {
            if (el) el.scrollTop = el.scrollHeight;
          });
        },
      },
      ease: "none",
      onComplete: () => {
        setAnimDone(true);
      },
    });

    return () => {
      split2.revert();
    };
  }, [progress]);

  // ============ LAUNCH HANDLER ============
  const onLaunch = async () => {
    console.log(progress)
    if (progress !== 100) return;
    setLoaderState(3);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    containerRef.current?.style.setProperty("opacity", "0");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowPreloader(false);
  };

  // ============ LAUNCH BUTTON & KEYBOARD LISTENER ============
  useEffect(() => {
    const isReady = animDone && sceneLoaded && animDone2 && assetloaded;

    if (isReady && launchRef.current && !keyListenerRef.current) {
      keyListenerRef.current = true;
      launchRef.current.style.pointerEvents = "auto";

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          onLaunch();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [animDone, sceneLoaded, animDone2, assetloaded]);

  // ============ CLEANUP ============
  useEffect(() => {
    return () => {
      splitText2Ref.current?.revert();
      timeline2Ref.current?.kill();
    };
  }, []);

  const renderAPOGEEArt = () => (
    <p style={{ whiteSpace: "pre" }} className={styles.figlet}>
      <span className={styles.filgetChild1}>{`    _____  ______   ____   ____   ____   ____  `}</span>
      <br />
      <span className={styles.filgetChild2}>{`    \\__  \\ \\____ \\ /  _ \\ / ___\\_/ __ \\_/ __ \\ `}</span>
      <br />
      <span className={styles.filgetChild3}>{`     / __ \\|  |_> >  <_> ) /_/  >  ___/\\  ___/ `}</span>
      <br />
      <span className={styles.filgetChild4}>{`    (____  /   __/ \\____/\\___  / \\___  >\\___  >`}</span>
      <br />
      <span className={styles.filgetChild5}>{`         \\/|__|         /_____/      \\/     \\/ `}</span>
      <br />
    </p>
  );

  return (
    <div className={styles.container} ref={containerRef}>
      {loaderState === 1 && (
        <div className={styles.subContainer} ref={subContainerRef}>
          <div className={styles.box}>
            <div className={styles.navbar}>{`>TERMINAL`}</div>
            <div
              className={styles.txtBox}
              ref={textRef}
              style={{ height: "auto", overflowY: "hidden" }}
            >
              <p className={styles.txtWhite}>LOADING&nbsp;RESOURCES...</p>

              {!isMobile ? renderAPOGEEArt() : renderAPOGEEArt()}

              <p className={styles.txtRed}>
                &nbsp;&nbsp;&nbsp;AN INTERACTIVE AUDIOVISUAL EXPERIENCE BY DVM
              </p>

              <div className={styles.svgDesign} ref={svgRef}>
                {Array.from({ length: 20 }, (_, i) => (
                  <SVG key={i} />
                ))}
              </div>

              <p className={styles.txtGreen}>{`>> INITIATING BOOT SEQUENCE...`}</p>
              <p className={styles.txtWhite}>BUILD VERSION: 11.04.26</p>
              <p className={styles.txtWhite}>SYSTEM MANUFACTURER: BITS PILANI</p>
              <p className={styles.txtWhite}>SYSTEM BOOT TIME: {`<SOON>`}</p>
              <p className={styles.txtWhite}>OS NAME: THREE.JS</p>
              <p className={styles.txtWhite}>FEST VERSION: 0.44.0</p>
              <p className={styles.txtGreen + " " + styles.customMargin}>{`>> A-SQUARE CITY --RUN...`}</p>
            </div>

            <div className={styles.launchBtn} ref={launchRef} onClick={onLaunch}>
              <span className={styles.launchText}>{progress === 100 ? `>>LAUNCH<<` : `>>LOADING<<`}</span>
              <div 
                className={`${styles.launchBtnBg} ${progress === 100 ? styles.active : ''}`} 
                style={{ '--progress': `${progress}%` } as React.CSSProperties} 
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.subBox}>
              <div className={styles.navbar}>{`>EVENTS`}</div>
              <div
                className={styles.txtBox}
                ref={(el) => {
                  if (el) textRef2.current[0] = el;
                }}
              >
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[11.04%]</span>
                <span className={styles.txtWhite}>Mini Fest</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[12.73%]</span>
                <span className={styles.txtWhite}>Inauguration</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[20.31%]</span>
                <span className={styles.txtWhite}>Aarohan</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[27.00%]</span>
                <span className={styles.txtWhite}>Paper Presentation</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[53.00%]</span>
                <span className={styles.txtWhite}>MicroMouse</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[99.00%]</span>
                <span className={styles.txtWhite}>Projection Mapping</span>
              </div>
            </div>

            <div className={styles.subBox}>
              <div className={styles.navbar}>{`>SETTINGS`}</div>
              <div
                className={styles.txtBox}
                ref={(el) => {
                  if (el) textRef2.current[1] = el;
                }}
              >
                <span className={styles.txtBlue + " " + styles.customDisplay}>MODE:</span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>[IN PROGRESS]</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[ACTIVE]</span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>EDITION:</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[40TH]</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[42ND]</span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>[44TH]</span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>THEME:</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[BIOPUNK]</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[STEAMPUNK]</span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>[CYBERPUNK]</span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>DEDUCTIONS:</span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>[WORTH IT]</span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>[NOT WORTH IT]</span>
              </div>
            </div>

            <div className={styles.subBox}>
              <div className={styles.navbar}>{`>WHOAMI`}</div>
              <div
                className={styles.txtBox}
                ref={(el) => {
                  if (el) textRef2.current[2] = el;
                }}
              >
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[FRONTEND]</span>
                <span className={styles.txtWhite}>Pranjal Ishaan Ansh Sumit Varun</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[3D MODELLING]</span>
                <span className={styles.txtWhite}>Jotswroop Tejasvi</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[DESIGN]</span>
                <span className={styles.txtWhite}>Raiyyan Vannya</span>
                <br />
                <span className={styles.txtWhite}>{`>>`}</span>
                <span className={styles.txtBlue}>[BACKEND]</span>
                <span className={styles.txtWhite}>Nishchay Rishit Medhansh Darsh</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {loaderState === 2 && (
        <div className={styles.logoContainer}>
          <img
            className={styles.dvmLogo}
            src="/img/preloader/dvm-pixelated.png"
            alt="DVM Logo"
          />
        </div>
      )}

      {loaderState === 3 && (
        <div className={styles.logoContainer}>
          <img
            src="apogee_w_spons.png"
            className={styles.apogeeLogo}
            ref={apogeeLogoRef}
            alt="APOGEE Logo"
          />
        </div>
      )}
    </div>
  );
}
