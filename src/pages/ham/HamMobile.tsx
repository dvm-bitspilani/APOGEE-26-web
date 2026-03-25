// import { useEffect, useRef, useState } from "react";
import styles from "./HamMobile.module.scss";
import bg from "/img/ham/bg.png";
import luv from "/img/ham/luv_dvm.png";
// import gsap from "gsap";

function SvgEl() {
  return (
    <svg
      width="334"
      height="61"
      viewBox="0 0 334 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_1762_2056"
        maskUnits="userSpaceOnUse"
        x="-0.393555"
        y="0"
        width="334"
        height="61"
        fill="black"
      >
        <rect fill="white" x="-0.393555" width="334" height="61" />
        <path d="M331.701 1H30.3814L1.60645 59.5H312.747C317.645 39.4289 324.001 19.8931 331.701 1Z" />
      </mask>
      <path
        d="M331.701 1H30.3814L1.60645 59.5H312.747C317.645 39.4289 324.001 19.8931 331.701 1Z"
        fill="black"
        fill-opacity="0.3"
      />
      <g
        clip-path="url(#paint0_angular_1762_2056_clip_path)"
        data-figma-skip-parse="true"
        mask="url(#path-1-outside-1_1762_2056)"
      >
        <g transform="matrix(0 0.240399 -0.47815 0 771.881 -38.3994)">
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
        d="M331.701 1L332.627 1.37743L333.189 0H331.701V1ZM30.3814 1V0H29.7589L29.4841 0.558625L30.3814 1ZM1.60645 59.5L0.709123 59.0586L0.00013864 60.5H1.60645V59.5ZM312.747 59.5V60.5H313.532L313.718 59.7371L312.747 59.5ZM331.701 1V0H30.3814V1V2H331.701V1ZM30.3814 1L29.4841 0.558625L0.709123 59.0586L1.60645 59.5L2.50377 59.9414L31.2788 1.44138L30.3814 1ZM312.747 59.5L313.718 59.7371C318.605 39.7144 324.945 20.2255 332.627 1.37743L331.701 1L330.775 0.622573C323.057 19.5607 316.686 39.1434 311.775 59.2629L312.747 59.5ZM1.60645 59.5V60.5H312.747V59.5V58.5H1.60645V59.5Z"
        data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.20000000298023224,&#34;g&#34;:0.90588235855102539,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.50024455785751343}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.20000000298023224,&#34;g&#34;:0.90588235855102539,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.50024455785751343}],&#34;transform&#34;:{&#34;m00&#34;:5.3956063792229281e-13,&#34;m01&#34;:-956.30059814453125,&#34;m02&#34;:1250.031738281250,&#34;m10&#34;:480.7988281250,&#34;m11&#34;:4.3387290830400327e-13,&#34;m12&#34;:-278.79885864257812},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
        mask="url(#path-1-outside-1_1762_2056)"
      />
      <defs>
        <clipPath id="paint0_angular_1762_2056_clip_path">
          <path
            d="M331.701 1L332.627 1.37743L333.189 0H331.701V1ZM30.3814 1V0H29.7589L29.4841 0.558625L30.3814 1ZM1.60645 59.5L0.709123 59.0586L0.00013864 60.5H1.60645V59.5ZM312.747 59.5V60.5H313.532L313.718 59.7371L312.747 59.5ZM331.701 1V0H30.3814V1V2H331.701V1ZM30.3814 1L29.4841 0.558625L0.709123 59.0586L1.60645 59.5L2.50377 59.9414L31.2788 1.44138L30.3814 1ZM312.747 59.5L313.718 59.7371C318.605 39.7144 324.945 20.2255 332.627 1.37743L331.701 1L330.775 0.622573C323.057 19.5607 316.686 39.1434 311.775 59.2629L312.747 59.5ZM1.60645 59.5V60.5H312.747V59.5V58.5H1.60645V59.5Z"
            mask="url(#path-1-outside-1_1762_2056)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Ham() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="Ham" className={styles.bgImg} />
      <div className={styles.mainBox}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div className={styles.box} key={i}>
            <SvgEl />
          </div>
        ))}
      </div>

      <div className={styles.luvBar}>
        Made with <img src={luv} alt="love" /> by DVM
      </div>
    </div>
  );
}
