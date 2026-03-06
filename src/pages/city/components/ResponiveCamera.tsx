import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import gsap from 'gsap'
import { usePreloaderStateStore, useTheatreCameraStore } from '../../../utils/store'

export default function ResponsiveCamera() {
    const { size } = useThree()
    const showPreloader = usePreloaderStateStore((s) => s.showPreloader);
    const camera = useTheatreCameraStore((s) => s.theatreCamera)

    useEffect(() => {

        if (!camera) return;
        // 1. Your "Gold Standard" reference points
        const aspect = size.width / size.height

        if (aspect < 1 && !showPreloader) {
            gsap.to(camera, {
                fov: 54,
                delay: 1,
                duration: 6,
                ease: "easeInOut",
                onUpdate: () => camera.updateProjectionMatrix()
            })
            return;
        }

        const refAspRatio = 1920/1080
        const refFOV = 36

        // 2. Convert FOV to Radians for calculation
        const fovRad = (refFOV * Math.PI) / 180

        // 3. Calculate the new FOV based on the current width
        // This maintains a constant horizontal size for the object
        const tanHalfFOV = Math.tan(fovRad / 2) * (refAspRatio / aspect)

        const newFOV = (2 * Math.atan(tanHalfFOV) * 180) / Math.PI

        // 4. Update the camera
        camera.fov = newFOV
        camera.updateProjectionMatrix()
    }, [size.width, size.height, camera, showPreloader])

    return null
}