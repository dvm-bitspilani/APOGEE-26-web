import * as THREE from "three";
import { useActiveSheetStore, useInfernusStore, useNavStateStore, useTheatreCameraStore } from "./store";
import { useEffect, useMemo, useRef } from "react";
import { introAnimSheet } from "../pages/city/components/ScrollSync/ScrollSync";
import { useFrame } from "@react-three/fiber";
import type { ISheetObject } from "@theatre/core";

export const EnterDashboard = () => {
    const navState = useNavStateStore((s) => s.navState)
    const setNavState = useNavStateStore((s) => s.setNavState)
    const infernus = useInfernusStore((s) => s.infernus)
    const camera = useTheatreCameraStore((s) => s.theatreCamera)?.parent
    const carQuaternion = useMemo(() => new THREE.Quaternion(), [])
    const targetPos = useMemo(() => new THREE.Vector3(), [])
    const targetRot = useMemo(() => new THREE.Euler(), [])
    useFrame(() => {
        if (navState !== "opening" || !camera || !infernus) return

        targetPos.set(infernus.position.x, infernus.position.y + 3.6, infernus.position.z - 2);
        targetRot.set(infernus.rotation.x - Math.PI, -infernus.rotation.y, -infernus.rotation.z + Math.PI)

        carQuaternion.setFromEuler(targetRot)

        camera.position.lerp(targetPos, 0.15)
        camera.quaternion.slerp(carQuaternion, 0.15)

        if (camera.position.distanceTo(targetPos) < 0.01) {
            camera.position.copy(targetPos)
            camera.rotation.copy(targetRot)
            setNavState("open")
        }
    })

    return null;
}

export const ExitDashboard = () => {
    const navState = useNavStateStore((s) => s.navState)
    const setNavState = useNavStateStore((s) => s.setNavState)
    const cameraObjRef = useRef<ISheetObject<typeof cameraConfig> | null>(null);
    const camera = useTheatreCameraStore((s) => s.theatreCamera)?.parent;
    const targetPos = useMemo(() => new THREE.Vector3(), [])
    const targetRot = useMemo(() => new THREE.Euler(), [])
    const CamQuaternion = useMemo(() => new THREE.Quaternion(), [])
    const activeSheet = useActiveSheetStore((s) => s.activeSheet)
    const cameraConfig = {
        near: 0.1,
        far: 1750,
        fov: 60,
        zoom: 1,
        position: { x: 0, y: 7, z: -31 },
        rotation: { x: -3.141, y: 0, z: 3.141 },
        scale: { x: 1, y: 1, z: 1 }
    }

    useEffect(() => {
        if (activeSheet === "Cyber City") {
            cameraObjRef.current = introAnimSheet.object('TheatreCamera', cameraConfig);
        }
    }, [activeSheet])

    useFrame(() => {
        if (navState !== "closing" || !camera || !cameraObjRef.current) return

        targetPos.set(cameraObjRef.current.value.position.x, cameraObjRef.current.value.position.y, cameraObjRef.current.value.position.z - 43)
        targetRot.set(cameraObjRef.current.value.rotation.x, cameraObjRef.current.value.rotation.y, cameraObjRef.current.value.rotation.z)

        CamQuaternion.setFromEuler(targetRot);

        camera.position.lerp(targetPos, 0.1);
        camera.quaternion.slerp(CamQuaternion, 0.1)

        if (camera.position.distanceTo(targetPos) < 0.1) {
            camera.position.copy(targetPos)
            camera.rotation.copy(targetRot)
            setNavState("off")
        }
    })

    return null;
}