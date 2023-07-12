import { useState, useEffect } from 'react'
import {
    BREAK_POINT_MB, BREAK_POINT_TB, BREAK_POINT_LG, BREAK_POINT_XL, BREAK_POINT_XXL
} from '@/assets/break-points'

type ImageSize = {
    pointWidth: number
    pointHeight: number
}

type ImageSizeConfig = {
    sm: ImageSize
    md: ImageSize
    lg: ImageSize
    xl: ImageSize
    xl2: ImageSize
    xl3: ImageSize
};

const useImageSize = (config: ImageSizeConfig) => {
    const [sizes, setSizes] = useState<ImageSize>({ pointWidth: 0, pointHeight: 0 })

    const handleResize = (): void => {
        const width: number = window.innerWidth
        switch (true) {
            case width < BREAK_POINT_MB:
                setSizes(config.sm)
                break
            case width >= BREAK_POINT_MB && width < BREAK_POINT_TB:
                setSizes(config.md)
                break
            case width >= BREAK_POINT_TB && width < BREAK_POINT_LG:
                setSizes(config.lg)
                break
            case width >= BREAK_POINT_LG && width < BREAK_POINT_XL:
                setSizes(config.xl)
                break
            case width >= BREAK_POINT_XL && width < BREAK_POINT_XXL:
                setSizes(config.xl2)
                break
            case width >= BREAK_POINT_XXL:
                setSizes(config.xl3)
                break
            default:
                break
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return sizes
}

export default useImageSize