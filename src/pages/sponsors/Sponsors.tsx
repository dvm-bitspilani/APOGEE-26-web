import { useRef, useEffect } from "react";
import styles from "./sponsors.module.scss";

import background from "../../assets/sponsors/background_sponsPage.png";
import titleImg from "../../assets/sponsors/TitleSponsor.png";
import wheel from "../../assets/sponsors/wheel.png";

// ✅ Data
const sponsorsData = {
  title: {
    head: "Official Title Sponsor",
    img: titleImg,
    name: "L&T",
    link: "https://www.larsentoubro.com/",
  },
  otherSponsors: [
    { head: "Official Powered by Sponsor", img: titleImg, name: "Micron", link: "https://www.micron.com/" },
    { head: "Official Technology Partner", img: titleImg, name: "Arcesium", link: "https://www.arcesium.com/" },
    { head: "Official Platinum Partner", img: titleImg, name: "QSW", link: "https://quicksmartwash.com/" },
    { head: "Official Bath and Body Care Partner", img: titleImg, name: "Plum", link: "https://plumgoodness.com/" },
    { head: "Official Music Streaming Partner", img: titleImg, name: "JioSaavn", link: "https://www.jiosaavn.com/" },
    { head: "", img: titleImg, name: "Unicorn India", link: "https://www.unicornivc.com/" },
    { head: "", img: titleImg, name: "IIC", link: "https://iic.mic.gov.in/login" },
    { head: "", img: titleImg, name: "XTCY", link: "https://drinkxtcy.com/" },
    { head: "", img: titleImg, name: "ICICI Bank", link: "https://www.icicibank.com/" },
    { head: "", img: titleImg, name: "EaseMyTrip", link: "https://www.easemytrip.com/" },
    { head: "", img: titleImg, name: "Umeed", link: "https://umeedfoundation.co.in/" },
    { head: "", img: titleImg, name: "Unstop", link: "https://unstop.com/" },
    { head: "", img: titleImg, name: "StockGro", link: "https://www.stockgro.club/" },
    { head: "Official Assessment Partner", img: titleImg, name: "Languify", link: "https://www.languify.in/" },
    { head: "Campus Ambassador Partner", img: titleImg, name: "Etasha", link: "https://www.etashasociety.org/" },
    { head: "Official Savings Partner", img: titleImg, name: "GrabOn", link: "https://www.grabon.in/" },
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

    const percent =
      ((e.clientY - track.offsetTop) / track.clientHeight) * 100;

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
            <div className={styles.head}>
              {sponsorsData.title.head}
            </div>

            <div className={styles.titleSponsImage}>
              <img
                src={sponsorsData.title.img}
                alt={sponsorsData.title.name}
              />
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