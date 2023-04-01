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
            intensity={3}
            position={[50, 50, 50]}
        />
    )
}