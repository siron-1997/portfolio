import { Environment } from '@react-three/drei'
import { BackSide } from 'three'

export default function WeatherEnvironment({
    background, timePoint, currentWeather, cloudsAll, color
}) {
    return (
        <Environment background={background}>
            <mesh name='env cube'>
                <boxGeometry args={[200, 200, 200]} />
                <meshBasicMaterial
                    color={color}
                    side={BackSide}
                    transparent={true}
                    opacity={timePoint === 'night' && currentWeather === 'clear sky' ? 0.2 : cloudsAll / 100} // 雲の密度 0 ~ 1
                />
            </mesh>
        </Environment>
    )
}