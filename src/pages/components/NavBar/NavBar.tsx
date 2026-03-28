import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useModalStore } from "../../../utils/store";
import navBG from "/img/landing/navBG.png";

function NavLink({ to, label }: { to: string; label: string }) {
  const navigate = useNavigate();

  return (
    <a className={styles.navLink} onClick={() => navigate(to)}>
      {/* <svg
        width="232"
        height="54"
        viewBox="0 0 232 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.618 12.8773V2.50498C27.618 2.06102 27.0825 1.83727 26.7666 2.14925L2.14864 26.4647C2.05353 26.5587 2 26.6868 2 26.8205V50.8083C2 51.0845 2.22386 51.3083 2.5 51.3083H205.022C205.159 51.3083 205.289 51.2527 205.384 51.1542L229.861 25.5913C229.95 25.4982 230 25.3744 230 25.2455V13.8773C230 13.6012 229.776 13.3773 229.5 13.3773H28.118C27.8418 13.3773 27.618 13.1535 27.618 12.8773Z"
          stroke="#18B0A1"
          stroke-width="3"
        />
      </svg> */}
      {/* <svg
        width="231"
        height="53"
        viewBox="0 0 231 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-10" y="-10" width="251" height="72.3074">
          <div
            // xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(5px)",
              clipPath: "url(#bgblur_0_676_239_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="10"
          d="M27.118 12.3763V2.00401C27.118 1.56004 26.5825 1.33629 26.2666 1.64827L1.64864 25.9637C1.55353 26.0577 1.5 26.1858 1.5 26.3195V50.3074C1.5 50.5835 1.72386 50.8074 2 50.8074H204.522C204.659 50.8074 204.789 50.7517 204.884 50.6532L229.361 25.0903C229.45 24.9973 229.5 24.8734 229.5 24.7445V13.3763C229.5 13.1002 229.276 12.8763 229 12.8763H27.618C27.3418 12.8763 27.118 12.6525 27.118 12.3763Z"
          stroke="#18B0A1"
          stroke-width="3"
        />
        <defs>
          <clipPath
            id="bgblur_0_676_239_clip_path"
            transform="translate(10 10)"
          >
            <path d="M27.118 12.3763V2.00401C27.118 1.56004 26.5825 1.33629 26.2666 1.64827L1.64864 25.9637C1.55353 26.0577 1.5 26.1858 1.5 26.3195V50.3074C1.5 50.5835 1.72386 50.8074 2 50.8074H204.522C204.659 50.8074 204.789 50.7517 204.884 50.6532L229.361 25.0903C229.45 24.9973 229.5 24.8734 229.5 24.7445V13.3763C229.5 13.1002 229.276 12.8763 229 12.8763H27.618C27.3418 12.8763 27.118 12.6525 27.118 12.3763Z" />
          </clipPath>
        </defs>
      </svg> */}
      <svg
        width="251"
        height="73"
        viewBox="0 0 251 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-2" y="-6" width="255" height="78.3074">
          <div
            style={{
              backdropFilter: "blur(50px)",
              clipPath: "url(#bgblur_0_676_239_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g filter="url(#filter0_d_676_239)" data-figma-bg-blur-radius="12">
          <path
            d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z"
            fill="#18B0A1"
            fill-opacity="0.2"
            shape-rendering="crispEdges"
          />
          <path
            d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z"
            stroke="#18B0A1"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_676_239"
            x="-2"
            y="-6"
            width="255"
            height="78.3074"
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
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_676_239"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_676_239"
              result="shape"
            />
          </filter>
          <clipPath id="bgblur_0_676_239_clip_path" transform="translate(2 6)">
            <path d="M37.118 18.3763V8.00401C37.118 7.56004 36.5825 7.33629 36.2666 7.64827L11.6486 31.9637C11.5535 32.0577 11.5 32.1858 11.5 32.3195V56.3074C11.5 56.5835 11.7239 56.8074 12 56.8074H214.522C214.659 56.8074 214.789 56.7517 214.884 56.6532L239.361 31.0903C239.45 30.9973 239.5 30.8734 239.5 30.7445V19.3763C239.5 19.1002 239.276 18.8763 239 18.8763H37.618C37.3418 18.8763 37.118 18.6525 37.118 18.3763Z" />
          </clipPath>
        </defs>
      </svg>

      {label}
    </a>
  );
}

export default function NavBar() {
  const isModalOpen = useModalStore((s) => s.isModalOpen);
  return (
    <div className={styles.navbarContainer}>
      <img
        src={navBG}
        alt="Nav Background"
        className={`${styles.navBG}  ${isModalOpen ? styles.hiddenNavBG : ""}`}
      />
      <div
        className={`${styles.navbar} ${isModalOpen ? styles.hiddenNavbar : ""}`}
      >
        <div className={styles.navlinks}>
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/events" label="Events" />
          <NavLink to="/contact" label="Contact   Us" />
          <NavLink to="/speakers" label="Speakers" />
        </div>
      </div>
    </div>
  );
}
