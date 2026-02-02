import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useCityStore } from "../../../utils/store"

const SPEED = 0.15*4
const TILT = 0.015/5
const DAMPING = 0.08

export function useCityKeyboardControl() {
  const city = useCityStore((s) => s.city)

  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  })

  const offset = useRef({
    z: 0,
    rotZ: 0,
    x:0,
    rotY:0,
  })

  // 🎹 key listeners
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "w") keys.current.forward = true
      if (e.key === "s") keys.current.backward = true
      if (e.key === "a") keys.current.left = true
      if (e.key === "d") keys.current.right = true
    }

    const up = (e: KeyboardEvent) => {
      if (e.key === "w") keys.current.forward = false
      if (e.key === "s") keys.current.backward = false
      if (e.key === "a") keys.current.left = false
      if (e.key === "d") keys.current.right = false
    }

    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)

    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }
  }, [])

  useFrame(() => {
    if (!city) return

    // forward / backward
    if (keys.current.forward) offset.current.x -= SPEED
    if (keys.current.backward) offset.current.x += SPEED

    // tilt left / right
    if (keys.current.left) offset.current.rotY -= TILT
    if (keys.current.right) offset.current.rotY += TILT

    // damping back to neutral
    offset.current.x = THREE.MathUtils.lerp(offset.current.x, 0, DAMPING)
    offset.current.rotY = THREE.MathUtils.lerp(offset.current.rotY, 0, DAMPING)

    // 🔥 ADDITIVE application
    city.position.x += offset.current.x
    city.rotation.y += offset.current.rotY
  })
}
