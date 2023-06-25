import { useRef, useEffect } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { getSunIntensity, getSunColor } from '@/utils/environment'

export default function SunLight({ currentWeathers, timePoint }) {
    const sunLightRef = useRef(null)
    const sunLightHelper = useHelper(sunLightRef, DirectionalLightHelper, 1)

    const currentWeather = currentWeathers.filter(w => 
       w.main === 'Clear' || w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Thunderstorm'
    )[0]

    const mapSize = 512,
          halfSize = 20

    const color = getSunColor(currentWeather, timePoint),
          intensity = getSunIntensity(currentWeather, timePoint)

    useEffect(() => {
        sunLightHelper.current.visible = false
    }, [sunLightHelper])

    return (
        <directionalLight
            ref={sunLightRef}
            castShadow
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
            shadow-normalBias={0.11}
        />
    )
}