import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'
import { lightningColor } from '@assets/env-colors'

export default function Lightning({ configs }) {
    const pointLightRef = useRef()
    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 100)

    useFrame((state, delta) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning') {
                if (Math.random() > 0.93 || child.power > 80) {
                    if (child.power < 50) {
                        child.position.set(
                            configs.positionX(1000),
                            5,
                            configs.positionZ(10)
                        )
                    }
                    child.power = configs.power !== undefined && configs.power(80)                }
            }
        })
    })

    useEffect(() => {
        pointLightHelper.current.visible = false
    }, [])

    return (
        <pointLight
            color={lightningColor}
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