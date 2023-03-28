import { useFrame, useThree } from "@react-three/fiber"
import { CameraShake } from "@react-three/drei"
import { Vector3 } from "three"
import { useWindowSize } from "@/utils/hooks"

export default function Rig() {
    const vec = new Vector3()
    const { camera, mouse } = useThree()
    const { width } = useWindowSize()

    camera.position.x = 2.5

    useFrame(() => {
        camera.position.lerp(
            vec.set(mouse.x * 1, 1.2, 10), 0.0
        )
        camera.position.x = 1.2 / (width / 1600)
        camera.position.z = 9 / (width / 1200)
        if (width < 576) {
            camera.position.y = 1.6 / (width / 800)
            camera.lookAt(- 1, 2 / (width / 1980), 0)
        } else {
            if (width < 1024) {
                camera.lookAt(- 1, 2 / (width / 1900), 0)
                if (width > 576 && width < 768) {
                    camera.position.y = 1.4 / (width / 800)
                } else {
                    camera.position.y = 1 / (width / 800)
                    camera.position.z = 9.5 / (width / 1200)
                }
            } else {
                camera.position.x = 1 / (width / 1600)
                camera.position.y = 1 / (width / 1000)
                camera.position.z = 10 / (width / 1200)
                camera.lookAt(- 1, 2 / (width / 1400), 0)
                if (width >= 1280 && width < 1920) {
                    camera.position.z = 10 / (width / 1400)
                    camera.lookAt(- 1, 2 / (width / 1600), 0)
                } else if (width >= 1920) {
                    camera.position.z = 10 / (width / 1800)
                    camera.lookAt(- 1, 2 / (width / 2400), 0)
                }
            }
        }
    })

    return <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.5}
        pitchFrequency={0.4}
    />
}