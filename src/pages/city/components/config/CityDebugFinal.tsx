import { useEffect } from "react";
import * as THREE from "three";
import { useCityStore } from "../../../../utils/store";

export default function CityDebugProd() {
  const city = useCityStore((s) => s.city);

  useEffect(() => {
    if (!city) return;
    city.position.set(3.4, -10, 456.0);
    city.rotation.set(
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0)
    );
    city.scale.setScalar(17.6);
  }, [city]);

  return null;
}
