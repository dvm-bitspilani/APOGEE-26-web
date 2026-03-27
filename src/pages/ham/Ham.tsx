import { useEffect, useRef, useState } from "react";
import styles from "./Ham.module.scss";
// import bg from "/img/ham/bg.png";
import dott from "/img/ham/dott.png";
import textBottom from "/img/ham/textBottom.png";
import luv from "/img/ham/luv_dvm.png";
import gsap from "gsap";
import HamMobile from "./HamMobile";

export default function Ham() {
  const [speedText, setspeedText] = useState(0);
  const [totalPurple, settotalPurple] = useState(0);
  const [width, setwidth] = useState(window.innerWidth < 650 ? false : true);
  const [totalSpeedPurple, settotalSpeedPurple] = useState(6);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speedDashTicksRef = useRef<HTMLDivElement[]>([]);
  const bigDashTicksRef = useRef<HTMLDivElement[]>([]);
  const radialCircle1Ref = useRef<HTMLDivElement>(null);
  const radialCircle2Ref = useRef<HTMLDivElement>(null);
  const speedDial = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 650) {
        setwidth(false);
      } else {
        setwidth(true);
      }
      return () => {
        removeEventListener("resize", () => {});
      };
    });
  }, []);

  const onUpdate = (duration: number, speedTicks?: number) => {
    const rot = gsap.getProperty(
      radialCircle1Ref.current,
      "rotation",
    ) as number;
    setspeedText(Math.round(((rot + 180) / 180) * 400));
    if (speedTicks) {
      bigDashTicksUpdate(duration, 0.5);
      speedDashTicksUpdate(speedTicks, 0.5);
    } else {
      speedDashTicksUpdate(Math.round(((rot + 180) / 180) * 6), duration);
      bigDashTicksUpdate(Math.round(((rot + 180) / 180) * 10), duration);
    }
  };
  const bigDashTicksUpdate = (toPurple: number, duration: number) => {
    const tickTL = gsap.timeline();
    const totalTicks = bigDashTicksRef.current.length;
    Array.from({ length: totalTicks }).forEach((_, i) => {
      const currentTick = totalPurple > toPurple ? totalTicks - i - 1 : i;
      tickTL.to(bigDashTicksRef.current[currentTick], {
        // duration: totalPurple > toPurple ? 0.5 / totalTicks : 0.5 / toPurple,
        duration: duration / totalTicks,
        opacity: () => (currentTick < toPurple ? 1 : 0),
      });
    });
    settotalPurple(toPurple);
  };
  const speedDashTicksUpdate = (toPurple: number, duration: number) => {
    const tickTL2 = gsap.timeline();
    const totalTicks = speedDashTicksRef.current.length;
    Array.from({ length: totalTicks }).forEach((_, i) => {
      const currentTick = totalSpeedPurple > toPurple ? totalTicks - i - 1 : i;
      tickTL2.to(speedDashTicksRef.current[currentTick], {
        // duration: totalPurple > toPurple ? 0.5 / totalTicks : 0.5 / toPurple,
        duration: duration / totalTicks,
        backgroundColor: () => (currentTick < toPurple ? "#b300ff" : "#4df4fc"),
        onStart: () => {
          speedDashTicksRef.current[currentTick].style.setProperty(
            `--afterBG${currentTick + 1}`,
            currentTick < toPurple ? "#b300ff" : "#4df4fc",
          );
        },
      });
    });
    settotalSpeedPurple(toPurple);
  };

  const nameTags = [
    {
      id: 1,
      label: "<\u00A0 developers",
      side: "Left",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: -36,
          duration: 0.5,
          onUpdate: () => onUpdate(3, 3),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -127, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 55, duration: 0.5 });
        // bigDashTicksUpdate(3);
        // speedDashTicksUpdate(3);
      },
    },
    {
      id: 2,
      label: "<\u00A0 contact us",
      side: "Left",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: -54.5,
          duration: 0.5,
          onUpdate: () => onUpdate(2, 2),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -145.5, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 36.5, duration: 0.5 });
        // bigDashTicksUpdate(2);
        // speedDashTicksUpdate(2);
      },
    },
    {
      id: 3,
      label: "<\u00A0\u00A0 state",
      side: "Left",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: -73,
          duration: 0.5,
          onUpdate: () => onUpdate(1, 1),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -164, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 18, duration: 0.5 });
        // bigDashTicksUpdate(1);
        // speedDashTicksUpdate(1);
      },
    },
    {
      id: 4,
      label: "media partners >",
      side: "Right",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: 36,
          duration: 0.5,
          onUpdate: () => onUpdate(7, 4),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -55, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 126, duration: 0.5 });
        // bigDashTicksUpdate(7);
        // speedDashTicksUpdate(4);
      },
    },
    {
      id: 5,
      label: "sponsors\u00A0\u00A0 >",
      side: "Right",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: 55,
          duration: 0.5,
          onUpdate: () => onUpdate(8, 5),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -36, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 145, duration: 0.5 });
        // bigDashTicksUpdate(8);
        // speedDashTicksUpdate(5);
      },
    },
    {
      id: 6,
      label: "events\u00A0 >",
      side: "Right",
      mouseEnter: () => {
        gsap.to(speedDial.current, {
          rotation: 73,
          duration: 0.5,
          onUpdate: () => onUpdate(9, 6),
        });
        gsap.to(radialCircle1Ref.current, { rotation: -18, duration: 0.5 });
        gsap.to(radialCircle2Ref.current, { rotation: 161, duration: 0.5 });
        // bigDashTicksUpdate(10);
        // speedDashTicksUpdate(6);
      },
    },
  ];

  // Function to display speed dash ticks based on mouse position
  // const displaySpeedDashTicks = (x: number, y: number) => {
  //   const theta = Math.atan2(y, x);
  //   const angle = (theta * 180) / Math.PI;
  //   const index = Math.round(
  //     ((180 - angle) / 180) * speedDashTicksRef.current.length,
  //   );
  //   speedDashTicksRef.current.forEach((tick, i) => {
  //     if (i > index) {
  //       tick.style.display = "none";
  //     } else {
  //       tick.style.display = "block";
  //     }
  //   });
  // };

  // useEffect(() => {
  //   displaySpeedDashTicks(0.72, 1.68);

  //   const onMove = (e: MouseEvent) => {
  //     displaySpeedDashTicks(
  //       (e.clientX / window.innerWidth) * 2 - 1,
  //       2 - (e.clientY / window.innerHeight) * 2,
  //     );
  //   };

  //   window.addEventListener("mousemove", onMove);
  //   return () => window.removeEventListener("mousemove", onMove);
  // }, []);

  useEffect(() => {
    const tl1 = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      onUpdate: () => onUpdate(0.02),
    });
    tl1
      .fromTo(
        radialCircle1Ref.current,
        { xPercent: -50, yPercent: -50, rotation: -180 },
        { rotation: -70, duration: 0.5 },
      )
      .to(radialCircle1Ref.current, { rotation: -120, duration: 0.5 })
      .to(radialCircle1Ref.current, { rotation: 0, duration: 0.5 });
    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .fromTo(
        speedDial.current,
        { xPercent: -50, yPercent: -100, rotation: -90 },
        { rotation: 20, duration: 0.5 },
      )
      .to(speedDial.current, { rotation: -30, duration: 0.5 })
      .to(speedDial.current, { rotation: 90, duration: 0.5 });
    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .fromTo(
        radialCircle2Ref.current,
        { xPercent: -50, yPercent: -50, rotation: 0 },
        { rotation: 110, duration: 0.5 },
      )
      .to(radialCircle2Ref.current, { rotation: 60, duration: 0.5 })
      .to(radialCircle2Ref.current, { rotation: 180, duration: 0.5 });
  }, []);

  return width ? (
    <div className={styles.container}>
      {/* <img src={bg} alt="Ham" className={styles.bgImg} /> */}
      <div className={styles.speedometer}>
        {/* Inner dash dash lines jo multiple hai */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`${styles[`dashCircle${i + 1}`]}`}></div>
        ))}

        {/* Speedometer speed */}
        <div className={styles.speedFont}>
          <span>{speedText}</span>
        </div>

        {/* Actual speedometer coloured bar */}
        <div className={styles.radialCircle1} ref={radialCircle1Ref}></div>

        {/* Actual speedometer transparent bar */}
        <div className={styles.radialCircle2} ref={radialCircle2Ref}></div>

        {/* Out of speedometer bar colour wala */}
        {/* <div className={styles.bigDashCircle}></div> */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`${styles[`bigDashTicks${i + 1}`]}`}
            ref={(el) => {
              if (el) bigDashTicksRef.current[i] = el;
            }}
          ></div>
        ))}

        {/* Out of speedometer bar uncolour wala */}
        <div className={styles.bigDashCircleBehind}></div>

        {/* Speedometer bar pe jo lines hai */}
        <div className={styles.speedoDashCircle}></div>

        {/* Speedometer bar ke uppar jo ticks hai purple wale */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${styles[`speedTick${i + 1}`]}`}
            ref={(el) => {
              if (el) speedDashTicksRef.current[i] = el;
            }}
          ></div>
        ))}

        {/* Speedometer ke andar ka bhadiya wala design */}
        <img src={dott} alt="dott" className={styles.dottedIMG} />

        {/* Speed dial */}
        <div className={styles.speedDial} ref={speedDial}>
          <svg
            width="12"
            height="200"
            viewBox="0 0 12 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C7.99944 -4.7716e-08 3.99908 0.0543932 0 0.163165L2.82646 200C5.01491 199.94 7.13721 199.911 9.32646 199.911L12 0Z"
              fill="url(#paint0_radial_615_230)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_615_230"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(135.231 -458.637 410.007 120.942 30.6524 441.535)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.389672" stopColor="#EEE100" />
                <stop offset="0.950824" stopColor="#B301FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Name tags saare */}
        {nameTags.map(({ id, label, side, mouseEnter }) => (
          <div
            key={id}
            className={styles[`nameTagCont${id}`]}
            onMouseEnter={() => {
              if (mouseEnter) {
                hoverTimeoutRef.current = setTimeout(() => {
                  mouseEnter();
                }, 200);
              }
            }}
            onMouseLeave={() => {
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
              }
            }}
          >
            <div className={styles[`nameTag${side}${id}`]}>
              <span>{label}</span>
              <img
                src={textBottom}
                alt="textBottom"
                className={styles.textBottomIMG}
              />
            </div>
            <div className={styles[`nameTagBG${id}`]}></div>
            <div className={styles[`nameTagBorder${side}${id}`]}></div>
          </div>
        ))}
      </div>
      <div className={styles.luvBar}>
        Made with <img src={luv} alt="love" /> by DVM
      </div>
    </div>
  ) : (
    <HamMobile />
  );
}
