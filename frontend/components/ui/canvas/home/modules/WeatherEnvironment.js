import { Environment } from '@react-three/drei'
import { BackSide } from 'three'
import { getEnvironmentColor } from '@/utils/environment'

export default function WeatherEnvironment({ timePoint }) {
    const color = getEnvironmentColor(timePoint)

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