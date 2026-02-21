import styles from "./Ham.module.scss";
import bg from "/img/ham/bg.png";

export default function Ham() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="Ham" className={styles.bgImg} />
      <div className={styles.speedometer}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`${styles[`dashCircle${i + 1}`]}`}></div>
        ))}
        <div className={styles.radialCircle1}></div>
        <div className={styles.radialCircle2}></div>
        <div className={styles.bigDashCircle}></div>
      </div>
    </div>
  );
}
