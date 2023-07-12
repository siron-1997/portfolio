import { BREAK_POINT_MB, BREAK_POINT_TB, BREAK_POINT_LG } from '@/assets/break-points'

type Position = { x: number, y: number, z: number }
type Rotation = { x: number, y: number, z: number }
type CameraParams = {
    position: Position,
    rotation: Rotation
} 
type SectionCameraParams = {
    pageHeader: CameraParams,
    introduction: CameraParams,
    controls: CameraParams
}

/* セクション カメラパラメーター */
export const getSectionsCameraParams = (cameraConfigsData: any, width: number) => {
    const cameraParams: SectionCameraParams = {
        pageHeader: {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }
        },
        introduction: {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }
        },
        controls: {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }
        }
    } 

    switch (true) {
        case width < BREAK_POINT_MB: // モバイル
            cameraParams.pageHeader.position = cameraConfigsData?.pageHeader?.position?.mb
            cameraParams.pageHeader.rotation = cameraConfigsData?.pageHeader?.rotation?.mb
            cameraParams.introduction.position = cameraConfigsData?.introduction?.position?.mb
            cameraParams.introduction.rotation = cameraConfigsData?.introduction?.rotation?.mb
            cameraParams.controls.position = cameraConfigsData?.controls[0]?.position?.mb
            cameraParams.controls.rotation = cameraConfigsData?.controls[0]?.rotation?.mb
            break
        case width >= BREAK_POINT_MB && width < BREAK_POINT_TB: // タブレッド
            cameraParams.pageHeader.position = cameraConfigsData?.pageHeader.position.tb
            cameraParams.pageHeader.rotation = cameraConfigsData?.pageHeader?.rotation?.tb
            cameraParams.introduction.position = cameraConfigsData?.introduction?.position?.tb
            cameraParams.introduction.rotation = cameraConfigsData?.introduction?.rotation?.tb
            cameraParams.controls.position = cameraConfigsData?.controls[0]?.position?.tb
            cameraParams.controls.rotation = cameraConfigsData?.controls[0]?.rotation?.tb
            break
        case width >= BREAK_POINT_TB && width < BREAK_POINT_LG: // デスクトップ
            cameraParams.pageHeader.position = cameraConfigsData?.pageHeader.position.lg
            cameraParams.pageHeader.rotation = cameraConfigsData?.pageHeader?.rotation?.lg
            cameraParams.introduction.position = cameraConfigsData?.introduction?.position?.lg
            cameraParams.introduction.rotation = cameraConfigsData?.introduction?.rotation?.lg
            cameraParams.controls.position = cameraConfigsData?.controls[0]?.position?.lg
            cameraParams.controls.rotation = cameraConfigsData?.controls[0]?.rotation?.lg
            break
        case width >= BREAK_POINT_LG: // デスクトップ HD
            cameraParams.pageHeader.position = cameraConfigsData?.pageHeader.position.xl
            cameraParams.pageHeader.rotation = cameraConfigsData?.pageHeader?.rotation?.xl
            cameraParams.introduction.position = cameraConfigsData?.introduction?.position?.xl
            cameraParams.introduction.rotation = cameraConfigsData?.introduction?.rotation?.xl
            cameraParams.controls.position = cameraConfigsData?.controls[0]?.position?.xl
            cameraParams.controls.rotation = cameraConfigsData?.controls[0]?.rotation?.xl
        default:
            break
    }

    return cameraParams
}

/* ビュワーモード カメラパラメーター */
export const getViwerToggleCameraParams = (cameraConfigsData: any, width: number) => {
    const cameraParams: CameraParams = {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
    }
    let zoom: number

    switch (true) {
        case width < BREAK_POINT_MB: // モバイル
            cameraParams.position = cameraConfigsData?.introduction?.position?.mb
            cameraParams.rotation = cameraConfigsData?.introduction?.rotation?.mb
            zoom = - 18
            break
        case width >= BREAK_POINT_MB && width < BREAK_POINT_TB: // タブレット
            cameraParams.position = cameraConfigsData?.introduction?.position?.tb
            cameraParams.rotation = cameraConfigsData?.introduction?.rotation?.tb
            zoom = - 2.5
            break
        case width >= BREAK_POINT_TB && width < BREAK_POINT_LG: // デスクトップ
            cameraParams.position = cameraConfigsData?.introduction?.position?.lg
            cameraParams.rotation = cameraConfigsData?.introduction?.rotation?.lg
            zoom = 1
            break
        case width >= BREAK_POINT_LG: // デスクトップ HD
            cameraParams.position = cameraConfigsData?.introduction?.position?.xl
            cameraParams.rotation = cameraConfigsData?.introduction?.rotation?.xl
            zoom = 2
            break
        default:
            break
    }

    return { cameraParams, zoom }
}

export const getControlsCameraParams = (currentCameraParams: any, width: number) => {
    const cameraParams: CameraParams = {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
    }

    switch (true) {
        case width < BREAK_POINT_MB: // モバイル
            cameraParams.position = currentCameraParams?.position?.mb
            cameraParams.rotation = currentCameraParams?.rotation?.mb
            break
        case width >= BREAK_POINT_MB && width < BREAK_POINT_TB: // タブレット
            cameraParams.position = currentCameraParams?.position?.tb
            cameraParams.rotation = currentCameraParams?.rotation?.tb
            break
        case width >= BREAK_POINT_TB && width < BREAK_POINT_LG: // デスクトップ
            cameraParams.position = currentCameraParams?.position?.lg
            cameraParams.rotation = currentCameraParams?.rotation?.lg
            break
        case width >= BREAK_POINT_LG: // デスクトップ HD
            cameraParams.position = currentCameraParams?.position?.xl
            cameraParams.rotation = currentCameraParams?.rotation?.xl
            break
        default:
            break
    }

    return cameraParams
}