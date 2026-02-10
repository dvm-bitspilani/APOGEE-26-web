import styles from "./Preloader.module.scss";
// import figlet from "figlet";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";

export default function Preloader() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLDivElement[]>([]);
  const launchRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(SplitText);

  //   const asciiText = `
  //         █████████   ███████████     ███████      █████████  ██████████ ██████████
  //        ███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███  ███▒▒▒▒▒███   ███▒▒▒▒▒███▒▒███▒▒▒▒▒█▒▒███▒▒▒▒▒█
  //       ▒███    ▒███  ▒███    ▒███ ███     ▒▒███ ███     ▒▒▒  ▒███  █ ▒  ▒███  █ ▒
  //       ▒███████████  ▒██████████ ▒███      ▒███▒███          ▒██████    ▒██████
  //       ▒███▒▒▒▒▒███  ▒███▒▒▒▒▒▒  ▒███      ▒███▒███    █████ ▒███▒▒█    ▒███▒▒█
  //       ▒███    ▒███  ▒███        ▒▒███     ███ ▒▒███  ▒▒███  ▒███ ▒   █ ▒███ ▒   █
  //       █████   █████ █████        ▒▒▒███████▒   ▒▒█████████  ██████████ ██████████
  //       ▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒           ▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒

  // `;

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });

    // // grab the last span *before* SplitText mutates things
    // const lastSpan = textRef.current.querySelector("#cursor");
    // console.log(lastSpan);

    // // only animate chars NOT coming from the last span
    // const charsToAnimate = split.chars.filter((char) =>
    //   !lastSpan || !lastSpan.contains(char)
    // );

    tl.from(split.chars, {
      display: "none",
      duration: 1,
      stagger: 0.01,
      ease: "none",
    });
    const split2 = new SplitText(textRef2.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });

    // grab the last span *before* SplitText mutates things
    const lastSpan = textRef2.current[0].querySelector("#cursor");
    console.log(lastSpan);

    // only animate chars NOT coming from the last span
    const charsToAnimate = split2.chars.filter((char) =>
      !lastSpan || !lastSpan.contains(char)
    );
    

    tl2.from(charsToAnimate, {
      display: "none",
      duration: 1,
      stagger: 0.03,
      ease: "none",
      onComplete: () => {        
        if (launchRef.current) {
          launchRef.current.style.opacity = "1";
          launchRef.current.style.pointerEvents = "auto";
        }}
    });

    return () => {
      split2.revert();
      tl2.kill();
      tl.kill();
    };
  }, []);

  // useEffect(() => {
  //   figlet.defaults({
  //     fontPath: "/font",
  //   });
  //   figlet.text("b", { font: "3D-ASCII" }, (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     setText(data ?? "");
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.box}>
          <div className={styles.navbar}>{`>TERMINAL`}</div>
          <div className={styles.txtBox}
           ref={textRef}
           >
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
          <div className={styles.launchBtn} ref={launchRef}>{`>>LAUNCH<<`}</div>
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
