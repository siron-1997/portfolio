import { RepeatWrapping, MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useIsIos } from '@/utils/hooks'

export default function Clouds({ opacity, intensity, thickCloudVisible, thinCloudVisible }) {
    const isIos = useIsIos()
    const { scene } = useThree()

    const thickCloudTexture = useTexture('/images/textures/smoke.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })
    const thinCloudTexture = useTexture('/images/textures/broken_cloud.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })

    return (
        <group name='clouds' renderOrder={2}>
            <mesh
                position={[0, 5.3, - 10]}
                rotation={[MathUtils.degToRad(75), 0, MathUtils.degToRad(- 90)]}
                visible={thickCloudVisible}
                name='thick cloud'
            >
                <planeGeometry args={[250, 250]} />
                <meshStandardMaterial
                    map={thickCloudTexture}
                    transparent={true}
                    opacity={isIos ? opacity : opacity / 100}
                    envMap={scene.environment}
                    envMapIntensity={intensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            <mesh
                position={[0, - 0.5, - 41]}
                rotation={[MathUtils.degToRad(75), 0, 0]}
                visible={thinCloudVisible}
                name='thin cloud'
            >
                <planeGeometry args={[80, 80]} />
                <meshStandardMaterial
                    map={thinCloudTexture}
                    transparent={true}
                    opacity={isIos ? opacity : opacity / 100}
                    envMap={scene.environment}
                    envMapIntensity={intensity}
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
        </group>
    )
}