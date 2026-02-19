import styles from "./AboutUs.module.scss";

export default function AboutUs() {
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
          <h2 className={styles.subtitle}>[OASIS CURTAIN RAISER]</h2>
          <div className={styles.textBlock}>
            <p>
              BITS Pilani, India is back with the 44th edition of APOGEE (A
              Professions Oriented Gathering over Educational Experiences) the
              institute's annual technical extravaganza, from 10th April to 14th April 2026, this time as Under Steel Skies! APOGEE, a unique
              blend of technology, innovation, and inspiration, gathers the
              brightest minds worldwide. This premier technical conference features groundbreaking papers,
              innovative projects, and exhibitions showcasing mankind's best
              creations. With guest lectures sharing unheard stories, APOGEE
              challenges the intellect of the participants and piques the minds
              of the audience.
            </p>
          </div>
          {/* <div className={styles.yellowLine} /> */}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.videoContainer}>
            <img
              src="/svg/aboutUs/arrow.svg"
              className={`${styles.arrow} ${styles.leftArrow}`}
              alt="Previous"
            />
            <div className={styles.videoPlaceholder}>
              <img
                src="/img/aboutUs/video-placeholder.png"
                alt="Video Placeholder"
              />
              <div className={styles.playButton}></div>
            </div>
            <img
              src="/svg/aboutUs/arrow.svg"
              className={`${styles.arrow} ${styles.rightArrow}`}
              alt="Next"
            />
          </div>

          <div className={styles.socials}>
            <div className={styles.socialIcon}>
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
            </div>
            <div className={styles.socialIcon}>
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
            </div>
            <div className={styles.socialIcon}>
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
            </div>
            <div className={styles.socialIcon}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
