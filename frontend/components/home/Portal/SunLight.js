import { Color } from 'three'
import { useThree } from '@react-three/fiber'

export default function SunLight() {
    const size = 50

    useThree((state, delta) => {
        console.log(state)
        state.camera.lookAt(0, 2, 0)
    })

    // '0x0064b5'

    return (
        <directionalLight
            color='#6D4FD7'
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