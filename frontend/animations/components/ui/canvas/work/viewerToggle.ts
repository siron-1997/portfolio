import { gsap } from 'gsap'
import { MathUtils } from 'three'
import { getViwerToggleCameraParams } from '@/utils/environment/getCameraParams'

type Props = {
    introduction: HTMLElement,
    cameraRef: any,
    offset: number,
    cameraConfigsData: any,
    toggleButton: any,
    width: number
}

/* ==========================================================================================
    ビュワーモード切り替えアニメーション
===========================================================================================*/
const viewerToggleAnimation = ({ introduction, cameraRef, offset, cameraConfigsData, toggleButton, width }: Props) => {
    const ctx = gsap.context(self => {
        const duration = 0.6
        const elementOffsetTop: number = introduction.getBoundingClientRect().top + window.scrollY + offset
        const html: HTMLElement = document.getElementsByTagName('html')[0],
              body: HTMLElement = document.body
        /* ローカル編集の際は '@/assets/camera-params' を参照 */
        const { cameraParams, zoom } = getViwerToggleCameraParams(cameraConfigsData, width)

        self.add('onStart', () => {
            /* カメラ位置 */
            gsap.to(cameraRef.current.position, {
                x: cameraParams.position.x, y: cameraParams.position.y - zoom, z: cameraParams.position.z - zoom,
                duration: duration
            })
            /* スクロール停止 & セクショントップに移動 */
            window.scrollTo({ top: elementOffsetTop, behavior: 'smooth' })
            html.style.overflow = 'hidden'
            body.style.overflow = 'hidden'
        })
        self.add('onEnd', () => {
            /* カメラ位置 */
            gsap.to(cameraRef.current.position, {
                x: cameraParams.position.x, y: cameraParams.position.y, z: cameraParams.position.z,
                duration: duration
            })
            /* カメラアングル */
            gsap.to(cameraRef.current.rotation, {
                x: MathUtils.degToRad(cameraParams.rotation.x),
                y: MathUtils.degToRad(cameraParams.rotation.y),
                z: MathUtils.degToRad(cameraParams.rotation.z),
                duration: duration,
                delay: duration
            })
            /* スクロール停止終了 */
            html.style.overflow = 'auto'
            body.style.overflow = 'auto'
        })
    }, cameraRef)

    /* Start & End ボタン */
    const startButton = toggleButton.children[1].children[0],
          endButton = toggleButton.children[2].children[0]

    startButton.addEventListener('click', () => ctx.onStart())
    endButton.addEventListener('click', () => ctx.onEnd())

    return ctx
}

export default viewerToggleAnimation