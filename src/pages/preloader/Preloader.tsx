import styles from "./Preloader.module.scss";
// import figlet from "figlet";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";
import { useEffect, useRef, useState } from "react";
import { useSceneLoadedStore } from "../../utils/store";

interface PreloaderProps {
  onLaunch?: () => void;
}

export default function Preloader({ onLaunch }: PreloaderProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLDivElement[]>([]);
  const launchRef = useRef<HTMLDivElement>(null);
  const [animDone, setAnimDone] = useState(false);
  const [animDone2, setAnimDone2] = useState(false);
  const [progress, setProgress] = useState(0.0);
  const [prevIndex, setPrevIndex] = useState(0);
  const sceneLoaded = useSceneLoadedStore((s) => s.loaded);
  const sceneProgress = useSceneLoadedStore((s) => s.progress);
  gsap.registerPlugin(SplitText);
  const splitTextRef = useRef<SplitText | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // console.log(`[Preloader] Scene progress: ${sceneProgress.toFixed(1)}%`);
    setProgress(parseFloat(sceneProgress.toFixed(1)));
  }, [sceneProgress]);

  useEffect(() => {
    if (animDone && sceneLoaded && launchRef.current && animDone2) {
      launchRef.current.style.opacity = "1";
      launchRef.current.style.pointerEvents = "auto";
    }
  }, [animDone, sceneLoaded, animDone2]);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });
    splitTextRef.current = split;
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Initially hide all characters
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
      stagger: 0.023,
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
    console.log(targetIndex);

    if (targetIndex <= Math.floor(prevIndex)  && targetIndex !== totalChars) {
      setPrevIndex((prev)=> prev + 0.000001);
      return;
    };

    for (let i = Math.floor(prevIndex); i < targetIndex; i++) {
      const char = chars[i];
      if (!char) continue;

      timelineRef.current?.to(char, {
        display: "inline-block",
        duration: 0.01,
        ease: "none",
        delay: i === 592 ? 0.4 : 0,
        onStart() {
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

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.box}>
          <div className={styles.navbar}>{`>TERMINAL`}</div>
          <div className={styles.txtBox} ref={textRef}>
            <p className={styles.txtWhite}>A-SQUARE&nbsp;CITY&nbsp;--RUN</p>
            <p
              style={{
                whiteSpace: "pre",
              }}
              className={styles.figlet}
            >
              <br />
<span className={styles.filgetChild1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████████   ███████████     ███████      █████████  ██████████ ██████████</span><br />
<span className={styles.filgetChild1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███  ███▒▒▒▒▒███   ███▒▒▒▒▒███▒▒███▒▒▒▒▒█▒▒███▒▒▒▒▒█</span><br />
<span className={styles.filgetChild2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███    ▒███ ███     ▒▒███ ███     ▒▒▒  ▒███  █ ▒  ▒███  █ ▒ </span><br />
<span className={styles.filgetChild3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███████████  ▒██████████ ▒███      ▒███▒███          ▒██████    ▒██████   </span><br />
<span className={styles.filgetChild3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███▒▒▒▒▒███  ▒███▒▒▒▒▒▒  ▒███      ▒███▒███    █████ ▒███▒▒█    ▒███▒▒█   </span><br />
<span className={styles.filgetChild4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███        ▒▒███     ███ ▒▒███  ▒▒███  ▒███ ▒   █ ▒███ ▒   █</span><br />
<span className={styles.filgetChild5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████   █████ █████        ▒▒▒███████▒   ▒▒█████████  ██████████ ██████████</span><br />
<span className={styles.filgetChild5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒           ▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒</span><br />
              <br />
            </p>
            <p className={styles.txtRed}>
              &nbsp;&nbsp;&nbsp;AN INTERACTIVE AUDIOVISUAL EXPERIENCE BY DVM
            </p>
            <p className={styles.redDesign}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚
            </p>
            <p
              className={styles.txtGreen}
            >{`>> INITIATING BOOT SEQUENCE...`}</p>
            <p className={styles.txtWhite}>BUILD VERSION: 10.04.26</p>
            <p className={styles.txtWhite}>SYSTEM MANUFACTURER: BITS PILANI</p>
            <p className={styles.txtWhite}>
              SYSTEM BOOT TIME: {`<DATE OF OPENING WEBSITE>`}
            </p>
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
              <span className={styles.txtBlue}>[VIDEO]</span>
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
      </div>
    </div>
  );
}
