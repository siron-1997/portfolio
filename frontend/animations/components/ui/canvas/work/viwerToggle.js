import { gsap } from 'gsap'
import { MathUtils } from 'three'
import { getViwerToggleCameraParams } from '@/utils/environment/getCameraParams'

/* ==========================================================================================
    ビュワーモード切り替えアニメーション
===========================================================================================*/
export default function viwerToggleAnimation({
    element, isViewerActive, camera, offset, cameraConfigsData
}) {
    const width = window.innerWidth
    const animation = gsap.timeline({ paused: true })
    const duration = 0.6
    const elementOffsetTop = element.getBoundingClientRect().top + window.scrollY - offset
    const html = document.getElementsByTagName('html')[0],
          body = document.body
    /* デフォルト設定 */
    const options = {
        ease: 'power1.out',
        duration: duration,
        scrollTrigger: {
            trigger: element,
            markers: false,
            start: '-15% top',
            end: '40% top',
        } 
    }
    /* ローカル編集の際は '@/assets/camera-params' を参照 */
    const { cameraParams, zoom } = getViwerToggleCameraParams(cameraConfigsData, width)

    if (isViewerActive) { // ビュワーモード開始時、ズームインおよびスクロールを固定
        html.style.overflow = 'hidden'
        body.style.overflow = 'hidden'
        window.scrollTo({ top: elementOffsetTop, behavior: 'smooth' })
        /* カメラ位置 */
        animation.to(camera.position, {
            x: cameraParams.position.x, y: cameraParams.position.y - zoom, z: cameraParams.position.z - zoom,
            ...options
        })
    } else { // ビュワーモード終了時、ズームアウトおよびスクロール位置の固定解除
        /* カメラ位置 */
        animation.to(camera.position, {
            x: cameraParams.position.x, y: cameraParams.position.y, z: cameraParams.position.z,
            ...options,
            onComplete: () => {
                html.style.overflow = 'auto'
                body.style.overflow = 'auto'
            }
        })
        /* カメラアングル */
        animation.to(camera.rotation, {
            x: MathUtils.degToRad(cameraParams.rotation.x),
            y: MathUtils.degToRad(cameraParams.rotation.y),
            z: MathUtils.degToRad(cameraParams.rotation.z),
            ...options
        }, `-=${duration}`)
    }

    animation.play()

    /* クリーンアップ */
    return () => {
        animation.kill()
        html.style.overflow = 'auto'
        body.style.overflow = 'auto'
    }
}