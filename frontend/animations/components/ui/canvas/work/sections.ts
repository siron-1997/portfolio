import { gsap } from 'gsap'
import { MathUtils } from 'three'
import { getSectionsCameraParams } from '@/utils/environment/getCameraParams'
import { BREAK_POINT_TB } from '@/assets/break-points'

type CreateSectionAnimationProps = {
    element: any,
    startPosition: any,
    startRotation: any,
    targetPosition?: any,
    targetRotation?: any,
    setIsStartControls?: any,
    setIsNavigationVisible?: any,
    width?: number,
    camera: any
}
type SectionsAnimationProps = {
    pageHeader: HTMLElement,
    introduction: HTMLElement,
    controls: HTMLElement,
    camera: any,
    setIsStartControls: any,
    setIsNavigationVisible: any,
    cameraConfigsData: any
}

/* ============================================================
    アニメーション 作成
=============================================================*/
const createSectionAnimation = ({
    element,
    startPosition,
    targetPosition,
    startRotation,
    targetRotation,
    setIsStartControls,
    setIsNavigationVisible,
    width,
    camera
}: CreateSectionAnimationProps) => {
    const ctx = gsap.context(() => {
        const position = gsap.timeline(), // カメラ位置 アニメーション
              rotation = gsap.timeline() // カメラアングル アニメーション
    
        let startPoint = '',
            endPoint = ''

        /* 各セクションのアニメーション開始・終了位置を設定 */
        switch (element.id) {
            case 'model-viewer':
                startPoint = 'top top'
                endPoint = '90% top'
                break
            case 'introduction':
                startPoint = '23% top'
                endPoint = '80% top'
                break
            case 'controls':
                startPoint = width >= BREAK_POINT_TB ? '-23% top' : '-13% top'
                endPoint = '-13% top'
                break
            default:
                break
        } 
        /* デフォルト設定 */
        const options = {
            ease: 'power4.out',
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                markers: false,
                scrub: true,
                start: startPoint,
                end: endPoint,
                animate: {
                    ease: 'power1.out',
                    duration: 1
                }
            } 
        }
    
        /* 各セクション・アニメーションタイプの開始前の処理 */
        const handleStart = (type: string) => {
            /* カメラ位置のとき */
            if (type === 'position') {
                /* Controlsセクション内アニメーション再生の有効およびコントロールボタンの表示。 */
                if (element.id === 'controls') {
                    setIsStartControls(() => true)
                    setIsNavigationVisible(() => true)
                }
            }
        }
        /* 各セクション・アニメーションタイプごとの逆再生完了時の処理 */
        const handleReverseComplete = (type: string, animation: any = null) => {
             /* カメラ位置のとき */
            if (type === 'position') {
                /* Controlsセクション内アニメーション再生の無効およびコントロールボタンの非表示。
                   カメラ位置・アングルを元に戻すアニメーションを再生（再生が終了するまでスクロール位置を固定）。 */
                if (element.id === 'controls') {
                    setIsStartControls(() => false)
                    setIsNavigationVisible(() => false)
                    if (animation !== null) {
                        const duration = 0.25
                        animation.to(camera.position, { x: startPosition.x, y: startPosition.y, z: startPosition.z, duration: duration })
                        animation.to(camera.rotation, {
                            x: MathUtils.degToRad(startRotation.x),
                            y: MathUtils.degToRad(startRotation.y),
                            z: MathUtils.degToRad(startRotation.z),
                            duration: duration
                        }, `-=${duration}`)
                        animation.play()
                        animation.then(() => { // 再生終了後の処理
                            animation.kill()
                        })
                    }
                }
            }
        }
    
        if (!(element.id === 'controls')) { // Controls セクション以外
            /* カメラ位置 */
            position.set(camera.position, { x: startPosition.x, y: startPosition.y, z: startPosition.z })
            position.from(camera.position, { x: startPosition.x, y: startPosition.y, z: startPosition.z })
            position.to(camera.position, { x: targetPosition.x, y: targetPosition.y, z: targetPosition.z, ...options })
            /* カメラアングル */
            rotation.set(camera.rotation, {
                x: MathUtils.degToRad(startRotation.x),
                y: MathUtils.degToRad(startRotation.y),
                z: MathUtils.degToRad(startRotation.z)
            })
            rotation.from(camera.rotation, {
                x: MathUtils.degToRad(startRotation.x),
                y: MathUtils.degToRad(startRotation.y),
                z: MathUtils.degToRad(startRotation.z)
            })
            rotation.to(camera.rotation, {
                x: MathUtils.degToRad(targetRotation.x),
                y: MathUtils.degToRad(targetRotation.y),
                z: MathUtils.degToRad(targetRotation.z),
                ...options
            })
        } else { // Controls セクション
            /* 変更されたカメラアングルを元のアングルに戻すアニメーション */
            const animation = gsap.timeline({ paused: true, duration: 0.6, ease: 'none' })
            /* カメラ位置  */
            position.to(camera.position, {
                ...options,
                onStart: () => handleStart('position'),
                onReverseComplete: () => handleReverseComplete('position', animation)
            })
            /* カメラアングル */
            rotation.to(camera.rotation, { ...options })
        }
    }, element)

    return ctx
}

/* =================================================================================
    セクション アニメーション
==================================================================================*/
const sectionsAnimation = ({
    pageHeader,
    introduction,
    controls,
    camera,
    setIsStartControls,
    setIsNavigationVisible,
    cameraConfigsData
}: SectionsAnimationProps) => {
    const width: number = window.innerWidth
    /* ローカル編集の際は '@/assets/camera-params' を参照 */
    const cameraParams = getSectionsCameraParams(cameraConfigsData, width)

    /* pageHeader セクション */
    const pageHeaderCtx = createSectionAnimation({
        element: pageHeader,
        startPosition: cameraParams.pageHeader.position,
        startRotation: cameraParams.pageHeader.rotation,
        targetPosition: cameraParams.introduction.position,
        targetRotation: cameraParams.introduction.rotation,
        camera
    })
    /* introduction セクション */
    const introductionCtx = createSectionAnimation({
        element: introduction,
        startPosition: cameraParams.introduction.position,
        startRotation: cameraParams.introduction.rotation,
        targetPosition: cameraParams.controls.position,
        targetRotation: cameraParams.controls.rotation,
        camera
    })
    /* controls セクション */
    const controlsCtx = createSectionAnimation({
        element: controls,
        startPosition: cameraParams.controls.position,
        startRotation: cameraParams.controls.rotation,
        setIsStartControls,
        setIsNavigationVisible,
        width,
        camera
    })

    return { pageHeaderCtx, introductionCtx, controlsCtx }
}

export default sectionsAnimation