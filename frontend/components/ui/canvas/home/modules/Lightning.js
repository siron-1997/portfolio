import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'
import { getLightningOccurrence } from '@/utils/environment'

export default function Lightning({ currentWeathers }) {
    const pointLightRef = useRef(null)
    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 100)

    const currentWeather = currentWeathers.filter(w =>
        w.main === 'Rain' || w.main === 'Thunderstorm' || w.main === 'Clouds' || w.main === 'Drizzle' || w.main === 'Clear'
    )[0]

    const configs = getLightningOccurrence(currentWeather)

    useFrame((state, _) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning') {
                /*  */
                if (Math.random() > 0.93 || child.power > 80000) {
                    if (child.power < 50000) {
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
    }, [])

    return (
        <pointLight
            color={0x55A5EB}
            intensity={8000000}
            distance={10000}
            decay={3}
            position={[- 20, 70, - 10]}
            name='lightning'
            visible={configs.visible}
            castShadow
            ref={pointLightRef}
        />
    )
}