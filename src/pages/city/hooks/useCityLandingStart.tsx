//@ts-nocheck //! remove this if this file is used in
//! Removing all imports/use of this file since it does nothing after creating unused objects
import { useScroll } from "@react-three/drei"
import { useCityStore, usePivotStore } from "../../../utils/store"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function useCityLandingStart() {
  const city = useCityStore((s) => s.city)
  const pivot = usePivotStore((s) => s.pivot)

  const scroll = useScroll()
  const hasStartedScroll = useRef(false)

  useFrame(() => {
    // if (!city || !pivot) return

    // if (!hasStartedScroll.current && scroll.offset > 0.001) {
    //   hasStartedScroll.current = true
    // }
    // if (!hasStartedScroll.current) return

    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1)

    // // 👉 TRANSLATE CITY ONLY
    // if (pageProgress < 0.6) {
    //   city.position.z = 500 - pageProgress * 600
    // }

    // // 👉 ROTATE AROUND CAR
    // if (pageProgress > 0.6 && pageProgress <= 1) {
    //   city.position.x = -110 - (pageProgress - 0.6) * 300
    //   city.position.z = 140 + (pageProgress - 0.6) * 200
    //   city.position.y= -120 -(pageProgress-0.6)*40
    //   pivot.rotation.x = -(pageProgress - 0.6) * Math.PI/4
    //   pivot.rotation.y = -(pageProgress - 0.6) * Math.PI - Math.PI
    
  })
}
