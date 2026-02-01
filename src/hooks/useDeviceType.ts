import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "laptop";

const getDeviceType = (): DeviceType => {
  const width = window.innerWidth;

  if (width < 400) return "mobile";
  if (width < 1300) return "tablet";
  return "laptop";
};

export function useDeviceType() {
  const [device, setDevice] = useState<DeviceType>(() => {
    if (typeof window === "undefined") return "laptop"; 
    return getDeviceType();
  });

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isLaptop: device === "laptop",
  };
}
