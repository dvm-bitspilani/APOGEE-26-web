import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useCityStore } from "../../../utils/store"

const SPEED = 0.15*4
const TILT = 0.0015/5
const DAMPING = 0.05

export function useCityKeyboardControl() {
  const city = useCityStore((s) => s.city)

  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
    rotClock: false,
    rotAntiClock: false,
  })

  const offset = useRef({
    z: 0,
    rotZ: 0,
    x:0,
    y:0,
    rotY:0,
  })

  // 🎹 key listeners
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "w") keys.current.forward = true
      if (e.key === "s") keys.current.backward = true
      if (e.key === "a") keys.current.left = true
      if (e.key === "d") keys.current.right = true
      if (e.key === "PageUp") keys.current.up = true
      if (e.key === "PageDown") keys.current.down = true
      if (e.key === "q") keys.current.rotAntiClock = true
      if (e.key === "e") keys.current.rotClock = true
    }

    const up = (e: KeyboardEvent) => {
      if (e.key === "w") keys.current.forward = false
      if (e.key === "s") keys.current.backward = false
      if (e.key === "a") keys.current.left = false
      if (e.key === "d") keys.current.right = false
      if (e.key === "PageUp" || e.key === "Up") keys.current.up = false
      if (e.key === "PageDown" || e.key === "Down") keys.current.down = false
      if (e.key === "q") keys.current.rotAntiClock = false
      if (e.key === "e") keys.current.rotClock = false
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
    if (keys.current.forward) offset.current.z -= SPEED
    if (keys.current.backward) offset.current.z += SPEED

    if (keys.current.left) offset.current.x -= SPEED
    if (keys.current.right) offset.current.x += SPEED

    if (keys.current.up) offset.current.y -= SPEED*0.1
    if (keys.current.down) offset.current.y += SPEED*0.1
    // tilt left / right
    if (keys.current.rotAntiClock) offset.current.rotY -= TILT
    if (keys.current.rotClock) offset.current.rotY += TILT

    // damping back to neutral
    offset.current.x = THREE.MathUtils.lerp(offset.current.x, 0, DAMPING)
    offset.current.y = THREE.MathUtils.lerp(offset.current.y, 0, DAMPING)
    offset.current.z = THREE.MathUtils.lerp(offset.current.z, 0, DAMPING)
    offset.current.rotY = THREE.MathUtils.lerp(offset.current.rotY, 0, DAMPING)

    // 🔥 ADDITIVE application
    city.position.z += offset.current.z
    city.position.x += offset.current.x
    city.position.y += offset.current.y
    city.rotation.y += offset.current.rotY
  })
}
