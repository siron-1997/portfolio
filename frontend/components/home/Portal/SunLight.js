import { useThree } from '@react-three/fiber'

export default function SunLight() {
    useThree((state, delta) => {
        state.camera.lookAt(0, 2, 0)
        state.scene.children.forEach(child => {
            if (child.type === 'DirectionalLight') {
                const camera = child.shadow.camera
                // camera.top = camera.right = 10
                // camera.bottom = camera.left = - 10
                // camera.far = 1000
            }
        })
    })

    return (
        <directionalLight
            color='0x0064b5'
            intensity={2}
            position={[50, 50, 50]}
            castShadow
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            shadow-camera-near={1}
            shadow-camera-far={1}
            shadow-camera-top={10}
            shadow-camera-bottom={- 10}
            shadow-camera-left={- 10}
            shadow-camera-right={10}
        />
    )
}