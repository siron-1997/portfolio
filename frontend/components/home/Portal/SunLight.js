import { Color, Vector3 } from 'three'
import { useThree, useFrame } from '@react-three/fiber'

export default function SunLight({ color, intensity }) {
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
            intensity={intensity}
            position={[50, 50, 50]}
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={300}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
            castShadow
        />
    )
}