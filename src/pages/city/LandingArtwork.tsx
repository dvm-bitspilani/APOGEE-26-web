import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import HamburgerButton from "./components/HamburgerButton";
import { useHamburgerStore } from "../../utils/store";
import styles from "./LandingArtwork.module.scss";

const Ham = lazy(() => import("../ham/Ham"));

export default function LandingArtwork() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => () => useHamburgerStore.getState().setManualHidden(false), []);
  return <main className={styles.home}>
    <img src="/img/SteelSkiesbg.webp" className={styles.city} alt="" />
    <img src="/apogee26logo.webp" className={styles.logo} alt="APOGEE 2026 — Under Steel Skies" />
    <nav className={styles.navigation} aria-label="Explore APOGEE">
      {[["/about", "ABOUT US"], ["/events", "EVENTS"], ["/speakers", "SPEAKERS"], ["/contact", "CONTACT US"]].map(([to, label]) => <Link to={to} key={to}><span>[</span>{label}<span>]</span></Link>)}
    </nav>
    <RegisterButton alwaysAvailable />
    {!menuOpen && <HamburgerButton alwaysAvailable onClick={() => setMenuOpen(true)} />}
    {menuOpen && <Suspense fallback={null}><Ham onClose={() => { setMenuOpen(false); useHamburgerStore.getState().setManualHidden(false); }} /></Suspense>}
  </main>;
}
