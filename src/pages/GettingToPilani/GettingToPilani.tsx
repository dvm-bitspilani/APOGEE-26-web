// VenuePage.tsx
// Zephyr '26 — BITS Pilani Hyderabad · Venue / Getting There page
// Stack: React + TypeScript + SCSS Modules

import React, { useEffect, useRef } from "react";
import styles from "./GettingToPilani.module.scss";
import MapplsMap from "./MapplsMap";

// ─── Types ────────────────────────────────────────────────────────────────────
interface TransportMode {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const TRANSPORT_MODES: TransportMode[] = [
  {
    id: "air",
    icon: "✈",
    title: "BY AIR",
    description: "Indira Gandhi International Airport (~188 km)",
    tag: "3-4 hr drive",
  },
  {
    id: "car",
    icon: "⊞",
    title: "BY CAR",
    description: "Parking available within campus (follow event signage)",
    tag: "Plan for security check-in",
  },
  {
    id: "transit",
    icon: "⊡",
    title: "PUBLIC TRANSIT",
    description:
      "Nearest hubs: Loharu, Bhiwani, Jaipur (bus/train to Loharu + cab)",
    tag: "Last-mile cab / auto recommended",
  },
  {
    id: "train",
    icon: "⊟",
    title: "BY TRAIN",
    description: "Loharu Junction (~25 km from campus)",
    tag: "Buses available at station",
  },
];

/**
 * Google Maps embed for BITS Pilani Hyderabad.
 * Replace this URL with a MapMyIndia embed URL once you have an API key.
 * MapMyIndia embed format:
 *   https://www.mapmyindia.com/api/advanced-maps/doc/sample/map_sdk/map-on-page.php
 * or use their iFrame URL from the MAPPLS SDK.
 */
// const MAP_EMBED_URL =
//   "https://maps.google.com/maps?q=BITS+Pilani+Hyderabad+Campus,+Jawahar+Nagar,+Shameerpet&t=&z=15&ie=UTF8&iwloc=&output=embed";

// ─── Component ────────────────────────────────────────────────────────────────
const GettingToPilani: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Glitch effect needs the text as a data attribute
    if (titleRef.current) {
      titleRef.current.setAttribute("data-text", titleRef.current.innerText);
    }
  }, []);

  useEffect(() => {
    const documentRoot = document.getElementById("root");
    if (documentRoot) {
      documentRoot.style.overflowY = "scroll";
    }
  }, []);

  return (
    <div className={styles.venuePage}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <h1 ref={titleRef} className={styles.heroTitle}>
          GETTING <span>THERE</span>
        </h1>
        <p className={styles.heroSub}>BITS Pilani · Pilani Campus · Pilani</p>
        <svg
          width="101"
          height="59"
          viewBox="0 0 101 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.goBack}
          onClick={() => window.history.back()}
        >
          <path
            d="M0.000376701 58.1818V1.90735e-05H13.4549V4.45457H5.09129V53.7273H13.4549V58.1818H0.000376701ZM46.1642 48.7273L25.8006 28.3637L46.1642 8.00002L49.6642 11.4546L35.2551 25.8637H72.5733V30.8637H35.2551L49.6642 45.2273L46.1642 48.7273ZM100.021 1.90735e-05V58.1818H86.5667V53.7273H94.9304V4.45457H86.5667V1.90735e-05H100.021Z"
            fill="#00e5ff"
          />
        </svg>
      </header>

      {/* ── Content Grid ───────────────────────────────────────────── */}
      <main className={styles.content}>
        {/* Map */}
        <div className={styles.mapBlock}>
          <div className={styles.sectionHeader}>
            <p className={styles.shLabel}>LOCATION DATA</p>
            <h2 className={styles.shTitle}>VENUE MAP</h2>
          </div>

          <div className={styles.mapTerminal}>
            <div className={styles.mapHeader}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span>&gt;TERMINAL — MAP_VIEW</span>
            </div>
            <div className={styles.mapWrap}>
              <MapplsMap
                center={[28.364012339660572, 75.58693005559708]}
                zoom={15}
                marker={{ lat: 28.364012339660572, lng: 75.58693005559708 }}
                height="280px"
              />
              {/* Replace with actual MapMyIndia branding once integrated */}
              <div className={styles.mapBrand}>MAPMYINDIA · LIVE</div>
            </div>
            <div className={styles.mapCoords}>
              <span className={styles.mapCoordsText}>
                LAT: 28.3640° N &nbsp;|&nbsp; LNG: 75.5869° E
              </span>
              <span className={styles.ping}>SIGNAL ACTIVE</span>
            </div>
          </div>

          <div className={styles.mapActions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="https://www.mappls.com/4RGGT3"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⊞ GET DIRECTIONS
            </a>
            <a
              className={`${styles.btn} ${styles.btnMag}`}
              href="https://mappls.com/travel/hotels@zdata=MjguMjY3MzIwNzY3NDM0Myw3NS42MzMwNjk5OTk5OTk5OCw4LjEzMjE0Nzk5NTQyNjczMSxlbixkZWxoaSwxNzc1Nzc5MjAwMDAwLDE3NzYxMjQ4MDAwMDA="
              target="_blank"
              rel="noopener noreferrer"
            >
              ⊟ FIND HOTELS
            </a>
          </div>
        </div>

        {/* Transport */}
        <div className={styles.transportBlock}>
          <div className={styles.sectionHeader}>
            <p className={styles.shLabel}>ROUTE PLANNER</p>
            <h2 className={styles.shTitle}>HOW TO REACH</h2>
          </div>
          <div className={styles.transportList}>
            {TRANSPORT_MODES.map((mode) => (
              <div key={mode.id} className={styles.transportCard}>
                <div className={styles.tcIcon}>{mode.icon}</div>
                <div className={styles.tcContent}>
                  <h3 className={styles.tcTitle}>{mode.title}</h3>
                  <p className={styles.tcDesc}>{mode.description}</p>
                  <p className={styles.tcTag}>{mode.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GettingToPilani;
