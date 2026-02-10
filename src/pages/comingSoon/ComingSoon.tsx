import styles from "./comingSoon.module.scss";

export default function ComingSoon() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.subtitle}>
          We're working hard to bring this section live. Stay tuned.
        </p>

        <div className={styles.loader}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
