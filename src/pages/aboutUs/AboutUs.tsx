import { useRef } from "react";
import styles from "./AboutUs.module.scss";
import { useYouTubePlayer } from "./components/useYoutubePlayer/useYoutubePlayer";

const videos = ["ezk2p6KSj8M"];

export default function AboutUs() {
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const { isPlaying, nextVideo, prevVideo, togglePlayPause } = useYouTubePlayer(
    videos,
    playerContainerRef,
  );

  const textualContent = (
    <p>
      BITS Pilani, India is back with the 44th edition of APOGEE (A Professions
      Oriented Gathering over Educational Experiences) the institute's annual
      technical extravaganza, from 10th April to 14th April 2026, this time as
      Under Steel Skies! APOGEE, a unique blend of technology, innovation, and
      inspiration, gathers the brightest minds worldwide. This premier technical
      conference features groundbreaking papers, innovative projects, and
      exhibitions showcasing mankind's best creations. With guest lectures
      sharing unheard stories, APOGEE challenges the intellect of the
      participants and piques the minds of the audience.
    </p>
  );

  return (
    <div className={styles.container}>
      <img
        src="/img/aboutUs/about-us-bg.png"
        alt="About Us Background"
        className={styles.bgImg}
      />

      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>ABOUT US</h1>
          <h2 className={styles.subtitle}>[APOGEE CURTAIN RAISER]</h2>
          <div className={`${styles.textBlock} ${styles.desktopText}`}>
            {textualContent}
          </div>
          {/* <div className={styles.yellowLine} /> */}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.videoContainer}>
            <div
              className={`${styles.videoPlaceholder} ${
                isPlaying ? styles.playing : ""
              }`}
            >
              {/* Render the container for YouTube Player */}
              <div
                className={styles.playerWrapper}
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlayPause();
                }}
              >
                <div className={styles.youtubeFrame}>
                  <div ref={playerContainerRef} />
                </div>
              </div>

              {!isPlaying && (
                <div
                  className={styles.playButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                ></div>
              )}
            </div>

            <div className={styles.arrowsContainer}>
              <img
                src="/svg/aboutUs/arrow.svg"
                className={`${styles.arrow} ${styles.leftArrow}`}
                alt="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  prevVideo();
                }}
              />
              <img
                src="/svg/aboutUs/arrow.svg"
                className={`${styles.arrow} ${styles.rightArrow}`}
                alt="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextVideo();
                }}
              />
            </div>
          </div>

          <div className={styles.socials} onClick={(e) => e.stopPropagation()}>
            <a
              href="https://www.youtube.com/@APOGEEBITS"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="/svg/aboutUs/icon-ring.svg"
                className={styles.ring}
                alt=""
              />
              <img
                src="/svg/aboutUs/youtube.svg"
                className={styles.icon}
                alt="YouTube"
              />
            </a>
            <a
              href="https://www.instagram.com/bitsapogee/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="/svg/aboutUs/icon-ring.svg"
                className={styles.ring}
                alt=""
              />
              <img
                src="/svg/aboutUs/instagram.svg"
                className={styles.icon}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/apogee-bits-pilani/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="/svg/aboutUs/icon-ring.svg"
                className={styles.ring}
                alt=""
              />
              <img
                src="/svg/aboutUs/linkedin.svg"
                className={styles.icon}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://x.com/BITSApogee"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="/svg/aboutUs/icon-ring.svg"
                className={styles.ring}
                alt=""
              />
              <img
                src="/svg/aboutUs/twitter.svg"
                className={styles.icon}
                alt="Twitter"
              />
            </a>
          </div>
        </div>

        <div className={`${styles.textBlock} ${styles.mobileText}`}>
          {textualContent}
        </div>
      </div>
    </div>
  );
}
