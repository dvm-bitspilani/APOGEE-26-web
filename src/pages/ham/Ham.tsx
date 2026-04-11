import { useEffect, useState } from "react";
import HamMobile from "./HamMobile";
import HamDesktop from "./HamDesktop";

export default function Ham() {
  const [width, setwidth] = useState(window.innerWidth / window.innerHeight < 0.6 ? false : true);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth / window.innerHeight < 0.6) {
        setwidth(false);
      } else {    //jfdlasjljfka
        setwidth(true);
      }
      return () => {
        removeEventListener("resize", () => {});
      };
    });
  }, []);

  return width ? <HamDesktop /> : <HamMobile />;
}
