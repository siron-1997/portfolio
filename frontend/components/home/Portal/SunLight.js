import { Color, Vector3 } from 'three'
import { useThree, useFrame } from '@react-three/fiber'

export default function SunLight({ color }) {
    const size = 50

    const vec = new Vector3()

    const { camera, mouse } = useThree()

    // camera.lookAt(0, 2, 0)

    // useFrame(() => {
    //     camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05)
    // })

    return (
        <directionalLight
            color={color}
            intensity={4}
            position={[50, 50, 50]}
            castShadow
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            shadow-bias={0.0015}
            shadow-normalBias={0.4}
            shadow-camera-near={1}
            shadow-camera-far={90}
            shadow-camera-top={size}
            shadow-camera-bottom={- size}
            shadow-camera-left={- size}
            shadow-camera-right={size}
        />
    )
}