import { RepeatWrapping, MathUtils, FrontSide } from 'three'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useIsIos, useWindowSize } from '@/utils/hooks'
import { getEnvMapIntensity, setCloudsVisible } from '@/utils'
import { BREAK_POINT_MOBILE } from '@/assets/break-points'

export default function Clouds({ cloudsAll, currentWeather, timePoint }) {
    const isIos = useIsIos()
    const { width } = useWindowSize()
    const { scene } = useThree()

    const { thin, thick } = setCloudsVisible(currentWeather)
    const envMapIntensity = getEnvMapIntensity(currentWeather, timePoint, 'clouds')

    const clouds = {
        thin: {
            texture: useTexture(
                '/images/textures/thin_cloud.png',
                texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                    texture.repeat.x = texture.repeat.y = width > BREAK_POINT_MOBILE ? 1 : 1
                }
            ),
            scale: width > BREAK_POINT_MOBILE ? 1 : 0.9,
            positions: width > BREAK_POINT_MOBILE ? [ 0, - 0.5, - 41 ] : [ - 5, 18, 10 ],
            rotations: width > BREAK_POINT_MOBILE ? [ MathUtils.degToRad(75), 0, 0 ] : [ MathUtils.degToRad(55), 0, MathUtils.degToRad(180) ]
        },
        thick: {
            texture: useTexture(
                '/images/textures/thick_cloud.png',
                texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                    texture.repeat.x = texture.repeat.y = 7
                }
            ),
            scale: width > BREAK_POINT_MOBILE ? 1 : 2,
            positions: width > BREAK_POINT_MOBILE ? [] : []
        }
    }

    return (
        <group name='clouds' renderOrder={2}>
            <mesh
                scale={clouds.thin.scale}
                position={clouds.thin.positions}
                rotation={clouds.thin.rotations}
                visible={thin}
                name='thin cloud'
            >
                <planeGeometry args={[80, 80]} />
                <meshStandardMaterial
                    map={clouds.thin.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? cloudsAll / 100 : cloudsAll / 100}
                    envMap={scene.environment}
                    envMapIntensity={width > BREAK_POINT_MOBILE ? envMapIntensity : envMapIntensity + 20}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            <mesh
                scale={clouds.thick.scale}
                position={[0, 5.3, - 10]}
                rotation={[MathUtils.degToRad(75), 0, MathUtils.degToRad(- 90)]}
                visible={thick}
                name='thick cloud'
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial
                    map={clouds.thick.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? cloudsAll : cloudsAll / 100}
                    envMap={scene.environment}
                    envMapIntensity={envMapIntensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
        </group>
    )
}