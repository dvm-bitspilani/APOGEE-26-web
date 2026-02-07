import { useEffect } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type UseKeyboardAzimuthParams = {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  enabled: boolean;
  step?: number;
};

export function useKeyboardAzimuth({
  controlsRef,
  enabled,
  step = 0.02,
}: UseKeyboardAzimuthParams) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const controls = controlsRef.current;
      if (!controls) return;
      console.log(controls);
      let azimuth = controls.getAzimuthalAngle();

      if (e.key === "ArrowLeft" || e.key === "q") {
        azimuth += step;
      }

      if (e.key === "ArrowRight" || e.key === "e") {
        azimuth -= step;
      }

      controls.setAzimuthalAngle(azimuth);
      controls.update();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, step]);
}
