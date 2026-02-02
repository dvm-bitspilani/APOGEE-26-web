import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { useScroll } from "@react-three/drei"
import { useCityStore } from "../../../utils/store"

export function useCityLandingStart() {
  const city = useCityStore((s) => s.city)
  // const phase = useCityPhase((s) => s.phase)

  const scroll = useScroll()
  const hasStartedScroll = useRef(false)

  useFrame(() => {
    if (!city) return

    // start only when scroll begins
    if (!hasStartedScroll.current && scroll.offset > 0.001) {
      hasStartedScroll.current = true
    }

    if (!hasStartedScroll.current) return

    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1)

    // 🔥 CITY TRANSFORMS ONLY
    if(pageProgress<0.6){
    city.position.x = -10 -pageProgress * 600
    }
    if(pageProgress>0.6 &&pageProgress<=0.8){
      city.position.x = -370 -(pageProgress-0.6) * 300
      city.rotation.y=(pageProgress-0.6)* Math.PI
      city.position.z=-5 + (pageProgress-0.6)* 190
      city.rotation.z=(pageProgress-0.6)* Math.PI*0.05
    }
    if(pageProgress>0.8){
      city.position.x = -370 -(pageProgress-0.6) * 300
      // city.rotation.z= Math.PI*0.4 -(pageProgress-0.6)* Math.PI*0.02
    }
    // city.position.y = -5+ pageProgress * 0.2
    // city.position.z = -5+ -pageProgress * 19
  })
}
