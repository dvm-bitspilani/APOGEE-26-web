import { useEffect, useState } from "react";
import styles from "./Countdown.module.scss"
interface CountdownProps {
  targetDate: string; // pass ISO string
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0};
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      // seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className={styles.countdown}>
      <div className={styles.item}>
        <span className={styles.value}>{padZero(timeLeft.days)}</span>
        <span className={styles.label}>Days</span>
      </div>

      <div className={styles.item}>
        <span className={styles.value}>{padZero(timeLeft.hours)}</span>
        <span className={styles.label}>Hours</span>
      </div>

      <div className={styles.item}>
        <span className={styles.value}>{padZero(timeLeft.minutes)}</span>
        <span className={styles.label}>Minutes</span>
      </div>

      {/* <div className={styles.item}>
        <span className={styles.value}>{timeLeft.seconds}</span>
        <span className={styles.label}>Seconds</span>
      </div> */}
    </div>
  );
};

export default Countdown;