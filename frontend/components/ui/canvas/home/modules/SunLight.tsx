import React, { useRef, useEffect } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper, DirectionalLight } from 'three'
import { getSunIntensity, getSunColor } from '@/utils/environment'

type CustomProps = {
    currentWeathers: any,
    timePoint: 'evening' | 'night' | 'lunch'
}

const SunLight: React.FC<CustomProps> = ({ currentWeathers, timePoint }) => {
    const sunLightRef = useRef<DirectionalLight | null>(null)
    const sunLightHelper = useHelper(sunLightRef, DirectionalLightHelper, 1)

    const currentWeather: any = currentWeathers.filter((w: any) => 
       w.main === 'Clear' || w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Thunderstorm'
    )[0]

    const mapSize: number = 512,
          halfSize: number = 20

    const color: string = getSunColor(currentWeather, timePoint),
          intensity: number = getSunIntensity(currentWeather, timePoint)

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

export default SunLight