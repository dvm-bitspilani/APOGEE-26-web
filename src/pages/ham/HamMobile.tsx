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

const nameTOBar: Array<{ name: string; bar: number; url: string }> = [
  { name: "developers", bar: 4, url: "/developers" },
  { name: "sponsors", bar: 12, url: "/sponsors" },
  { name: "media partners", bar: 20, url: "/media-partners" },
  { name: "getting to pilani", bar: 28, url: "/getting-to-pilani" },
  { name: "events", bar: 36, url: "/events" },
  { name: "contact us", bar: 45, url: "/contact-us" },
];

export default function Ham() {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const mainSpeedRef = useRef<HTMLDivElement>(null);
  const luvRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const nameBoxesRef = useRef<HTMLDivElement[]>([]);
  const [barsAnimated, setbarsAnimated] = useState(0);
  const [entryAnim, setentryAnim] = useState(false);

  const onClickNameBars = (item: (typeof nameTOBar)[0]) => {
    const { bar: num, url } = item;
    if (num > barsAnimated) {
      gsap
        .timeline({
          ease: "power2.out",
          onComplete: () => {
            (setbarsAnimated(num), (window.location.href = url));
          },
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
          onComplete: () => {
            setbarsAnimated(num);
            // window.location.href = url;
          },
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
                if (entryAnim) onClickNameBars(item);
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
            <svg
              width="25"
              height="34"
              viewBox="0 0 25 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgBars}
            >
              <path
                d="M1.40039 33.4971L1.33105 33.5L1.26562 33.502L1.2373 33.4424L0.966797 32.8662L1.40039 33.4971ZM3.05078 33.4424L2.58691 33.458L0 29.6934L0.213867 29.3164L3.05078 33.4424ZM4.7002 33.3877L4.2373 33.4033L0.762695 28.3496L0.976562 27.9717L4.7002 33.3877ZM6.35059 33.334L5.8877 33.3486L1.52637 27.0059L1.74023 26.6279L6.35059 33.334ZM8.00098 33.2793L7.53711 33.2939L2.29004 25.6611L2.50391 25.2842L8.00098 33.2793ZM9.65039 33.2246L9.1875 33.2402L3.05273 24.3174L3.26758 23.9404L9.65039 33.2246ZM10.8135 32.4609L10.6299 32.8838L3.81641 22.9736L4.03125 22.5957L10.8135 32.4609ZM11.4658 30.9551L11.2822 31.3779L4.58008 21.6299L4.79492 21.252L11.4658 30.9551ZM12.1182 29.4492L11.9346 29.8721L5.34375 20.2852L5.55859 19.9082L12.1182 29.4492ZM12.7705 27.9443L12.5869 28.3672L6.10742 18.9414L6.32129 18.5645L12.7705 27.9443ZM13.4229 26.4385L13.2393 26.8613L6.87109 17.5977L7.08496 17.2207L13.4229 26.4385ZM14.0752 24.9326L13.8916 25.3555L7.63477 16.2539L7.84863 15.876L14.0752 24.9326ZM14.7275 23.4277L14.5449 23.8506L8.39746 14.9102L8.6123 14.5322L14.7275 23.4277ZM15.3799 21.9219L15.1973 22.3447L9.16113 13.5654L9.37598 13.1885L15.3799 21.9219ZM16.0322 20.416L15.8496 20.8389L9.9248 12.2217L10.1396 11.8447L16.0322 20.416ZM16.6846 18.9111L16.502 19.334L10.6885 10.8779L10.9033 10.5L16.6846 18.9111ZM17.3379 17.4053L17.1543 17.8281L11.4521 9.53418L11.666 9.15625L17.3379 17.4053ZM17.9902 15.8994L17.8066 16.3223L12.2158 8.19043L12.4297 7.8125L17.9902 15.8994ZM18.6426 14.3945L18.459 14.8174L12.9795 6.8457L13.1934 6.46875L18.6426 14.3945ZM19.2949 12.8887L19.1113 13.3115L13.7422 5.50195L13.957 5.125L19.2949 12.8887ZM19.9473 11.3828L19.7637 11.8057L14.5059 4.1582L14.7207 3.78027L19.9473 11.3828ZM20.5996 9.87793L20.416 10.3008L15.2695 2.81445L15.4844 2.43652L20.5996 9.87793ZM21.252 8.37207L21.0693 8.79492L16.0332 1.46973L16.2471 1.09277L21.252 8.37207ZM21.9043 6.86621L21.7217 7.28906L16.7969 0.125977L16.8408 0.0498047L16.8701 0H17.1836L21.9043 6.86621ZM22.5566 5.36133L22.374 5.78418L18.3975 0H18.8711L22.5566 5.36133ZM23.209 3.85547L23.0264 4.27832L20.085 0H20.5586L23.209 3.85547ZM23.8623 2.34961L23.6787 2.77246L21.7725 0H22.2461L23.8623 2.34961ZM24.5146 0.844727L24.3311 1.26758L23.46 0H23.9336L24.5146 0.844727Z"
                fill="#252727"
              />
            </svg>

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
