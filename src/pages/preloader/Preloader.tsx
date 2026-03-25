import styles from "./Preloader.module.scss";
// import figlet from "figlet";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";
import { useEffect, useRef, useState } from "react";
import { usePreloaderStateStore, useSceneLoadedStore } from "../../utils/store";
import assetList from "../../utils/assetList";
import SVG from "./SVG";
import { PowerGlitch } from "powerglitch";

// interface PreloaderProps {
//   onLaunch?: () => void;
// }

export default function Preloader() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLDivElement[]>([]);
  const launchRef = useRef<HTMLDivElement>(null);
  const [animDone, setAnimDone] = useState(false);
  const [animDone2, setAnimDone2] = useState(false);
  const [assetloaded, setAssetloaded] = useState(false);
  const [progress, setProgress] = useState(0.0);
  const [prevIndex, setPrevIndex] = useState(0);
  const sceneLoaded = useSceneLoadedStore((s) => s.loaded);
  const sceneProgress = useSceneLoadedStore((s) => s.progress);
  const setShowPreloader = usePreloaderStateStore((s) => s.setShowPreloader);
  gsap.registerPlugin(SplitText);
  const splitTextRef = useRef<SplitText | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const [width, setwidth] = useState(
    window.innerWidth < 768 && window.innerHeight / window.innerWidth > 1
      ? true
      : false,
  );

  const assets = assetList["landing"];

  const totalAssets = assets.length;

  /*
    ? States:
    ? 1: Preloader, the terminal 
    ? 2: Show the dvm logo
    ? 3: APOGEE logo
    ? 0: Show nothing (for blink)
  */

  //@ts-ignore 
  const [loaderState, setLoaderState] = useState<0 | 1 | 2 | 3>(1);
  const subContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const apogeeLogoRef = useRef<HTMLImageElement>(null);

  const onLaunch = async () => {
    // subContainerRef.current?.style.setProperty("visibility", "hidden");
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // subContainerRef.current?.style.setProperty("visibility", "visible");
    // await new Promise((resolve) => setTimeout(resolve, 300));
    // setLoaderState(0);
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // setLoaderState(2)
    // await new Promise((resolve) => setTimeout(resolve, 750));
    // setLoaderState(0);
    // await new Promise((resolve) => setTimeout(resolve, 500));
    setLoaderState(3)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    containerRef.current?.style.setProperty("opacity", "0"); //? transition duration handled in SCSS file
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowPreloader(false);
  };

  useEffect(() => {
    //? Handles glitch for apogee logo
    if (!apogeeLogoRef.current || loaderState !== 3) return;

    const glitch = PowerGlitch.glitch(apogeeLogoRef.current, {
      playMode: "always",
      hideOverflow: true,

      timing: {
        duration: 1000,
        iterations: 1,
      },

      // 👇 Most glitch happens early
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
  })

  useEffect(() => {
    if (!assets) return;

    let loadedAssets = 0;

    // const preloadImage = (src: string) => {
    //   return new Promise<HTMLImageElement>((resolve, reject) => {
    //     const img = new Image();
    //     img.src = src;
    //     img.onload = () => {
    //       loadedAssets++;
    //       resolve(img);
    //     };
    //     img.onerror = reject;
    //   });
    // };

    // Promise.allSettled([...(assets.map(preloadImage) || [])]).then(() => {
    //   setAssetloaded(true);
    // })
    // .catch((err) => {
    //   console.error("Error preloading assets:", err);
    //   setAssetloaded(true);
    // });
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        // console.log(`>> IMAGE LOADED: ${src}`);
        loadedAssets++;
      };
      img.onerror = () => {
        // console.warn(`>> FAILED TO LOAD IMAGE: ${src}`);
        loadedAssets++;
      };
    });
    setAssetloaded(true);
  }, [assets, totalAssets]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px) and (aspect-ratio < 1/1)");

    const handleChange = (e: MediaQueryList) => {
      if (e.matches) {
        setwidth(true);
        setAnimDone(true);
        // console.log("Mobile mode activated");
      } else {
        setwidth(false);
      }
    };

    handleChange(media); // initial check
    media.addEventListener("change", () => handleChange(media));

    return () => media.removeEventListener("change", () => handleChange(media));
  });

  useEffect(() => {
    // console.log(`[Preloader] Scene progress: ${sceneProgress.toFixed(1)}%`);
    setProgress(parseFloat(sceneProgress.toFixed(1)));
  }, [sceneProgress]);

  useEffect(() => {
  const isReady = animDone && sceneLoaded && animDone2 && assetloaded;

  if (isReady && launchRef.current) {
    launchRef.current.style.opacity = "1";
    launchRef.current.style.pointerEvents = "auto";
    // Added Enter button functionality after everything is done
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onLaunch();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }
}, [animDone, sceneLoaded, animDone2, assetloaded]);

  useEffect(() => {
    if (!textRef.current) return;

    const childrenToSplit = Array.from(textRef.current.children).filter(
      (child) => child !== svgRef.current,
    );
    const split = new SplitText(childrenToSplit, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });
    splitTextRef.current = split;
    // console.log(split.chars);
    const tl = gsap.timeline();
    timelineRef.current = tl;

    gsap.set(split.chars, {
      display: "none",
    });

    const tl2 = gsap.timeline();

    tl2.set([textRef.current, textRef2.current], {
      display: "block",
    });

    const split2 = new SplitText(textRef2.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });

    tl2.from(split2.chars, {
      display: "none",
      duration: 1,
      stagger: {
        each: 0.008,
        onStart: function () {
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
      split.revert();
      split2.revert();
      tl2.kill();
    };
  }, []);

  useEffect(() => {
    if (!splitTextRef.current) return;

    const chars = splitTextRef.current.chars;
    const totalChars = chars.length;
    const targetIndex = Math.floor((progress / 100) * totalChars);

    if (targetIndex <= Math.floor(prevIndex) && targetIndex !== totalChars) {
      setPrevIndex((prev) => prev + 0.000001);
      return;
    }

    for (let i = Math.floor(prevIndex); i < targetIndex; i++) {
      // console.log(`Revealing char ${i} of ${totalChars}`);
      if (i == 189) {
        timelineRef.current?.to(svgRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          WebkitClipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "none",
        });
      }

      const char = chars[i];
      if (!char) continue;

      timelineRef.current?.to(char, {
        display: "inline-block",
        duration: 0.008,
        ease: "none",
        onStart() {
          if (textRef.current) {
            textRef.current.scrollTop = textRef.current.scrollHeight;
          }
          // cursorEl.style.left = target.getBoundingClientRect().right + "px";
          const nextChar = chars[i];
          if (nextChar) {
            nextChar.innerHTML += `<span class="${styles.cursor}" id="cursor">█</span>`;
          }
        },
        onComplete() {
          const cursorEl = document.getElementById("cursor");
          if (cursorEl && i !== chars.length - 1) {
            cursorEl.remove();
          }
          if (i === totalChars - 1) {
            setAnimDone2(true);
          }
        },
      });
    }

    setPrevIndex(targetIndex);
  }, [prevIndex]);

  // useEffect(() => {
  //   figlet.defaults({
  //     fontPath: "/font",
  //   });
  //   figlet.text("d", { font: "3D-ASCII" }, (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     setText(data ?? "");
  //   });
  // }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {
        loaderState == 1 &&
        <div className={styles.subContainer} ref={subContainerRef}>
          <div className={styles.box}>
            <div className={styles.navbar}>{`>TERMINAL`}</div>
            <div
              className={styles.txtBox}
              ref={textRef}
              style={{ height: "auto", overflowY: "hidden" }}
            >
              <p className={styles.txtWhite}>A-SQUARE&nbsp;CITY&nbsp;--RUN</p>
              {/* <pre
              style={{
                whiteSpace: "pre",
              }}
              className={styles.figlet}
            >
              {text}
            </pre> */}
              {/* <p
              style={{
                whiteSpace: "pre",
              }}
              className={styles.figlet}
            >
              <br />
<span className={styles.filgetChild1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████████   ███████████     ███████      █████████  ██████████ ██████████</span><br />
<span className={styles.filgetChild1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███  ███▒▒▒▒▒███   ███▒▒▒▒▒███▒▒███▒▒▒▒▒█▒▒███▒▒▒▒▒█</span><br />
<span className={styles.filgetChild2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███    ▒███ ███     ▒▒███ ███     ▒▒▒  ▒███  █ ▒  ▒███  █ ▒ </span><br />
<span className={styles.filgetChild3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███████████  ▒██████████ ▒███      ▒███▒███          ▒██████    ▒██████   </span><br />
<span className={styles.filgetChild3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███▒▒▒▒▒███  ▒███▒▒▒▒▒▒  ▒███      ▒███▒███    █████ ▒███▒▒█    ▒███▒▒█   </span><br />
<span className={styles.filgetChild4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███        ▒▒███     ███ ▒▒███  ▒▒███  ▒███ ▒   █ ▒███ ▒   █</span><br />
<span className={styles.filgetChild5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████   █████ █████        ▒▒▒███████▒   ▒▒█████████  ██████████ ██████████</span><br />
<span className={styles.filgetChild5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒           ▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒</span><br />
              <br />
            </p> */}
              {!width ? (
                <>
                  <p
                    style={{
                      whiteSpace: "pre",
                    }}
                    className={styles.figlet}
                  >
                    {/* <br /> */}
                    <span
                      className={styles.filgetChild1}
                    >{`    _____  ______   ____   ____   ____   ____  `}</span>
                    <br />
                    <span
                      className={styles.filgetChild2}
                    >{`    \\__  \\ \\____ \\ /  _ \\ / ___\\_/ __ \\_/ __ \\ `}</span>
                    <br />
                    <span
                      className={styles.filgetChild3}
                    >{`     / __ \\|  |_> >  <_> ) /_/  >  ___/\\  ___/ `}</span>
                    <br />
                    <span
                      className={styles.filgetChild4}
                    >{`    (____  /   __/ \\____/\\___  / \\___  >\\___  >`}</span>
                    <br />
                    <span
                      className={styles.filgetChild5}
                    >{`         \\/|__|         /_____/      \\/     \\/ `}</span>
                    <br />
                    {/* <br /> */}
                  </p>
                  <p className={styles.txtRed}>
                    &nbsp;&nbsp;&nbsp;AN INTERACTIVE AUDIOVISUAL EXPERIENCE BY DVM
                  </p>
                  {/* <p className={styles.redDesign}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                </p> */}
                  {/* <p className={styles.redDesign}>
                  &nbsp;&nbsp;▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚
                </p> */}
                  <div className={styles.svgDesign} ref={svgRef}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <SVG key={i} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p
                    style={{
                      whiteSpace: "pre",
                    }}
                    className={styles.figlet}
                  >
                    {/* <br /> */}
                    <span
                      className={styles.filgetChild1}
                    >{`  _____  ______   ____   ____   ____   ____  `}</span>
                    <br />
                    <span
                      className={styles.filgetChild2}
                    >{`  \\__  \\ \\____ \\ /  _ \\ / ___\\_/ __ \\_/ __ \\ `}</span>
                    <br />
                    <span
                      className={styles.filgetChild3}
                    >{`   / __ \\|  |_> >  <_> ) /_/  >  ___/\\  ___/ `}</span>
                    <br />
                    <span
                      className={styles.filgetChild4}
                    >{`  (____  /   __/ \\____/\\___  / \\___  >\\___  >`}</span>
                    <br />
                    <span
                      className={styles.filgetChild5}
                    >{`       \\/|__|         /_____/      \\/     \\/ `}</span>
                    <br />
                    {/* <br /> */}
                  </p>
                  <p className={styles.txtRed}>
                    &nbsp;{`AN INTERACTIVE AUDIOVISUAL EXPERIENCE BY DVM`}
                  </p>
                  {/* <p className={styles.redDesign}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                </p> */}
                  {/* <p className={styles.redDesign}>
                  &nbsp;&nbsp;▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚
                </p> */}
                  <p className={styles.svgDesign} ref={svgRef}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <SVG key={i} />
                    ))}
                  </p>
                </>
              )}
              <p
                className={styles.txtGreen}
              >{`>> INITIATING BOOT SEQUENCE...`}</p>
              <p className={styles.txtWhite}>BUILD VERSION: 11.04.26</p>
              <p className={styles.txtWhite}>SYSTEM MANUFACTURER: BITS PILANI</p>
              <p className={styles.txtWhite}>SYSTEM BOOT TIME: {`<SOON>`}</p>
              <p className={styles.txtWhite}>OS NAME: THREE.JS</p>
              <p className={styles.txtWhite}>FEST VERSION: 0.44.0</p>
              <p
                className={styles.txtGreen + " " + styles.customMargin}
              >{`>> LOADING RESOURCES...`}</p>
              {/* <span className={styles.cursor} id="cursor">█</span> */}
            </div>
            <div
              className={styles.launchBtn}
              ref={launchRef}
              onClick={onLaunch}
            >{`>>LAUNCH<<`}</div>
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
                {/* <span className={styles.cursor} id="cursor">█</span> */}
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
                <span className={styles.txtBlue + " " + styles.customDisplay}>
                  MODE:
                </span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>
                  [IN PROGRESS]
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [ACTIVE]
                </span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>
                  EDITION:
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [40TH]
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [42ND]
                </span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>
                  [44TH]
                </span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>
                  THEME:
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [BIOPUNK]
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [STEAMPUNK]
                </span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>
                  [CYBERPUNK]
                </span>
                <br />
                <span className={styles.txtBlue + " " + styles.customDisplay}>
                  DEDUCTIONS:
                </span>
                <span className={styles.txtSelected + " " + styles.customDisplay}>
                  [WORTH IT]
                </span>
                <span className={styles.txtWhite + " " + styles.customDisplay}>
                  [NOT WORTH IT]
                </span>
                <br />
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
                <span className={styles.txtWhite}>
                  Pranjal Ishaan Ansh Sumit Varun
                </span>
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
                <span className={styles.txtWhite}>
                  Nishchay Rishit Medhansh Darsh
                </span>
              </div>
            </div>
          </div>
        </div >
      }
      {
        loaderState == 2 &&
        <div className={styles.logoContainer}>
          <img className={styles.dvmLogo} src="/img/preloader/dvm-pixelated.png" alt="DVM Logo" />
        </div>
      }
      {
        loaderState == 3 &&
        <div className={styles.logoContainer}>
          <img src="apogee26logo.png" className={styles.apogeeLogo} ref={apogeeLogoRef} alt="ApogeeLogo"/>
        </div>
      }
    </div >
  );
}
