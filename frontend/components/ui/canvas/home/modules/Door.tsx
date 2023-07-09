import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MathUtils, BackSide } from 'three'
import { getEnvMapIntensity } from '@/utils/environment'

export default function Door({ currentWeathers, timePoint, doorRef }) {
    const pointLightRef = useRef(null)
    const { nodes } = useGLTF('/models/gltf/door.glb') // glbファイル読込み
    const { scene } = useThree()
    
    const currentWeather = currentWeathers.filter(w =>
        w.main === 'Clear' || w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Thunderstorm'
    )[0]
    
    const environment = scene.environment // 環境マップ
    const envMapIntensity = getEnvMapIntensity(currentWeather, timePoint, 'model') // 環境光の輝度を取得

    const groupScale = 0.02,
          meshScale = 0.1
    const meshAngle = 90

    return (
        <group
            ref={doorRef}
            name='Door'
            scale={[ groupScale, groupScale, groupScale ]}
            rotation-y={MathUtils.degToRad(- 90)}
            position={[ - 3.6, 0.002, 4.2 ]}
        >
            {/* 部屋 */}
            <mesh
                name={nodes?.room?.name}
                geometry={nodes?.room?.geometry}
                rotation-x={MathUtils.degToRad(meshAngle)}
                scale={meshScale}
            >
                <meshBasicMaterial
                    map={nodes?.room?.material?.map} side={BackSide} transparent={true} opacity={0}
                />
            </mesh>
            {/* 扉 */}
            <group name='door-container' position={[ 1.2, 0, 5.9 ]}>
                {/* ドアノブ */}
                <mesh
                    name={nodes?.handle?.name}
                    geometry={nodes?.handle?.geometry}
                    position={[ - 1.2, 0, - 5.9 ]}
                    rotation-x={MathUtils.degToRad(meshAngle)}
                    scale={meshScale}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        color={nodes?.handle?.material?.color} envMap={environment} envMapIntensity={envMapIntensity}
                    />
                </mesh>
                {/* パネル */}
                <mesh
                    name={nodes?.door?.name}
                    geometry={nodes?.door?.geometry}
                    position={[ - 1.2, 0, - 5.9 ]}
                    rotation-x={MathUtils.degToRad(meshAngle)}
                    scale={meshScale}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        color={nodes?.door?.material?.color} envMap={environment} envMapIntensity={envMapIntensity}
                    />
                </mesh>
            </group>
            {/* 扉フレーム */}
            <mesh
                name={nodes?.frame?.name}
                geometry={nodes?.frame?.geometry}
                rotation-x={MathUtils.degToRad(meshAngle)}
                scale={meshScale}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial
                    color={nodes?.frame?.material?.color} envMap={environment} envMapIntensity={envMapIntensity}
                />
            </mesh>
            <pointLight
                ref={pointLightRef}
                name='door-light'
                power={50}
                color={'#dda862'}
                distance={0.8}
                decay={1}
                position={[ 10, 31, 0 ]}
            />
        </group>
    )
}