import { useRef, useEffect } from "react";
import styles from "./MediaPartners.module.scss";

import background from "../../assets/sponsors/background_sponsPage.png";

import wheel from "../../assets/sponsors/wheel.png";
import ink from "../../assets/sponsors/inkNews.png";
import lok from "../../assets/sponsors/lokKal.png";
import mridul from "../../assets/sponsors/mridul.png";
import samachar from "../../assets/sponsors/samachar.png";
import campus from "../../assets/sponsors/campus.png";
import iritiash from "../../assets/sponsors/irtiash.png";
import sushant from "../../assets/sponsors/sushant.png";
import blog from "../../assets/sponsors/blog.png";
import aditya from "../../assets/sponsors/aditya.png";
import nishant from "../../assets/sponsors/Nishant1.png";
import naman from "../../assets/sponsors/Naman1jpng.jpeg";
import rena from "../../assets/sponsors/Rena1.png";


// ✅ Data
const mediaPartnersData = {
  otherSponsors: [
    { img: ink, name: "The Ink News", link: "https://www.youtube.com/channel/UCaGGTGaHWDJexWhdu76BShw" },
    { img: lok, name: "Lok Kalyani", link: "https://www.youtube.com/@lokkalyaninews2084" },
    { img: mridul, name: "Mridul Patrika", link: "https://www.mridulpatrika.in/" },
    { img: samachar, name: "Shekhawati Samachar", link: "https://www.facebook.com/pilanishekhawatisamachar/videos" },
    { img: naman, name: "Naman Pal", link: "https://www.instagram.com/side_end_developer__/" },
    { img: rena, name: "Rena Goswami", link: "https://www.youtube.com/@rena_goswami_" },
    { img: nishant, name: "Nishant Gupta", link: "https://www.instagram.com/codewithnishant/" },
    { img: aditya, name: "Aditya Chauhan Live", link: "https://www.youtube.com/@AdityaChauhanMusic" },
    { img: sushant, name: "Sushant Music", link: "https://music.youtube.com/channel/UCoTEonmhlCqKCSOqf46lQHg" },
    { img: iritiash, name: "Irtiash", link: "https://www.youtube.com/@IrtiashTheBand" },
    { img: blog, name: "Blog Adda", link: "https://blog.blogadda.com/" },
    { img: campus, name: "Campus Times Pune", link: "https://www.campustimespune.com/" },
  ],
};

// ✅ Component
const MediaPartners = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const wheelRef = useRef<HTMLImageElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Helper to clamp percent between 0 and 100
  const clampPercent = (value: number) => Math.min(100, Math.max(0, value));

  // 🔥 Scroll sync
  const handleScroll = (): void => {
    const container = mainRef.current;
    const wheel = wheelRef.current;
    if (!container || !wheel) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    const percent = maxScroll > 0 ? (container.scrollTop / maxScroll) * 100 : 0;
    const clamped = clampPercent(percent);

    wheel.style.top = `${clamped}%`;
  };

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    // set initial position
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Drag scroll
  const handleDrag = (e: MouseEvent): void => {
    const container = mainRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const rect = track.getBoundingClientRect();
    const percent = rect.height > 0 ? ((e.clientY - rect.top) / rect.height) * 100 : 0;
    const clamped = clampPercent(percent);

    const maxScroll = container.scrollHeight - container.clientHeight;
    container.scrollTop = (clamped / 100) * Math.max(0, maxScroll);

    // keep wheel in sync while dragging
    if (wheelRef.current) wheelRef.current.style.top = `${clamped}%`;
  };

  const startDrag = (e: React.MouseEvent) => {
    // prevent image drag ghost
    e.preventDefault();
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <div className={styles.Wrapper}>

      {/* Background */}
      <div className={styles.backgroundImage}>
        <img src={background} alt="background" draggable={false} />
      </div>

      {/* Heading */}
      <div className={styles.heading}>
        <h1>MEDIA PARTNERS</h1>
      </div>

      {/* Scrollbar */}
      <div className={styles.scrollBarContainer} ref={trackRef}>
        <div className={styles.scrollBar}></div>
        <img
          src={wheel}
          ref={wheelRef}
          onMouseDown={startDrag}
          draggable={false}
          alt="wheel"
        />
      </div>

      {/* ✅ FIXED: Scroll container added */}
      <div className={styles.sponsors} ref={mainRef}>
        <div className={styles.otherSponsors}>
          {mediaPartnersData.otherSponsors.map((sponsor, index) => (
            <a href={sponsor.link} target="_blank" rel="noreferrer" key={index}>
              <div className={styles.otherSponsor}>
                <div className={styles.otherSponsImage}>
                  <img src={sponsor.img} alt={sponsor.name} />
                </div>

                <div className={`${styles.otherSponsName} ${styles.sponsName}`}>
                  {sponsor.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPartners;