// import { useNavigate } from "react-router-dom";
// import styles from "./NavBar.module.scss";
// import { useModalStore } from "../../../utils/store";
// import navBG from "/img/landing/navBG.png";
// import titleImg from "/img/apogee26.png";

import { useHamburgerStore } from "../../../utils/store";
import GlassSlab from "./GlassSlab";


// function NavLink({ to, label }: { to: string; label: string }) {
//   const navigate = useNavigate();

//   return (
//     <a className={styles.navLink} onClick={() => navigate(to)}>
//       {/* <svg
//         width="251"
//         height="73"
//         viewBox="0 0 251 73"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <foreignObject x="-2" y="-6" width="255" height="78.3074">
//           <div
//             style={{
//               backdropFilter: "blur(50px)",
//               clipPath: "url(#bgblur_0_676_239_clip_path)",
//               height: "100%",
//               width: "100%",
//             }}
//           ></div>
//         </foreignObject>
//         <g filter="url(#filter0_d_676_239)" data-figma-bg-blur-radius="12">
//           <path
//             d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z"
//             fill="#18B0A1"
//             fill-opacity="0.2"
//             shape-rendering="crispEdges"
//           />
//           <path
//             d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z"
//             stroke="#18B0A1"
//             stroke-width="3"
//             shape-rendering="crispEdges"
//           />
//         </g>
//         <defs>
//           <filter
//             id="filter0_d_676_239"
//             x="-2"
//             y="-6"
//             width="255"
//             height="78.3074"
//             filterUnits="userSpaceOnUse"
//             color-interpolation-filters="sRGB"
//           >
//             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dy="4" />
//             <feGaussianBlur stdDeviation="5" />
//             <feComposite in2="hardAlpha" operator="out" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="BackgroundImageFix"
//               result="effect1_dropShadow_676_239"
//             />
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="effect1_dropShadow_676_239"
//               result="shape"
//             />
//           </filter>
//           <clipPath id="bgblur_0_676_239_clip_path" transform="translate(2 6)">
//             <path d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z" />
//           </clipPath>
//         </defs>
//       </svg> */}
//       {/* <svg
//         width="360"
//         height="810"
//         viewBox="0 0 360 810"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M295.5 2.5H351.558L356.5 807.5H290.5C274.747 801.802 267.311 795.306 257.5 776.5V743C251.268 719.982 244.059 709.728 218.5 700.5H54.5C19.7345 692.081 9.31589 677.601 2.5 639V152.5C6.9637 129.476 14.4703 107.312 37.5 100.5L218.5 100.5C246.068 94.3113 256.291 85.3754 258.5 52.5C262.859 27.8366 271.267 9.02376 295.5 2.5Z"
//           stroke="#18B0A1"
//           stroke-width="5"
//           stroke-linecap="round"
//         />
//       </svg> */}
//       <span>{`[`}</span>
//       {label}
//       <span>{`]`}</span>
//     </a>
//   );
// }

export default function NavBar() {
  // const isModalOpen = useModalStore((s) => s.isModalOpen);
  const manualHidden = useHamburgerStore((s) => s.manualHidden);
  return (
    // <div className={styles.navbarContainer}>
    //   <img
    //     src={navBG}
    //     alt="Nav Background"
    //     className={`${styles.navBG}  ${isModalOpen ? styles.hiddenNavBG : ""}`}
    //   />
    //   <div
    //     className={`${styles.navbar} ${isModalOpen ? styles.hiddenNavbar : ""}`}
    //   >
    //     <img src={titleImg} alt="Apogee 26" />
    //     <div className={styles.navlinks}>
    //       <NavLink to="/" label="HOME" />
    //       <NavLink to="/about" label="ABOUT" />
    //       <NavLink to="/events" label="EVENTS" />
    //       <NavLink to="/contact" label="CONTACT   US" />
    //       <NavLink to="/speakers" label="SPEAKERS" />
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        opacity: manualHidden ? 0 : 1,
        pointerEvents: manualHidden ? "none" : "auto",
        transition: "opacity 0.3s ease",
      }}
    >
    <GlassSlab />
    </div>
  );
}
