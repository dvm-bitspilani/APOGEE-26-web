import helmet from "../../../../../assets/3d/registration/helmet.glb"
import { useGLTF } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef, useEffect } from "react"
import * as THREE from "three"

function HelmetModel() {
    const followRef = useRef<THREE.Group>(null!)
    const { mouse, camera } = useThree()

    const { scene } = useGLTF(helmet)

    const colour = useControls({
        color1: "#ffffffff",
        color2: "#6bffe5",
        color3: "#6bffe5",
        color4: "#f9ff00",
        // intensity: { value: 2, min: 0, max: 10, step: 0.1 },
    })

    // Cursor → 3D math helpers
    const raycaster = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2)
    // const followRef = useRef(ref.current)
    const target = useRef(new THREE.Vector3())
    const smooth = useRef(new THREE.Vector3())

    useFrame((_, delta) => {
        raycaster.setFromCamera(mouse, camera)
        raycaster.ray.intersectPlane(plane, target.current)

        // Clamp raw target
        target.current.x = THREE.MathUtils.clamp(target.current.x, -1.5, 1.5)
        target.current.y = THREE.MathUtils.clamp(target.current.y, -1, 1)

        // Smooth target
        smooth.current.lerp(
            target.current,
            1 - Math.exp(-delta * 8)
        )

        const localTarget = smooth.current.clone().sub(
            followRef.current.getWorldPosition(new THREE.Vector3())
        )

        followRef.current.lookAt(
            followRef.current.position.clone().add(localTarget)
        )
    })

    useEffect(() => {

        const handleResize = () => window.location.reload()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <group ref={followRef}>

            <group rotation={[0, Math.PI, 0]} position={[0, 0.3, 0]} scale={0.7}>
                <primitive object={scene} />
                <ambientLight intensity={2} color={colour.color1} />
                <directionalLight
                    position={[40, 40, 40]}
                    intensity={5.4}
                    color={colour.color2}
                />
                <directionalLight
                    position={[-40, 40, 40]}
                    intensity={5.4}
                    color={colour.color3}
                />
                <directionalLight
                    position={[10, 10, -10]}
                    intensity={4.8}
                    color={colour.color4}
                />
            </group>
        </group>
    )
}

export default function Helmet() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{
                width: "100%",
                height: "100%",
                zIndex: 100,
                backgroundColor: "transparent",
            }}
        >
            <HelmetModel />
        </Canvas>
    )
}
