import styles from "./Preloader.module.scss";
// import figlet from "figlet";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";

export default function Preloader() {
  // const [text, setText] = useState("");
  // const [iteration, setIteration] = useState(0);
  const textRef = useRef<(HTMLParagraphElement|HTMLPreElement)[]>([]);
  const preRef = useRef<HTMLPreElement>(null);
  gsap.registerPlugin(SplitText);

  const asciiText = `
        █████████   ███████████     ███████      █████████  ██████████ ██████████
       ███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███  ███▒▒▒▒▒███   ███▒▒▒▒▒███▒▒███▒▒▒▒▒█▒▒███▒▒▒▒▒█
      ▒███    ▒███  ▒███    ▒███ ███     ▒▒███ ███     ▒▒▒  ▒███  █ ▒  ▒███  █ ▒ 
      ▒███████████  ▒██████████ ▒███      ▒███▒███          ▒██████    ▒██████   
      ▒███▒▒▒▒▒███  ▒███▒▒▒▒▒▒  ▒███      ▒███▒███    █████ ▒███▒▒█    ▒███▒▒█   
      ▒███    ▒███  ▒███        ▒▒███     ███ ▒▒███  ▒▒███  ▒███ ▒   █ ▒███ ▒   █
      █████   █████ █████        ▒▒▒███████▒   ▒▒█████████  ██████████ ██████████
      ▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒           ▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒ 

`;

  useEffect(() => {
    // const tl = gsap.timeline();

    // const split = new SplitText(preRef.current, {
    //   type: "chars",
    //   charsClass: "char",
    //   reduceWhiteSpace: false,
    // });
    // console.log(split.chars);

    // tl.from(split.chars, {
    //   display: "none",
    //   duration: 1,
    //   stagger: 0.005,
    //   ease: "none",
    // });
     const tl2 = gsap.timeline();
    const split2 = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "char",
      reduceWhiteSpace: false,
    });

    tl2.from(split2.chars, {
      display: "none",
      duration: 1,
      stagger: 0.009,
      ease: "none",
    });

    return () => split2.revert();
    // const doAnimation = () => {
    //   const el = textRef.current[iteration];
    //   if (!el) return;
    //   const width = el.innerText.length * 1.08;

    //   tl.fromTo(
    //     textRef.current[iteration],
    //     {
    //       width: "0",
    //     },
    //     {
    //       width: `${width}ch`,
    //       duration: 1,
    //       ease: SteppedEase.config(width * 1.5),
    //       onStart: () => {
    //         el.style.borderRight = "10px solid rgba(255,255,255,0.75)";
    //       },
    //       onComplete: () => {
    //         setTimeout(() => {
    //           el.style.border = "none";
    //           setIteration((prev) => prev + 1);
    //         }, 500);
    //       },
    //     },
    //     0,
    //   );

    //   tl.fromTo(
    //     textRef.current[iteration],
    //     {
    //       borderRightColor: "rgba(255,255,255,0.75)",
    //     },
    //     {
    //       borderRightColor: "rgba(255,255,255,0)",
    //       duration: 0.5,
    //       repeat: -1,
    //       ease: SteppedEase.config(37),
    //     },
    //     0,
    //   );

    //   tl.play();
    // };

    // doAnimation();

    // return () => {
    //   tl.kill();
    // };
  }, []);

  // useEffect(() => {
  //   const el = preRef.current;
  //   if (!el) return;

  //   const width = asciiText.length / 7.3;
  //   const tl = gsap.timeline({ paused: true });

  //   tl.fromTo(
  //     preRef.current,
  //     {
  //       width: "0",
  //       height: "0",
  //     },
  //     {
  //       width: `${width}ch`,
  //       height: "auto",
  //       duration: 1,
  //       ease: SteppedEase.config(width * 0.8),
  //       onStart: () => {
  //         el.style.borderRight = "10px solid rgba(255,255,255,0.75)";
  //       },
  //       onComplete: () => {
  //         // setTimeout(() => {
  //         el.style.border = "none";
  //         // }, 500);
  //       },
  //     },
  //     0,
  //   );

  //   tl.fromTo(
  //     preRef.current,
  //     {
  //       borderRightColor: "rgba(255,255,255,0.75)",
  //     },
  //     {
  //       borderRightColor: "rgba(255,255,255,0)",
  //       duration: 0.5,
  //       repeat: -1,
  //       ease: SteppedEase.config(37),
  //     },
  //     0,
  //   );

  //   tl.play();

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

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
          <div className={styles.txtBox}  ref={(el) => {
                if (el) textRef.current[0] = el;
              }}>
            <div
              className={styles.txtWhite}
              ref={(el) => {
                if (el) textRef.current[0] = el;
              }}
            >
              A-SQUARE&nbsp;CITY&nbsp;--RUN
            </div>
            <pre
              style={{
                whiteSpace: "pre",
              }}
              className={styles.figlet}
              ref={(el) => {
                if (el) textRef.current[1] = el;
              }}
            >
              <br />
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████████   ███████████     ███████      █████████  ██████████ ██████████</span><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███  ███▒▒▒▒▒███   ███▒▒▒▒▒███▒▒███▒▒▒▒▒█▒▒███▒▒▒▒▒█<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███    ▒███ ███     ▒▒███ ███     ▒▒▒  ▒███  █ ▒  ▒███  █ ▒ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███████████  ▒██████████ ▒███      ▒███▒███          ▒██████    ▒██████   <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███▒▒▒▒▒███  ▒███▒▒▒▒▒▒  ▒███      ▒███▒███    █████ ▒███▒▒█    ▒███▒▒█   <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒███    ▒███  ▒███        ▒▒███     ███ ▒▒███  ▒▒███  ▒███ ▒   █ ▒███ ▒   █<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████   █████ █████        ▒▒▒███████▒   ▒▒█████████  ██████████ ██████████<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒           ▒▒▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒<br />
<br />
            </pre>
            <div
              className={styles.txtRed}
              ref={(el) => {
                if (el) textRef.current[2] = el;
              }}
            >
              &nbsp;&nbsp;&nbsp;AN INTERACTIVE AUDIOVISUAL EXPERIENCE BY DVM
            </div>
            <svg
              width="694"
              height="30"
              viewBox="0 0 694 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.redDesign}
            >
              <g filter="url(#filter0_d_1233_1607)">
                <path
                  d="M5.80005 14.7998V5.7998H14.8V14.7998H5.80005Z"
                  fill="#E03A5B"
                />
                <path
                  d="M5.80005 14.7998V5.7998H14.8V14.7998H5.80005Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter1_d_1233_1607)">
                <path
                  d="M309.8 14.7998V5.7998H318.8V14.7998H309.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M309.8 14.7998V5.7998H318.8V14.7998H309.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter2_d_1233_1607)">
                <path
                  d="M157.8 14.7998V5.7998H166.8V14.7998H157.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M157.8 14.7998V5.7998H166.8V14.7998H157.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter3_d_1233_1607)">
                <path
                  d="M461.8 14.7998V5.7998H470.8V14.7998H461.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M461.8 14.7998V5.7998H470.8V14.7998H461.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter4_d_1233_1607)">
                <path
                  d="M81.8 14.7998V5.7998H90.8V14.7998H81.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M81.8 14.7998V5.7998H90.8V14.7998H81.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter5_d_1233_1607)">
                <path
                  d="M385.8 14.7998V5.7998H394.8V14.7998H385.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M385.8 14.7998V5.7998H394.8V14.7998H385.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter6_d_1233_1607)">
                <path
                  d="M233.8 14.7998V5.7998H242.8V14.7998H233.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M233.8 14.7998V5.7998H242.8V14.7998H233.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter7_d_1233_1607)">
                <path
                  d="M537.8 14.7998V5.7998H546.8V14.7998H537.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M537.8 14.7998V5.7998H546.8V14.7998H537.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter8_d_1233_1607)">
                <path
                  d="M612.8 14.7998V5.7998H621.8V14.7998H612.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M612.8 14.7998V5.7998H621.8V14.7998H612.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter9_d_1233_1607)">
                <path
                  d="M15.3 24.2998V15.2998H24.3V24.2998H15.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter10_d_1233_1607)">
                <path
                  d="M319.3 24.2998V15.2998H328.3V24.2998H319.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter11_d_1233_1607)">
                <path
                  d="M167.3 24.2998V15.2998H176.3V24.2998H167.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter12_d_1233_1607)">
                <path
                  d="M471.3 24.2998V15.2998H480.3V24.2998H471.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter13_d_1233_1607)">
                <path
                  d="M91.3 24.2998V15.2998H100.3V24.2998H91.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter14_d_1233_1607)">
                <path
                  d="M395.3 24.2998V15.2998H404.3V24.2998H395.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter15_d_1233_1607)">
                <path
                  d="M243.3 24.2998V15.2998H252.3V24.2998H243.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter16_d_1233_1607)">
                <path
                  d="M547.3 24.2998V15.2998H556.3V24.2998H547.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter17_d_1233_1607)">
                <path
                  d="M622.3 24.2998V15.2998H631.3V24.2998H622.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter18_d_1233_1607)">
                <path
                  d="M62.8 14.7998V5.7998H71.8V14.7998H62.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M62.8 14.7998V5.7998H71.8V14.7998H62.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter19_d_1233_1607)">
                <path
                  d="M366.8 14.7998V5.7998H375.8V14.7998H366.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M366.8 14.7998V5.7998H375.8V14.7998H366.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter20_d_1233_1607)">
                <path
                  d="M214.8 14.7998V5.7998H223.8V14.7998H214.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M214.8 14.7998V5.7998H223.8V14.7998H214.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter21_d_1233_1607)">
                <path
                  d="M518.8 14.7998V5.7998H527.8V14.7998H518.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M518.8 14.7998V5.7998H527.8V14.7998H518.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter22_d_1233_1607)">
                <path
                  d="M138.8 14.7998V5.7998H147.8V14.7998H138.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M138.8 14.7998V5.7998H147.8V14.7998H138.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter23_d_1233_1607)">
                <path
                  d="M442.8 14.7998V5.7998H451.8V14.7998H442.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M442.8 14.7998V5.7998H451.8V14.7998H442.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter24_d_1233_1607)">
                <path
                  d="M290.8 14.7998V5.7998H299.8V14.7998H290.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M290.8 14.7998V5.7998H299.8V14.7998H290.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter25_d_1233_1607)">
                <path
                  d="M594.8 14.7998V5.7998H603.8V14.7998H594.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M594.8 14.7998V5.7998H603.8V14.7998H594.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter26_d_1233_1607)">
                <path
                  d="M669.8 14.7998V5.7998H678.8V14.7998H669.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M669.8 14.7998V5.7998H678.8V14.7998H669.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter27_d_1233_1607)">
                <path
                  d="M72.3 24.2998V15.2998H81.3V24.2998H72.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter28_d_1233_1607)">
                <path
                  d="M376.3 24.2998V15.2998H385.3V24.2998H376.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter29_d_1233_1607)">
                <path
                  d="M224.3 24.2998V15.2998H233.3V24.2998H224.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter30_d_1233_1607)">
                <path
                  d="M528.3 24.2998V15.2998H537.3V24.2998H528.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter31_d_1233_1607)">
                <path
                  d="M148.3 24.2998V15.2998H157.3V24.2998H148.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter32_d_1233_1607)">
                <path
                  d="M452.3 24.2998V15.2998H461.3V24.2998H452.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter33_d_1233_1607)">
                <path
                  d="M300.3 24.2998V15.2998H309.3V24.2998H300.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter34_d_1233_1607)">
                <path
                  d="M604.3 24.2998V15.2998H613.3V24.2998H604.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter35_d_1233_1607)">
                <path
                  d="M679.3 24.2998V15.2998H688.3V24.2998H679.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter36_d_1233_1607)">
                <path
                  d="M24.8 14.7998V5.7998H33.8V14.7998H24.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M24.8 14.7998V5.7998H33.8V14.7998H24.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter37_d_1233_1607)">
                <path
                  d="M328.8 14.7998V5.7998H337.8V14.7998H328.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M328.8 14.7998V5.7998H337.8V14.7998H328.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter38_d_1233_1607)">
                <path
                  d="M176.8 14.7998V5.7998H185.8V14.7998H176.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M176.8 14.7998V5.7998H185.8V14.7998H176.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter39_d_1233_1607)">
                <path
                  d="M480.8 14.7998V5.7998H489.8V14.7998H480.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M480.8 14.7998V5.7998H489.8V14.7998H480.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter40_d_1233_1607)">
                <path
                  d="M100.8 14.7998V5.7998H109.8V14.7998H100.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M100.8 14.7998V5.7998H109.8V14.7998H100.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter41_d_1233_1607)">
                <path
                  d="M404.8 14.7998V5.7998H413.8V14.7998H404.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M404.8 14.7998V5.7998H413.8V14.7998H404.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter42_d_1233_1607)">
                <path
                  d="M252.8 14.7998V5.7998H261.8V14.7998H252.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M252.8 14.7998V5.7998H261.8V14.7998H252.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter43_d_1233_1607)">
                <path
                  d="M556.8 14.7998V5.7998H565.8V14.7998H556.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M556.8 14.7998V5.7998H565.8V14.7998H556.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter44_d_1233_1607)">
                <path
                  d="M631.8 14.7998V5.7998H640.8V14.7998H631.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M631.8 14.7998V5.7998H640.8V14.7998H631.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter45_d_1233_1607)">
                <path
                  d="M34.3 24.2998V15.2998H43.3V24.2998H34.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter46_d_1233_1607)">
                <path
                  d="M338.3 24.2998V15.2998H347.3V24.2998H338.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter47_d_1233_1607)">
                <path
                  d="M186.3 24.2998V15.2998H195.3V24.2998H186.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter48_d_1233_1607)">
                <path
                  d="M490.3 24.2998V15.2998H499.3V24.2998H490.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter49_d_1233_1607)">
                <path
                  d="M110.3 24.2998V15.2998H119.3V24.2998H110.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter50_d_1233_1607)">
                <path
                  d="M414.3 24.2998V15.2998H423.3V24.2998H414.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter51_d_1233_1607)">
                <path
                  d="M262.3 24.2998V15.2998H271.3V24.2998H262.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter52_d_1233_1607)">
                <path
                  d="M566.3 24.2998V15.2998H575.3V24.2998H566.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter53_d_1233_1607)">
                <path
                  d="M641.3 24.2998V15.2998H650.3V24.2998H641.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter54_d_1233_1607)">
                <path
                  d="M43.8 14.7998V5.7998H52.8V14.7998H43.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M43.8 14.7998V5.7998H52.8V14.7998H43.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter55_d_1233_1607)">
                <path
                  d="M347.8 14.7998V5.7998H356.8V14.7998H347.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M347.8 14.7998V5.7998H356.8V14.7998H347.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter56_d_1233_1607)">
                <path
                  d="M195.8 14.7998V5.7998H204.8V14.7998H195.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M195.8 14.7998V5.7998H204.8V14.7998H195.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter57_d_1233_1607)">
                <path
                  d="M499.8 14.7998V5.7998H508.8V14.7998H499.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M499.8 14.7998V5.7998H508.8V14.7998H499.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter58_d_1233_1607)">
                <path
                  d="M119.8 14.7998V5.7998H128.8V14.7998H119.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M119.8 14.7998V5.7998H128.8V14.7998H119.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter59_d_1233_1607)">
                <path
                  d="M423.8 14.7998V5.7998H432.8V14.7998H423.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M423.8 14.7998V5.7998H432.8V14.7998H423.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter60_d_1233_1607)">
                <path
                  d="M271.8 14.7998V5.7998H280.8V14.7998H271.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M271.8 14.7998V5.7998H280.8V14.7998H271.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter61_d_1233_1607)">
                <path
                  d="M575.8 14.7998V5.7998H584.8V14.7998H575.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M575.8 14.7998V5.7998H584.8V14.7998H575.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter62_d_1233_1607)">
                <path
                  d="M650.8 14.7998V5.7998H659.8V14.7998H650.8Z"
                  fill="#E03A5B"
                />
                <path
                  d="M650.8 14.7998V5.7998H659.8V14.7998H650.8Z"
                  stroke="#E03A5B"
                />
              </g>
              <g filter="url(#filter63_d_1233_1607)">
                <path
                  d="M53.3 24.2998V15.2998H62.3V24.2998H53.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter64_d_1233_1607)">
                <path
                  d="M357.3 24.2998V15.2998H366.3V24.2998H357.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter65_d_1233_1607)">
                <path
                  d="M205.3 24.2998V15.2998H214.3V24.2998H205.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter66_d_1233_1607)">
                <path
                  d="M509.3 24.2998V15.2998H518.3V24.2998H509.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter67_d_1233_1607)">
                <path
                  d="M129.3 24.2998V15.2998H138.3V24.2998H129.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter68_d_1233_1607)">
                <path
                  d="M433.3 24.2998V15.2998H442.3V24.2998H433.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter69_d_1233_1607)">
                <path
                  d="M281.3 24.2998V15.2998H290.3V24.2998H281.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter70_d_1233_1607)">
                <path
                  d="M585.3 24.2998V15.2998H594.3V24.2998H585.3Z"
                  fill="#E03A5B"
                />
              </g>
              <g filter="url(#filter71_d_1233_1607)">
                <path
                  d="M660.3 24.2998V15.2998H669.3V24.2998H660.3Z"
                  fill="#E03A5B"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1233_1607"
                  x="4.86374e-05"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_1233_1607"
                  x="304"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_1233_1607"
                  x="152"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_1233_1607"
                  x="456"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_1233_1607"
                  x="76"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter5_d_1233_1607"
                  x="380"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter6_d_1233_1607"
                  x="228"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter7_d_1233_1607"
                  x="532"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter8_d_1233_1607"
                  x="607"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter9_d_1233_1607"
                  x="10"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter10_d_1233_1607"
                  x="314"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter11_d_1233_1607"
                  x="162"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter12_d_1233_1607"
                  x="466"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter13_d_1233_1607"
                  x="86"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter14_d_1233_1607"
                  x="390"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter15_d_1233_1607"
                  x="238"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter16_d_1233_1607"
                  x="542"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter17_d_1233_1607"
                  x="617"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter18_d_1233_1607"
                  x="57"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter19_d_1233_1607"
                  x="361"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter20_d_1233_1607"
                  x="209"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter21_d_1233_1607"
                  x="513"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter22_d_1233_1607"
                  x="133"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter23_d_1233_1607"
                  x="437"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter24_d_1233_1607"
                  x="285"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter25_d_1233_1607"
                  x="589"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter26_d_1233_1607"
                  x="664"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter27_d_1233_1607"
                  x="67"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter28_d_1233_1607"
                  x="371"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter29_d_1233_1607"
                  x="219"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter30_d_1233_1607"
                  x="523"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter31_d_1233_1607"
                  x="143"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter32_d_1233_1607"
                  x="447"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter33_d_1233_1607"
                  x="295"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter34_d_1233_1607"
                  x="599"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter35_d_1233_1607"
                  x="674"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter36_d_1233_1607"
                  x="19"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter37_d_1233_1607"
                  x="323"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter38_d_1233_1607"
                  x="171"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter39_d_1233_1607"
                  x="475"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter40_d_1233_1607"
                  x="95"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter41_d_1233_1607"
                  x="399"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter42_d_1233_1607"
                  x="247"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter43_d_1233_1607"
                  x="551"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter44_d_1233_1607"
                  x="626"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter45_d_1233_1607"
                  x="29"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter46_d_1233_1607"
                  x="333"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter47_d_1233_1607"
                  x="181"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter48_d_1233_1607"
                  x="485"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter49_d_1233_1607"
                  x="105"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter50_d_1233_1607"
                  x="409"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter51_d_1233_1607"
                  x="257"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter52_d_1233_1607"
                  x="561"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter53_d_1233_1607"
                  x="636"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter54_d_1233_1607"
                  x="38"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter55_d_1233_1607"
                  x="342"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter56_d_1233_1607"
                  x="190"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter57_d_1233_1607"
                  x="494"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter58_d_1233_1607"
                  x="114"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter59_d_1233_1607"
                  x="418"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter60_d_1233_1607"
                  x="266"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter61_d_1233_1607"
                  x="570"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter62_d_1233_1607"
                  x="645"
                  y="-0.000195503"
                  width="20.6"
                  height="20.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter63_d_1233_1607"
                  x="48"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter64_d_1233_1607"
                  x="352"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter65_d_1233_1607"
                  x="200"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter66_d_1233_1607"
                  x="504"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter67_d_1233_1607"
                  x="124"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter68_d_1233_1607"
                  x="428"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter69_d_1233_1607"
                  x="276"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter70_d_1233_1607"
                  x="580"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter71_d_1233_1607"
                  x="655"
                  y="9.9998"
                  width="19.6"
                  height="19.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1233_1607"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1233_1607"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div
              className={styles.txtGreen}
              ref={(el) => {
                if (el) textRef.current[3] = el;
              }}
            >{`>> INITIATING BOOT SEQUENCE...`}</div>
            <p
              className={styles.txtWhite}
              ref={(el) => {
                if (el) textRef.current[4] = el;
              }}
            >
              BUILD VERSION: 10.04.26
            </p>
            <p className={styles.txtWhite} ref={(el) => {
                if (el) textRef.current[5] = el;
              }}>SYSTEM MANUFACTURER: BITS PILANI</p>
            <p className={styles.txtWhite} ref={(el) => {
                if (el) textRef.current[6] = el;
              }}>
              SYSTEM BOOT TIME: {`<DATE OF OPENING WEBSITE>`}
            </p>
            <p className={styles.txtWhite} ref={(el) => {
                if (el) textRef.current[7] = el;
              }}>OS NAME: THREE.JS</p>
            <p className={styles.txtWhite} ref={(el) => {
                if (el) textRef.current[8] = el;
              }}>FEST VERSION: 0.44.0</p>
            <p
              className={styles.txtGreen + " " + styles.customMargin}
              ref={(el) => {
                if (el) textRef.current[9] = el;
              }}
            >{`>> LOADING RESOURCES...`}</p>
          </div>
          <div className={styles.launchBtn}>{`>>LAUNCH<<`}</div>
        </div>
        <div className={styles.box}>
          <div className={styles.subBox}>
            <div className={styles.navbar}>{`>EVENTS`}</div>
            <div className={styles.txtBox}>
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
            <div className={styles.txtBox}>
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
            <div className={styles.txtBox}>
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
