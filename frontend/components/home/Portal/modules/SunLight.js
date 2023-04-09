import { useRef, useEffect } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'

export default function SunLight({ color, intensity }) {
    const directionalLightRef = useRef()

    const directionalLightHelper = useHelper(directionalLightRef, DirectionalLightHelper, 1)

    const mapSize = 512,
          halfSize = 10

    useEffect(() => {
        directionalLightHelper.current.visible = false
    }, [])

    return (
        <directionalLight
            castShadow
            ref={directionalLightRef}
            color={color}
            intensity={intensity}
            position={[50, 50, 50]}
            shadow-mapSize={[mapSize, mapSize]}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={- halfSize}
            shadow-camera-right={halfSize}
            shadow-camera-top={halfSize}
            shadow-camera-bottom={- halfSize}
            shadow-radius={10}
        />
    )
}