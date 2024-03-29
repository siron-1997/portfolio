import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { PointLight, PointLightHelper } from 'three'
import { getLightningOccurrence } from '@/utils/environment'

type Props = {
    currentWeathers: any
}

const Lightning: React.FC<Props> = ({ currentWeathers }) => {
    const pointLightRef = useRef<PointLight | null>(null)
    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 100)

    const currentWeather = currentWeathers.filter((w: any) =>
        w.main === 'Rain' || w.main === 'Thunderstorm' || w.main === 'Clouds' || w.main === 'Drizzle' || w.main === 'Clear'
    )[0]

    const configs = getLightningOccurrence(currentWeather)

    useFrame((state, _) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning' && child instanceof PointLight) {
                if (Math.random() > 0.93 || child.power > 8000) {
                    if (child.power < 5000) {
                        child.position.set(
                            configs.positionX && configs.positionX(350),
                            5,
                            configs.positionZ && configs.positionZ(25)
                        )
                    }
                    child.power = configs.power && configs.power(8)
                }
            }
        })
    })

    useEffect(() => {
        pointLightHelper.current.visible = false
    }, [pointLightHelper])

    return (
        <pointLight
            color={0x55A5EB}
            intensity={800000}
            distance={80}
            decay={2}
            position={[- 20, 70, - 10]}
            name='lightning'
            visible={configs.visible}
            castShadow
            ref={pointLightRef}
        />
    )
}

export default Lightning