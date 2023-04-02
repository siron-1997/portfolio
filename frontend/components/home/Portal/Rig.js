import { useFrame, useThree } from "@react-three/fiber"
import { CameraShake } from "@react-three/drei"
import { Vector3, Group } from "three"
import { useWindowSize } from "@/utils/hooks"

export default function Rig() {
    const vec = new Vector3()
    const { camera, mouse, scene } = useThree()
    const { width, height } = useWindowSize()
    const group = scene.children.filter(child => child instanceof Group && child.name === 'mountain')[0]
    const water = scene.children.filter(child => child instanceof Group && child.name === 'water')[0]

    if (group) {
        if (width >= 1920) {
            camera.position.set(- 2.5, 1.2, 13)
            group.position.y = - 0.85
            water.position.y = group.position.y - 0.1
        } else if (width < 1920 && width >= 1536) {
            camera.position.set(- 2.5, 0.8, 11.2)
            group.position.y = - 0.6
            water.position.y = group.position.y - 0.1
        } else if (width < 1536 && width >= 1280) {
            camera.position.set(- 2.7, 1.2, 11.8)
            group.position.y = - 0.4
            water.position.y = group.position.y - 0.1
        } else if (width < 1280 && width >= 1024) {
            camera.position.set(- 2.7, 0.5, 12)
            group.position.y = - 1.4
            water.position.y = group.position.y - 0.1
        } else if (width < 1024 && width >= 768) {
            if (width < height) {
                camera.position.set(- 3, 1.2, 22)
                group.position.y = - 3.2
                water.position.y = group.position.y - 0.1
            } else {
                camera.position.set(- 3, 0.6, 12)
                group.position.y = - 1.2
                water.position.y = group.position.y - 0.1
            }
        } else if (width < 768) {
            camera.position.set(- 3, 5.2, 28.8)
            console.log(camera.position)
            group.position.y = - 0.5
            water.position.y = group.position.y - 0.1
        }
    }


    useFrame(() => {
        // camera.position.lerp(
        //     vec.set(mouse.x * 1, 0, 10), 0
        // )
    })

    return <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.4}
        pitchFrequency={0.5}
    />
}