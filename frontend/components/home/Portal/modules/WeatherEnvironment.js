import { Environment } from '@react-three/drei'
import { BackSide, Color } from 'three'

export default function WeatherEnvironment({ background, color }) {
    return (
        <Environment background={background}>
            <mesh name='env cube'>
                <boxGeometry args={[200, 200, 200]} />
                <meshBasicMaterial
                    color={new Color(color)}
                    side={BackSide}
                    transparent={true}
                    opacity={0.2}
                />
            </mesh>
        </Environment>
    )
}