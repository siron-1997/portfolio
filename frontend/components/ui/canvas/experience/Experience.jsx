import { OrbitControls } from '@react-three/drei'
import { Lights, Model, TestObjects } from './modules'

export default function Experience() {
    return (
        <>
            <Lights />
            <Model file={'/models/gltf/rc_plane_animation_5.glb'} />
            {/* <TestObjects /> */}
            <OrbitControls />
        </>
    )
}