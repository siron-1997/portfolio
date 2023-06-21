import { cameraPositions } from '@/assets/break-points-camera'
import { BREAK_POINT_XXL, BREAK_POINT_XL, BREAK_POINT_LG, BREAK_POINT_TB, BREAK_POINT_MB } from '@assets/break-points'

export default function setCameraPositions(camera, models, width, height) {
    let startPosition = null, // 開始位置
        endPosition = null // 到着位置

    switch (true) {
        case width >= BREAK_POINT_XXL: // 1920以上
            camera.position.copy(cameraPositions.xxl.start)
            startPosition = camera.position
            endPosition = cameraPositions.xxl.end
            models.position.y = - 0.85
            break
        case width < BREAK_POINT_XXL && width >= BREAK_POINT_XL: // 1920未満、1536以上
            camera.position.copy(cameraPositions.xl.start)
            startPosition = camera.position
            endPosition = cameraPositions.xl.end
            models.position.y = - 0.6
            break
        case width < BREAK_POINT_XL && width >= BREAK_POINT_LG: // 1536未満、1280以上
            camera.position.copy(cameraPositions.lg.start)
            startPosition = camera.position
            endPosition = cameraPositions.lg.end
            models.position.y = - 0.4
            break
        case width < BREAK_POINT_LG && width >= BREAK_POINT_TB: // 1280未満、1024以上
            camera.position.copy(cameraPositions.tb.start)
            startPosition = camera.position
            endPosition = cameraPositions.tb.end
            models.position.y = - 1.4
            break
        case width < BREAK_POINT_TB && width >= BREAK_POINT_MB: // 1024未満、768以上
            if (width < height) {
                camera.position.copy(cameraPositions.sm.wrap.start)
                startPosition = camera.position
                endPosition = cameraPositions.sm.wrap.end
                models.position.y = - 3.2
            } else {
                camera.position.copy(cameraPositions.sm.side.start)
                startPosition = camera.position
                endPosition = cameraPositions.sm.side.end
                models.position.y = - 1.2
            }
            break
        case width < BREAK_POINT_MB: // 768未満
            camera.position.copy(cameraPositions.xs.start)
            startPosition = camera.position
            endPosition = cameraPositions.xs.end
            models.position.y = - 0.5
            break
        default:
            break
    }

    return { startPosition, endPosition }
}