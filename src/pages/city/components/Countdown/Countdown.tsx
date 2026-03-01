import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // pass ISO string
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        fontSize: "3rem",
        fontWeight: 600,
        textAlign: "center",
        color:"red",
        background: "transparent",
        zIndex: 10,
      }}
    >
      <div>
        {timeLeft.days}
        <div style={{ fontSize: "4rem",
        color:"black" }}>Days</div>
      </div>
      <div>
        {timeLeft.hours}
        <div style={{ fontSize: "4rem" }}>Hours</div>
      </div>
      <div>
        {timeLeft.minutes}
        <div style={{ fontSize: "4rem" }}>Minutes</div>
      </div>
      <div>
        {timeLeft.seconds}
        <div style={{ fontSize: "4rem" }}>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;