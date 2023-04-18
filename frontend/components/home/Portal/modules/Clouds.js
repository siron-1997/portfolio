import { RepeatWrapping, MathUtils, FrontSide } from 'three'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useIsIos } from '@/utils/hooks'

export default function Clouds({ opacity, envMapIntensity, currentWeather }) {
    const isIos = useIsIos()
    const { scene } = useThree()

    const clouds = {
        thinCloud: {
            texture: useTexture(
                '/images/textures/broken_cloud.png',
                texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                }
            ),
            visible: weatherState => {
                let visible = false

                switch (weatherState) {
                    case 'few clouds':
                    case 'scattered clouds':
                    case 'broken clouds':
                        visible = true
                        break
                    case 'clear sky':
                    default:
                        visible = false
                        break
                }

                return visible
            }
        },
        thickCloud: {
            texture: useTexture(
                '/images/textures/cloud.png',
                texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                    texture.repeat.x = texture.repeat.y = 7
                }
            ),
            visible: weatherState => {
                let visible = false

                switch (weatherState) {
                    case 'overcast clouds':
                    case 'light rain':
                    case 'moderate rain':
                    case 'heavy intensity rain':
                    case 'very heavy rain':
                    case 'extreme rain':
                    case 'light intensity shower rain':
                    case 'shower rain':
                    case 'heavy intensity shower rain':
                    case 'ragged shower rain':
                    case 'thunderstorm with light rain':
                    case 'thunderstorm with rain':
                    case 'thunderstorm with heavy rain':
                        visible = true
                        break
                    case 'clear sky':
                    default:
                        visible = false
                        break
                }

                return visible
            }
        }
    }

    return (
        <group name='clouds' renderOrder={2}>
            <mesh
                position={[0, 5.3, - 10]}
                rotation={[MathUtils.degToRad(75), 0, MathUtils.degToRad(- 90)]}
                visible={clouds.thickCloud.visible(currentWeather)}
                name='thick cloud'
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial
                    map={clouds.thickCloud.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? opacity : opacity / 100}
                    envMap={scene.environment}
                    envMapIntensity={envMapIntensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            <mesh
                position={[0, - 0.5, - 41]}
                rotation={[MathUtils.degToRad(75), 0, 0]}
                visible={clouds.thinCloud.visible(currentWeather)}
                name='thin cloud'
            >
                <planeGeometry args={[80, 80]} />
                <meshStandardMaterial
                    map={clouds.thinCloud.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? opacity : opacity / 100}
                    envMap={scene.environment}
                    envMapIntensity={envMapIntensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
        </group>
    )
}