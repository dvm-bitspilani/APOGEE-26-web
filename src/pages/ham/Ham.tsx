import styles from "./Ham.module.scss";
import bg from "/img/ham/bg.png";
import dott from "/img/ham/dott.png";
import textBottom from "/img/ham/textBottom.png";

export default function Ham() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="Ham" className={styles.bgImg} />
      <div className={styles.speedometer}>
        {/* Inner dash dash lines jo multiple hai */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`${styles[`dashCircle${i + 1}`]}`}></div>
        ))}

        {/* Speedometer speed */}
        <div className={styles.speedFont}>125</div>

        {/* Actual speedometer coloured bar */}
        <div className={styles.radialCircle1}></div>

        {/* Actual speedometer transparent bar */}
        <div className={styles.radialCircle2}></div>

        {/* Out of speedometer bar colour wala */}
        {/* <div className={styles.bigDashCircle}></div> */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`${styles[`bigDashTicks${i + 1}`]}`}></div>
        ))}

        {/* Out of speedometer bar uncolour wala */}
        <div className={styles.bigDashCircleBehind}></div>

        {/* Speedometer bar pe jo lines hai */}
        <div className={styles.speedoDashCircle}></div>

        {/* Speedometer bar ke uppar jo ticks hai purple wale */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`${styles[`speedTick${i + 1}`]}`}></div>
        ))}

        {/* Speedometer ke andar ka bhadiya wala design */}
        <img src={dott} alt="dott" className={styles.dottedIMG} />

        {/* Name tags saare */}
        <div className={styles.nameTagCont1}>
          <div className={styles.nameTagLeft1}>
            <span>{`<`}&nbsp; developers</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagRight1}>
            <span>{`media partners >`}</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagBG1}></div>
          <div className={styles.nameTagBorderLeft1}></div>
          <div className={styles.nameTagBorderRight1}></div>
        </div>
        <div className={styles.nameTagCont2}>
          <div className={styles.nameTagLeft2}>
            <span>{`<`}&nbsp; contact us</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagRight2}>
            <span>sponsors&nbsp;&nbsp; {`>`}</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagBG2}></div>
          <div className={styles.nameTagBorderLeft2}></div>
          <div className={styles.nameTagBorderRight2}></div>
        </div>
        <div className={styles.nameTagCont3}>
          <div className={styles.nameTagLeft3}>
            <span>{`<`}&nbsp; state</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagRight3}>
            <span>events {` >`}</span>
            <img
              src={textBottom}
              alt="textBottom"
              className={styles.textBottomIMG}
            />
          </div>
          <div className={styles.nameTagBG3}></div>
          <div className={styles.nameTagBorderLeft3}></div>
          <div className={styles.nameTagBorderRight3}></div>
        </div>
      </div>
    </div>
  );
}
