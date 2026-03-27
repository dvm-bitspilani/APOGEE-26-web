import { useEffect, useRef, useState } from "react";
import styles from "./HamMobile.module.scss";
// import bg from "/img/ham/bg.png";
import luv from "/img/ham/luv_dvm.png";
import textBottom from "/img/ham/textBottom.png";
import gsap from "gsap";

function SvgEl() {
  return (
    <svg
      width="333"
      height="72"
      viewBox="0 0 333 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_649_278"
        maskUnits="userSpaceOnUse"
        x="-0.507812"
        y="0"
        width="334"
        height="72"
        fill="black"
      >
        <rect fill="white" x="-0.507812" width="334" height="72" />
        <path d="M331.492 1H30.2589L1.49219 71H312.543C317.44 46.9833 323.794 23.6071 331.492 1Z" />
      </mask>
      <path
        d="M331.492 1H30.2589L1.49219 71H312.543C317.44 46.9833 323.794 23.6071 331.492 1Z"
        fill="black"
        fillOpacity="0.3"
      />
      <g
        clipPath="url(#paint0_angular_649_278_clip_path)"
        data-figma-skip-parse="true"
        mask="url(#path-1-outside-1_649_278)"
      >
        <g transform="matrix(0 0.287657 -0.478013 0 771.546 -46.1446)">
          <foreignObject
            x="-1613.04"
            y="-1613.04"
            width="3226.08"
            height="3226.08"
          >
            <div
              // xmlns={"http://www.w3.org/1999/xhtml"}
              style={{
                background:
                  "conic-gradient(from 90deg,rgba(51, 231, 255, 1) 0deg,rgba(0, 0, 0, 1) 180.088deg,rgba(51, 231, 255, 1) 360deg)",
                height: "100%",
                width: "100%",
                opacity: 1,
              }}
            ></div>
          </foreignObject>
        </g>
      </g>
      <path
        d="M331.492 1L332.439 1.32234L332.889 0H331.492V1ZM30.2589 1V0H29.5887L29.334 0.619892L30.2589 1ZM1.49219 71L0.567245 70.6199L8.54731e-05 72H1.49219V71ZM312.543 71V72H313.36L313.523 71.1998L312.543 71ZM331.492 1V0H30.2589V1V2H331.492V1ZM30.2589 1L29.334 0.619892L0.567245 70.6199L1.49219 71L2.41713 71.3801L31.1839 1.38011L30.2589 1ZM312.543 71L313.523 71.1998C318.412 47.2245 324.754 23.8893 332.439 1.32234L331.492 1L330.546 0.67766C322.834 23.3249 316.469 46.7421 311.563 70.8002L312.543 71ZM1.49219 71V72H312.543V71V70H1.49219V71Z"
        data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.20000000298023224,&#34;g&#34;:0.90588235855102539,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.50024455785751343}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.20000000298023224,&#34;g&#34;:0.90588235855102539,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.50024455785751343}],&#34;transform&#34;:{&#34;m00&#34;:5.3940565122173600e-13,&#34;m01&#34;:-956.025878906250,&#34;m02&#34;:1249.5588378906250,&#34;m10&#34;:575.31481933593750,&#34;m11&#34;:5.1916419297262650e-13,&#34;m12&#34;:-333.80203247070312},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
        mask="url(#path-1-outside-1_649_278)"
      />
      <defs>
        <clipPath id="paint0_angular_649_278_clip_path">
          <path
            d="M331.492 1L332.439 1.32234L332.889 0H331.492V1ZM30.2589 1V0H29.5887L29.334 0.619892L30.2589 1ZM1.49219 71L0.567245 70.6199L8.54731e-05 72H1.49219V71ZM312.543 71V72H313.36L313.523 71.1998L312.543 71ZM331.492 1V0H30.2589V1V2H331.492V1ZM30.2589 1L29.334 0.619892L0.567245 70.6199L1.49219 71L2.41713 71.3801L31.1839 1.38011L30.2589 1ZM312.543 71L313.523 71.1998C318.412 47.2245 324.754 23.8893 332.439 1.32234L331.492 1L330.546 0.67766C322.834 23.3249 316.469 46.7421 311.563 70.8002L312.543 71ZM1.49219 71V72H312.543V71V70H1.49219V71Z"
            mask="url(#path-1-outside-1_649_278)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const whiteBars = [
  { top: "6%", num: 360 },
  { top: "24%", num: 320 },
  { top: "42%", num: 278 },
  { top: "58%", num: 118 },
  { top: "76%", num: 77 },
  { top: "92%", num: 36 },
];

const nameTOBar: Array<{ name: string; bar: number }> = [
  { name: "developers", bar: 4 },
  { name: "sponsors", bar: 12 },
  { name: "media partners", bar: 20 },
  { name: "state", bar: 28 },
  { name: "events", bar: 36 },
  { name: "contact us", bar: 45 },
];

export default function Ham() {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const mainSpeedRef = useRef<HTMLDivElement>(null);
  const luvRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const nameBoxesRef = useRef<HTMLDivElement[]>([]);
  const [barsAnimated, setbarsAnimated] = useState(0);
  const [entryAnim, setentryAnim] = useState(false);

  const onClickNameBars = (num: number) => {
    if (num > barsAnimated) {
      gsap
        .timeline({
          ease: "power2.out",
          onComplete: () => setbarsAnimated(num),
        })
        .to(barsRef.current.slice(barsAnimated, num), {
          backgroundColor: "#b301ff",
          boxShadow: "0px 0px 15px 0.5px #b301ff",
          stagger: 0.02,
        });
      gsap.to(sideBarRef.current, {
        backgroundPosition: `0% ${num * (100 / 48)}%`,
        duration: 0.02 * (num - barsAnimated),
      });
    } else {
      gsap
        .timeline({
          ease: "power2.out",
          onComplete: () => setbarsAnimated(num),
        })
        .to(barsRef.current.slice(num, barsAnimated), {
          backgroundColor: "#252727",
          boxShadow: "none",
          stagger: {
            each: 0.02,
            from: "end",
          },
        });
      gsap.to(sideBarRef.current, {
        backgroundPosition: `0% ${num * (100 / 48)}%`,
        duration: 0.02 * (barsAnimated - num),
      });
    }
  };

  useEffect(() => {
    const animBox = (ind: number) => {
      gsap.timeline({ ease: "power2.out" }).to(nameBoxesRef.current[ind], {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.3,
      });
    };
    const mainAnim = () => {
      gsap
        .timeline({
          ease: "power2.out",
          onComplete: () => {
            (setbarsAnimated(48), setentryAnim(true));
          },
        })
        .to(barsRef.current, {
          backgroundColor: "#b301ff",
          boxShadow: "0px 0px 15px 0.5px #b301ff",
          stagger: {
            each: 0.02,
            onStart: function (this: gsap.core.Tween) {
              const el = this.targets()[0] as HTMLDivElement;
              const index = barsRef.current.indexOf(el);
              if (index === 7) animBox(0);
              else if (index === 15) animBox(1);
              else if (index === 23) animBox(2);
              else if (index === 31) animBox(3);
              else if (index === 39) animBox(4);
              else if (index === 47) animBox(5);
            },
          },
        });
      gsap.to(sideBarRef.current, {
        backgroundPosition: `0% 100%`,
        duration: 1.4,
      });
    };

    gsap
      .timeline({
        defaults: { ease: "power1.inOut" },
        onComplete: mainAnim,
      })
      .fromTo(
        mainSpeedRef.current,
        { opacity: 0, scale: 0, x: -200 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.3,
        },
      )
      .fromTo(
        luvRef.current,
        { scale: 0, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2 },
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.scanlineoverlay}></div>
      {/* <img src={bg} alt="Ham" className={styles.bgImg} /> */}
      <div className={styles.innerCont} ref={mainSpeedRef}>
        <div className={styles.mainBox}>
          {nameTOBar.map((item, i) => (
            <div
              className={styles.box}
              key={i}
              ref={(el) => {
                if (el) nameBoxesRef.current[i] = el;
              }}
              onClick={() => {
                if (entryAnim) onClickNameBars(item.bar);
              }}
            >
              <SvgEl />
              <span>{item.name}</span>
              <img src={textBottom} alt="textBottom" />
            </div>
          ))}
        </div>
        <div className={styles.sideBox}>
          <div className={styles.lowerStyles}>
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                className={styles.bar}
                key={i}
                ref={(el) => {
                  if (el) barsRef.current[i] = el;
                }}
              ></div>
            ))}
            {whiteBars.map((bar, i) => (
              <div className={styles.whitebar} key={i} style={{ top: bar.top }}>
                <span>{bar.num}</span>
              </div>
            ))}
            <div className={styles.sideBar} ref={sideBarRef}></div>
            <div className={styles.sideBarGrey}></div>
          </div>
          <div className={styles.upperStyles}>
            <div className={styles.barsContainer}>
              {Array.from({ length: 32 }).map((_, i) => (
                <div className={styles.bar} key={i}></div>
              ))}
            </div>
            <div className={styles.angleBar}></div>
          </div>
        </div>
      </div>

      <div className={styles.luvBar} ref={luvRef}>
        Made with <img src={luv} alt="love" /> by DVM
      </div>
    </div>
  );
}
