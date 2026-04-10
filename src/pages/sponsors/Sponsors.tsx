import { useRef, useEffect } from "react";
import styles from "./Sponsors.module.scss";

import background from "../../assets/sponsors/background_sponsPage.png";
import wheel from "../../assets/sponsors/wheel.png";
import myntraImg from "../../assets/sponsors/myntraImg.png";
import kotakImg from "../../assets/sponsors/kotak.png";
import rtcImg from "../../assets/sponsors/rtc.png";
import rungtaImg from "../../assets/sponsors/rungta.png";
import hmelImg from "../../assets/sponsors/hmel.png";
import eightImg from "../../assets/sponsors/eightfoldImg.png";
import twoImg from "../../assets/sponsors/2.oh!.png";
import atlassianImg from "../../assets/sponsors/atlassian.jpg";
import emt from "../../assets/sponsors/emt.png";
import uiv from "../../assets/sponsors/uiv.png";
import abhiBus from "../../assets/sponsors/AbhiBus.png";
import posterWah from "../../assets/sponsors/posterwah_org.png";
import armor from "../../assets/sponsors/armor.png";
import pluss from "../../assets/sponsors/pluss.png";
import monster from "../../assets/sponsors/monster.png";
import mapmyIndia from "../../assets/sponsors/mapMyIndia.png";
import wolfram from "../../assets/sponsors/wolfram.png";
import iic from "../../assets/sponsors/iic.jpeg";

// ✅ Data
const sponsorsData = {
  title: {
    head: " Powered By",
    img: mapmyIndia,
    name: "MapmyIndia",
    link: "https://www.mapmyindia.com/",
  },
  otherSponsors: [
    {
      head: "Official Fashion Partner",
      img: myntraImg,
      name: "Myntra",
      link: "https://www.myntra.com/",
    },
    {
      head: "Official Talent Partner",
      img: eightImg,
      name: "Eightfold.ai",
      link: "https://eightfold.ai/",
    },
    {
      head: "Official Gold Sponsor",
      img: rungtaImg,
      name: "Rungta Mines",
      link: "https://www.therungtagroup.com/",
    },
    {
      head: "Official Gold Sponsor",
      img: hmelImg,
      name: "HMEL",
      link: "https://www.hmel.in/",
    },
    {
      head: "Official Banking Partner",
      img: kotakImg,
      name: "Kotak Mahindra Bank",
      link: "https://www.kotak811.bank.in/",
    },
    {
      head: "Official Material Innovation Sponsor",
      img: pluss,
      name: "Pluss Technologies",
      link: "https://www.pluss.co.in/",
    },
    {
      head: "Official Energy Drink Partner",
      img: monster,
      name: "Monster Energy",
      link: "https://www.monsterenergy.com/",
    },
    {
      head: "Official Sponsor",
      img: atlassianImg,
      name: "Atlassian",
      link: "https://www.atlassian.com/",
    },
    {
      head: "Official Silver Sponsor",
      img: armor,
      name: "ArmorIQ",
      link: "https://armoriq.ai/",
    },
    {
      head: "Official Sponsor",
      img: uiv,
      name: "Unicorn India Ventures",
      link: "https://unicornivc.com/",
    },
    {
      head: "Official Sponsor",
      img: posterWah,
      name: "Posterwah",
      link: "https://posterwa.com/?srsltid=AfmBOor_T-6KxMJNFl8Eg3CVk3PaLe08godP0VRyukefymoIvRPs9ReQ",
    },
    {
      head: "Official Travel Partner",
      img: emt,
      name: "Easemytrip",
      link: "https://www.easemytrip.com/",
    },
    {
      head: "Official Hair Colour & Care Partner",
      img: twoImg,
      name: "2.oh!",
      link: "https://www.2pointoh.in/",
    },
    {
      head: "Official Bus Booking Partner ",
      img: abhiBus,
      name: "Abhibus",
      link: "https://www.abhibus.com/",
    },
    {
      head: "Official Technology Partner",
      img: wolfram,
      name: "Wolfram Research",
      link: "https://www.wolfram.com/",
    },
    {
      head: "Official Technology Partner",
      img: rtcImg,
      name: "Round the Clock",
      link: "https://rtctek.com/",
    },
     {
      head: "Official Entrepreneurship Partner",
      img: iic,
      name: "IIC Bits Pilani",
      link: "https://www.bits-pilani.ac.in/iic/",
    },
  ],
};

// ✅ Component
const Sponsors = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const wheelRef = useRef<HTMLImageElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Scroll sync
  const handleScroll = () => {
    const container = mainRef.current;
    const wheelEl = wheelRef.current;

    if (!container || !wheelEl) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    if (maxScroll <= 0) return;

    const percent = (container.scrollTop / maxScroll) * 100;
    wheelEl.style.top = `${Math.min(percent, 100)}%`;
  };

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Drag scroll
  const handleDrag = (e: MouseEvent) => {
    const container = mainRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    if (maxScroll <= 0) return;

    const percent = ((e.clientY - track.offsetTop) / track.clientHeight) * 100;

    container.scrollTop = (percent / 100) * maxScroll;
  };

  const startDrag = () => {
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
        <h1>SPONSORS</h1>
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

      {/* Sponsors */}
      <div className={styles.sponsors} ref={mainRef}>
        <a href={sponsorsData.title.link} target="_blank" rel="noreferrer">
          <div className={styles.titleSponsor}>
            <div className={styles.head}>{sponsorsData.title.head}</div>

            <div className={styles.titleSponsImage}>
              <img src={sponsorsData.title.img} alt={sponsorsData.title.name} />
            </div>

            <div className={`${styles.titleSponsName} ${styles.sponsName}`}>
              {sponsorsData.title.name}
            </div>
          </div>
        </a>

        <div className={styles.otherSponsors}>
          {sponsorsData.otherSponsors.map((sponsor, index) => (
            <a href={sponsor.link} target="_blank" rel="noreferrer" key={index}>
              <div className={styles.otherSponsor}>
                <div
                  className={
                    sponsor.head
                      ? styles.head
                      : `${styles.head} ${styles.other}`
                  }
                >
                  {sponsor.head}
                </div>

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

export default Sponsors;
