import React from 'react'
import { Environment } from '@react-three/drei'
import { BackSide } from 'three'
import { getEnvironmentColor } from '@/utils/environment'

type Props = {
    timePoint: 'evening' | 'night' | 'lunch'
}

const WeatherEnvironment: React.FC<Props> = ({ timePoint }) => {
    const color: string = getEnvironmentColor(timePoint)

    return (
        <Environment background={true}>
            <mesh name='env cube'>
                <boxGeometry args={[200, 200, 200]} />
                <meshBasicMaterial
                    color={color}
                    side={BackSide}
                    transparent={true}
                    opacity={0.2}
                />
            </mesh>
        </Environment>
    )
}

export default WeatherEnvironment