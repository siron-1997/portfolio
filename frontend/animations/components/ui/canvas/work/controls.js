import { gsap } from 'gsap'
import { MathUtils } from 'three'
import { getControlsCameraParams } from '@/utils/environment/getCameraParams'

/* =============================================================================
    アニメーション作成
==============================================================================*/
const createAnimation = ({
    previousPosition, previousRotation, targetPosition, targetRotation, camera
}) => {
    const currentPosition = previousPosition,
          currentRotation = previousRotation
    const position = gsap.timeline({ paused: true }), // カメラ位置
          rotation = gsap.timeline({ paused: true }) // カメラアングル
    const duration = 0.8
    const options = { ease: 'power4.out', duration: duration } // デフォルト設定
    /* カメラ位置 */
    position.from(camera.position, { x: currentPosition.x, y: currentPosition.y, z: currentPosition.z })
    position.to(camera.position, { x: targetPosition.x, y: targetPosition.y, z: targetPosition.z, ...options })
    /* カメラアングル */
    rotation.from(camera.rotation, {
        x: currentRotation.x, y: currentRotation.y, z: currentRotation.z
    })
    rotation.to(camera.rotation, {
        x: MathUtils.degToRad(targetRotation.x),
        y: MathUtils.degToRad(targetRotation.y),
        z: MathUtils.degToRad(targetRotation.z),
        ...options
    })

    return { position, rotation }
}

/* =============================================================================
    コントロール アニメーション
==============================================================================*/
export default function controlsAnimation({
    previousPosition,
    previousRotation,
    cameraRef,
    currentIndex,
    isInitialControl,
    isStartControls,
    width,
    cameraConfigsData
}) {
    /* ローカル編集の際は '@/assets/camera-params' を参照 */
    /* 各コントロールアニメーションの作成および取得 */
    const ctx = gsap.context(() => {
        const controlsAnimations = cameraConfigsData?.controls.map(currentCameraParams => {
            const cameraParams = getControlsCameraParams(currentCameraParams, width)
            const animation = createAnimation({
                previousPosition,
                previousRotation,
                targetPosition: cameraParams.position,
                targetRotation: cameraParams.rotation,
                camera: cameraRef.current
            })
    
            return animation
        })
        /* 選択されたコントロールに対応するアニメーションを再生 */
        controlsAnimations.forEach((animation, i) => {
            if (!isInitialControl && isStartControls) {
                if (currentIndex === i) {
                    animation.position.play()
                    animation.rotation.play()
                }
            }
        })
    }, cameraRef)

    return ctx
}