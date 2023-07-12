import React from 'react'
import { useThree } from '@react-three/fiber'
import { Texture, RepeatWrapping, MathUtils, Vector3, FrontSide } from 'three'
import { useTexture } from '@react-three/drei'
import { useIsIos, useWindowSize } from '@/utils/hooks'
import { getEnvMapIntensity, setCloudsVisible } from '@/utils/environment'
import { BREAK_POINT_MB } from '@/assets/break-points'

type CustomProps = {
    cloudsAll: any,
    currentWeathers: any,
    timePoint: 'evening' | 'night' | 'lunch'
}

const Clouds: React.FC<CustomProps> = ({ cloudsAll, currentWeathers, timePoint }) => {
    const isIos = useIsIos()
    const { width } = useWindowSize()
    const { scene } = useThree()

    const currentWeather = currentWeathers.filter((w: any) =>
        w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Clear'
    )[0]

    const { thin, thick } = setCloudsVisible(currentWeather) // 圧雲と薄雲テクスチャーの表示切り替え
    const envMapIntensity = getEnvMapIntensity(currentWeather, timePoint, 'cloud') // 環境光の輝度を取得

    const clouds = {
        thin: { // 薄雲
            texture: useTexture(
                '/images/textures/thin_cloud.png',
                (texture: Texture) => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                    texture.repeat.x = texture.repeat.y = 1
                }
            ),
            scale: width > BREAK_POINT_MB ? 1 : 0.9, // デバイスに応じてスケールを切り替え
            position: width > BREAK_POINT_MB ? new Vector3(0, - 0.5, - 41) : new Vector3(- 5, 18, 10), // デバイスに応じて位置を切り替え
            rotation: width > BREAK_POINT_MB ?
                [MathUtils.degToRad(75), 0, 0] as [number, number, number]
            :
                [MathUtils.degToRad(55), 0, MathUtils.degToRad(180)] as [number, number, number] // デバイスに応じて角度を切り替え
        },
        thick: { // 厚雲
            texture: useTexture(
                '/images/textures/thick_cloud.png',
                (texture: Texture) => {
                    texture.wrapS = texture.wrapT = RepeatWrapping
                    texture.repeat.x = texture.repeat.y = 7
                }
            ),
            scale: width > BREAK_POINT_MB ? 1.3 : 2, // デバイスに応じてスケールを切り替え
            position: new Vector3(0, 5.3, - 10),
            rotation: [MathUtils.degToRad(75), 0, MathUtils.degToRad(- 90)] as [number, number, number]
        }
    }

    return (
        <group name='clouds' renderOrder={2}>
            {/* 薄雲 */}
            <mesh
                scale={clouds.thin.scale}
                position={clouds.thin.position}
                rotation={clouds.thin.rotation}
                visible={thin}
                name='thin cloud'
            >
                <planeGeometry args={[85, 85]} />
                <meshStandardMaterial
                    map={clouds.thin.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? cloudsAll / 100 : cloudsAll / 100}
                    envMap={scene.environment}
                    envMapIntensity={width > BREAK_POINT_MB ? envMapIntensity : envMapIntensity + 20}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            {/* 厚雲 */}
            <mesh
                scale={clouds.thick.scale}
                position={clouds.thick.position}
                rotation={clouds.thick.rotation}
                visible={thick}
                name='thick cloud'
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial
                    map={clouds.thick.texture}
                    side={FrontSide}
                    transparent={true}
                    opacity={isIos ? cloudsAll : cloudsAll / 110}
                    envMap={scene.environment}
                    envMapIntensity={envMapIntensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
        </group>
    )
}

export default Clouds