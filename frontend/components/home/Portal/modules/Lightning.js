import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'
import { getLightningOccurrence } from '@/utils/environment'

export default function Lightning({ currentWeather }) {
    const pointLightRef = useRef(null)
    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 100)

    const configs = getLightningOccurrence(currentWeather)

    useFrame((state, delta) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning') {
                if (Math.random() > 0.93 || child.power > 80) {
                    if (child.power < 50) {
                        child.position.set(
                            configs.positionX && configs.positionX(1000),
                            5,
                            configs.positionZ && configs.positionZ(10)
                        )
                    }
                    child.power = configs.power && configs.power(80)                }
            }
        })
    })

    useEffect(() => {
        pointLightHelper.current.visible = false
    }, [])

    return (
        <pointLight
            color={0x55A5EB}
            intensity={100}
            distance={300}
            decay={3}
            position={[- 20, 70, - 10]}
            name='lightning'
            visible={configs.visible}
            castShadow
            ref={pointLightRef}
        />
    )
}