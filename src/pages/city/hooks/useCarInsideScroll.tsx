import { useScroll } from "@react-three/drei"
import { useCityStore, usePivotStore } from "../../../utils/store"
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function useCarInsideScroll() {
  const city = useCityStore((s) => s.city)
  const pivot = usePivotStore((s) => s.pivot)
   const { camera } = useThree();
  const scroll = useScroll()
  const hasStartedScroll = useRef(false)

  useFrame(() => {
    if (!city || !pivot) return

    if (!hasStartedScroll.current && scroll.offset > 0.001) {
      hasStartedScroll.current = true
    }
    if (!hasStartedScroll.current) return

    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1)

    // 👉 TRANSLATE CITY ONLY
    if (pageProgress < 1) {
    //   city.position.z = 500 - pageProgress * 600
    camera.rotation.y= -3.2 + pageProgress*6.4;
    camera.position.z=-5 +pageProgress*5;
    }

    // 👉 ROTATE AROUND CAR
    
  })
}
