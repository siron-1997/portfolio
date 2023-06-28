import { useRef, useEffect, useContext } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { MathUtils } from 'three'
import { SectionsContext, WorkDataContext } from '@/pages/works/[slug]'
import { sectionsAnimation, viwerToggleAnimation, controlsAnimation } from '@/animations/components/ui/canvas/work'
import { useWindowSize } from '@/utils/hooks'
import { getSectionsCameraParams } from '@/utils/environment/getCameraParams'
import { BREAK_POINT_MB } from '@/assets/break-points'

export default function MyCamera({ setIsNavigationVisible }) {
    const cameraRef = useRef(null),
          previousPositionRef = useRef(null), // カメラ位置を監視
          previousRotationRef = useRef(null) // カメラアングルを監視
    const { pageHeaderRef, introductionRef, controlsRef, toggleButtonRef } = useContext(SectionsContext)
    const {
        isInitialControl,
        isStartControls,
        isViewerActive,
        setIsStartControls,
        currentIndex,
        cameraConfigsData
    } = useContext(WorkDataContext)
    const { gl } = useThree()
    const { width, height } = useWindowSize()

    const cameraParams = getSectionsCameraParams(cameraConfigsData, width)

    /* カメラの位置・アングルを更新 */
    useFrame(() => {
        if (cameraRef.current !== null) {
            const previousPosition = cameraRef.current.position.clone(),
                  previousRotation = cameraRef.current.rotation.clone()
            previousPositionRef.current = previousPosition
            previousRotationRef.current = previousRotation
            // cameraRef.current.fov = width < BREAK_POINT_MB ? 45 : 55
            cameraRef.current.updateProjectionMatrix()
        }
    })

    /* セクション アニメーション */
    useEffect(() => {
        if (pageHeaderRef.current !== null && introductionRef.current !== null && controlsRef.current !== null) {
            const { pageHeaderCtx, introductionCtx, controlsCtx } = sectionsAnimation({
                pageHeader: pageHeaderRef.current,
                introduction: introductionRef.current,
                controls: controlsRef.current,
                camera: cameraRef.current,
                setIsStartControls,
                setIsNavigationVisible,
                cameraConfigsData
            })
    
            return () => {
                pageHeaderCtx.revert()
                introductionCtx.revert()
                controlsCtx.revert()
            }
        }
    }, [width, cameraConfigsData, controlsRef, introductionRef, pageHeaderRef, setIsNavigationVisible, setIsStartControls])

    /* ビュワーモード アニメーション（isViewerActive、widthの変更に応じてアニメーションを更新） */
    useEffect(() => {
        let offset = 0

        if (width > BREAK_POINT_MB) {
            offset = 20
        }
    
        if (introductionRef.current !== null) {
            const ctx = viwerToggleAnimation({
                introduction: introductionRef.current,
                toggleButton: toggleButtonRef.current,
                cameraRef,
                width,
                offset,
                cameraConfigsData
            })

            return () => ctx.revert()
        }
    }, [introductionRef, toggleButtonRef, width, cameraConfigsData])

    /* コントロール アニメーション（previousPosition、previousRotation、isStartControlsの変更に応じてアニメーションを更新） */
    useEffect(() => {
        previousPositionRef.current = cameraRef.current.position.clone() // カメラ初期位置
        previousRotationRef.current = cameraRef.current.rotation.clone() // カメラ初期アングル

        const cleanup = controlsAnimation({
            previousPosition: previousPositionRef.current,
            previousRotation: previousRotationRef.current,
            camera: cameraRef.current,
            currentIndex,
            isStartControls,
            isInitialControl,
            width,
            cameraConfigsData
        })

        return () => cleanup()
    }, [currentIndex, isStartControls, isInitialControl, width, cameraConfigsData])

    useEffect(() => {
        const canvas = gl.domElement
        canvas.style.zIndex = isViewerActive ? 200 : 20
    }, [gl, isViewerActive])

    return (
        <PerspectiveCamera
            ref={cameraRef}
            name='my-camera'
            fov={width < BREAK_POINT_MB ? 45 : 55}
            aspect={width / height}
            near={0.1}
            far={200}
            position={[
                cameraParams?.pageHeader?.position?.x,
                cameraParams?.pageHeader?.position?.y,
                cameraParams?.pageHeader?.position?.z
            ]}
            rotation={[
                MathUtils.degToRad(cameraParams?.pageHeader?.rotation?.x),
                MathUtils.degToRad(cameraParams?.pageHeader?.rotation?.y),
                MathUtils.degToRad(cameraParams?.pageHeader?.rotation?.z)
            ]}
            makeDefault
            onUpdate={c => c.updateProjectionMatrix()}
        />
    )
}