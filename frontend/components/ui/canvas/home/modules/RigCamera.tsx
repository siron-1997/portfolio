import { useRef, useContext, useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'
import { Group, Mesh } from 'three'
import { HomeElementContext } from '@/pages/index'
import { useWindowSize } from '@/utils/hooks'
import { setCameraPositions } from '@/utils/environment'
import { rigCameraAnimation } from '@/animations/components/ui/canvas/home'

export default function RigCamera({ doorRef }) {
    const cameraContainerRef = useRef(null)
    const { pageHeaderRef } = useContext(HomeElementContext)
    const { scene, camera } = useThree()
    const { width, height } = useWindowSize()

    useLayoutEffect(() => {
        const pageHeader = pageHeaderRef.current
        const models = scene.children.filter(child => child instanceof Group && child.name === 'models')[0] // シーン内のメッシュを取得
        const door = doorRef.current.children.filter(child => child instanceof Group && child.name === 'door-container')[0], // 扉とドアノブ
              room = doorRef.current.children.filter(child => child instanceof Mesh && child.name === 'room')[0] // 部屋
        /* 開始位置と終了位置をセット */
        const { startPosition, endPosition } = setCameraPositions(camera, models, width, height)
        /* アニメーション作成 */
        const ctx = rigCameraAnimation({
            startPosition,
            endPosition,
            pageHeader,
            door,
            room,
            cameraContainerRef,
            camera,
            width
        })

        return () => ctx.revert()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, doorRef, camera, pageHeaderRef, scene.children])

    return (
        <group name='camera-container' ref={cameraContainerRef}>
            <CameraShake
                maxYaw={0.01}
                maxPitch={0.01}
                maxRoll={0.01}
                yawFrequency={0.2}
                pitchFrequency={0.2}
            />
        </group>
    )
}