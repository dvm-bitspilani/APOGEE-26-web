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
  { top: "6%", num: 81 },
  { top: "24%", num: 65 },
  { top: "42%", num: 50 },
  { top: "58%", num: 36 },
  { top: "76%", num: 21 },
  { top: "92%", num: 7 },
];

const nameTOBar: Array<{ name: string; bar: number; url: string }> = [
  { name: "developers", bar: 4, url: "/developers" },
  { name: "sponsors", bar: 12, url: "/sponsors" },
  { name: "media partners", bar: 20, url: "/media-partners" },
  { name: "getting to pilani", bar: 28, url: "/getting-to-pilani" },
  { name: "events", bar: 36, url: "/events" },
  { name: "brochure", bar: 45, url: "/contact-us" },
];

export default function Ham() {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const mainSpeedRef = useRef<HTMLDivElement>(null);
  const luvRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const nameBoxesRef = useRef<HTMLDivElement[]>([]);
  const [barsAnimated, setbarsAnimated] = useState(0);
  const [entryAnim, setentryAnim] = useState(false);
  const [numOfBars, setnumOfBars] = useState(0);

  const onClickNameBars = (item: (typeof nameTOBar)[0]) => {
    const { bar: num, url } = item;
    if (num > barsAnimated) {
      gsap
        .timeline({
          ease: "power2.out",
          onComplete: () => {
            setbarsAnimated(num);
            window.location.href = url;
          },
        })
        .to(barsRef.current.slice(barsAnimated, num), {
          backgroundColor: "#b301ff",
          boxShadow: "0px 0px 15px 0.5px #b301ff",
          stagger: {
            each: 0.02,
            onStart: function () {
              setnumOfBars((prev) => prev + 1);
            },
          },
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
            window.location.href = url;
          },
        })
        .to(barsRef.current.slice(num, barsAnimated), {
          backgroundColor: "#252727",
          boxShadow: "none",
          stagger: {
            each: 0.02,
            from: "end",
            onStart: function () {
              setnumOfBars((prev) => prev - 1);
            },
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
              setnumOfBars(index + 1);
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
        <div className={styles.statCards}>
          <div className={styles.statCard}>
            <span className={styles.statCard_Label}>TIRE_TEMP</span>
            <span
              className={`${styles.statCardValue} ${styles.statCardValueCyan}`}
            >
              {Math.floor((numOfBars / 48) * 87)}°C
            </span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statCard_Label}>G_FORCE</span>
            <span
              className={`${styles.statCardValue} ${styles.statCardValuePink}`}
            >
              {((numOfBars / 48) * 1.42).toFixed(2)}G
            </span>
          </div>
        </div>
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
            {/* <svg
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgBars}
            >
              <g filter="url(#filter0_d_684_383)">
                <path
                  d="M5.57324 25.4951L5.29492 25.5039L5.23633 25.5059L5.21094 25.4609L4.49316 24.1611L5.57324 25.4951ZM7.05176 25.4541L6.20215 25.4775L4 22.7568L4.39355 22.1689L7.05176 25.4541ZM8.53125 25.4131L7.68164 25.4365L4.68457 21.7334L5.07812 21.1455L8.53125 25.4131ZM10.0107 25.3711L9.16016 25.3955L5.36914 20.7109L5.7627 20.1221L10.0107 25.3711ZM11.4893 25.3301L10.6396 25.3535L6.05371 19.6875L6.44629 19.0996L11.4893 25.3301ZM12.9688 25.2881L12.1182 25.3125L6.7373 18.665L7.13086 18.0762L12.9688 25.2881ZM13.8789 24.5449L13.543 25.2041L7.42188 17.6416L7.81543 17.0537L13.8789 24.5449ZM14.4639 23.3984L14.1279 24.0576L8.10645 16.6182L8.5 16.0293L14.4639 23.3984ZM15.0488 22.252L14.7129 22.9111L8.79102 15.5947L9.18457 15.0059L15.0488 22.252ZM15.6338 21.1064L15.2979 21.7646L9.47559 14.5713L9.86816 13.9834L15.6338 21.1064ZM16.2188 19.96L15.8818 20.6191L10.1592 13.5488L10.5527 12.96L16.2188 19.96ZM16.8027 18.8145L16.4668 19.4727L10.8438 12.5254L11.2363 11.9375L16.8027 18.8145ZM17.3877 17.668L17.0518 18.3262L11.5283 11.502L11.9209 10.9141L17.3877 17.668ZM17.9727 16.5215L17.6367 17.1807L12.2119 10.4785L12.6055 9.89062L17.9727 16.5215ZM18.5576 15.376L18.2217 16.0332L12.8965 9.45508L13.29 8.86719L18.5576 15.376ZM19.1426 14.2295L18.8057 14.8877L13.5811 8.43262L13.9746 7.84473L19.1426 14.2295ZM19.7266 13.083L19.3906 13.7422L14.2656 7.40918L14.6582 6.82129L19.7266 13.083ZM20.3115 11.9365L19.9756 12.5957L14.9492 6.38672L15.3428 5.79785L20.3115 11.9365ZM20.8965 10.79L20.5605 11.4492L15.6338 5.36328L16.0273 4.77441L20.8965 10.79ZM21.4814 9.64453L21.1455 10.3027L16.3184 4.33887L16.7119 3.75098L21.4814 9.64453ZM22.0664 8.49805L21.7305 9.15625L17.0029 3.31641L17.3965 2.72852L22.0664 8.49805ZM22.6504 7.35254L22.3145 8.01074L17.6875 2.29297L18.0801 1.70508L22.6504 7.35254ZM23.2354 6.20605L22.8994 6.86523L18.3711 1.27051L18.7646 0.681641L23.2354 6.20605ZM23.8203 5.05957L23.4844 5.71777L19.0557 0.24707L19.1963 0.0380859L19.2227 0H19.7256L23.8203 5.05957ZM24.4053 3.91309L24.0693 4.57129L20.3691 0H21.2383L24.4053 3.91309ZM24.9902 2.7666L24.6543 3.42578L21.8809 0H22.751L24.9902 2.7666ZM25.5742 1.62109L25.2383 2.2793L23.3936 0H24.2627L25.5742 1.62109ZM26.1592 0.474609L25.8232 1.13379L24.9053 0H25.7754L26.1592 0.474609Z"
                  fill="url(#paint0_linear_684_383)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_684_383"
                  x="0"
                  y="0"
                  width="30.1592"
                  height="33.5059"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_684_383"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_684_383"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_684_383"
                  x1="26.1592"
                  y1="2.83272"
                  x2="4"
                  y2="22.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
              </defs>
            </svg> */}
            <svg
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgBars}
            >
              <g filter="url(#filter0_d_691_280)">
                <path
                  d="M1.57324 30.4951L1.29492 30.5039L1.23633 30.5059L1.21094 30.4609L0.493164 29.1611L1.57324 30.4951ZM3.05176 30.4541L2.20215 30.4775L0 27.7568L0.393555 27.1689L3.05176 30.4541ZM4.53125 30.4131L3.68164 30.4365L0.68457 26.7334L1.07812 26.1455L4.53125 30.4131ZM6.01074 30.3711L5.16016 30.3955L1.36914 25.7109L1.7627 25.1221L6.01074 30.3711ZM7.48926 30.3301L6.63965 30.3535L2.05371 24.6875L2.44629 24.0996L7.48926 30.3301ZM8.96875 30.2881L8.11816 30.3125L2.7373 23.665L3.13086 23.0762L8.96875 30.2881ZM9.87891 29.5449L9.54297 30.2041L3.42188 22.6416L3.81543 22.0537L9.87891 29.5449ZM10.4639 28.3984L10.1279 29.0576L4.10645 21.6182L4.5 21.0293L10.4639 28.3984ZM11.0488 27.252L10.7129 27.9111L4.79102 20.5947L5.18457 20.0059L11.0488 27.252ZM11.6338 26.1064L11.2979 26.7646L5.47559 19.5713L5.86816 18.9834L11.6338 26.1064ZM12.2188 24.96L11.8818 25.6191L6.15918 18.5488L6.55273 17.96L12.2188 24.96ZM12.8027 23.8145L12.4668 24.4727L6.84375 17.5254L7.23633 16.9375L12.8027 23.8145ZM13.3877 22.668L13.0518 23.3262L7.52832 16.502L7.9209 15.9141L13.3877 22.668ZM13.9727 21.5215L13.6367 22.1807L8.21191 15.4785L8.60547 14.8906L13.9727 21.5215ZM14.5576 20.376L14.2217 21.0332L8.89648 14.4551L9.29004 13.8672L14.5576 20.376ZM15.1426 19.2295L14.8057 19.8877L9.58105 13.4326L9.97461 12.8447L15.1426 19.2295ZM15.7266 18.083L15.3906 18.7422L10.2656 12.4092L10.6582 11.8213L15.7266 18.083ZM16.3115 16.9365L15.9756 17.5957L10.9492 11.3867L11.3428 10.7979L16.3115 16.9365ZM16.8965 15.79L16.5605 16.4492L11.6338 10.3633L12.0273 9.77441L16.8965 15.79ZM17.4814 14.6445L17.1455 15.3027L12.3184 9.33887L12.7119 8.75098L17.4814 14.6445ZM18.0664 13.498L17.7305 14.1562L13.0029 8.31641L13.3965 7.72852L18.0664 13.498ZM18.6504 12.3525L18.3145 13.0107L13.6875 7.29297L14.0801 6.70508L18.6504 12.3525ZM19.2354 11.2061L18.8994 11.8652L14.3711 6.27051L14.7646 5.68164L19.2354 11.2061ZM19.8203 10.0596L19.4844 10.7178L15.0557 5.24707L15.1963 5.03809L15.2227 5H15.7256L19.8203 10.0596ZM20.4053 8.91309L20.0693 9.57129L16.3691 5H17.2383L20.4053 8.91309ZM20.9902 7.7666L20.6543 8.42578L17.8809 5H18.751L20.9902 7.7666ZM21.5742 6.62109L21.2383 7.2793L19.3936 5H20.2627L21.5742 6.62109ZM22.1592 5.47461L21.8232 6.13379L20.9053 5H21.7754L22.1592 5.47461Z"
                  fill="url(#paint0_linear_691_280)"
                />
              </g>
              <g filter="url(#filter1_f_691_280)">
                <path
                  d="M19.3652 11.3525L19.0293 12.0107L14.4023 6.29297L14.7949 5.70508L19.3652 11.3525Z"
                  fill="url(#paint1_linear_691_280)"
                />
                <path
                  d="M19.9502 10.2061L19.6143 10.8652L15.0859 5.27051L15.4795 4.68164L19.9502 10.2061Z"
                  fill="url(#paint2_linear_691_280)"
                />
                <path
                  d="M20.5352 9.05957L20.1992 9.71777L15.7705 4.24707L15.9111 4.03809L15.9375 4H16.4404L20.5352 9.05957Z"
                  fill="url(#paint3_linear_691_280)"
                />
                <path
                  d="M21.1201 7.91309L20.7842 8.57129L17.084 4H17.9531L21.1201 7.91309Z"
                  fill="url(#paint4_linear_691_280)"
                />
                <path
                  d="M21.7051 6.7666L21.3691 7.42578L18.5957 4H19.4658L21.7051 6.7666Z"
                  fill="url(#paint5_linear_691_280)"
                />
                <path
                  d="M22.2891 5.62109L21.9531 6.2793L20.1084 4H20.9775L22.2891 5.62109Z"
                  fill="url(#paint6_linear_691_280)"
                />
                <path
                  d="M22.874 4.47461L22.5381 5.13379L21.6201 4H22.4902L22.874 4.47461Z"
                  fill="url(#paint7_linear_691_280)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_691_280"
                  x="0"
                  y="5"
                  width="22.1592"
                  height="25.5059"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.892628 0 0 0 0 0.269557 0 0 0 0 0.246045 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_691_280"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_691_280"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_f_691_280"
                  x="10.4023"
                  y="0"
                  width="16.4717"
                  height="16.0107"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_691_280"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_691_280"
                  x1="22.1592"
                  y1="7.83272"
                  x2="7.78649e-07"
                  y2="27.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_691_280"
                  x1="22.874"
                  y1="6.83272"
                  x2="0.714845"
                  y2="26.6731"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E54640" />
                  <stop offset="0.184033" stop-color="#E54640" />
                  <stop offset="0.222288" stop-color="#252727" />
                  <stop offset="1" stop-color="#252727" />
                </linearGradient>
              </defs>
            </svg>

            <div className={styles.angleBar}></div>
            <div className={styles.angleBarDummy}></div>
            <div className={styles.angleTopBarCont}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div className={styles.angleTopBar} key={i}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.luvBar} ref={luvRef}>
        Made with <img src={luv} alt="love" /> by DVM
      </div>
    </div>
  );
}
