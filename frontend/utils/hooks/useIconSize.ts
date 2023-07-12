import { useState, useEffect } from 'react'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'

const useIconSize = (mb: number, tb: number, pc: number) => {
    const [iconSize, setIconSize] = useState<number>(0)

    const resize = (): void => {
        const width: number = window.innerWidth
        switch (true) {
            case width < BREAK_POINT_MB:
                setIconSize(mb)
                break
            case width >= BREAK_POINT_MB && width < BREAK_POINT_TB:
                setIconSize(tb)
                break
            case width >= BREAK_POINT_TB:
                setIconSize(pc)
                break
            default:
                break
        }
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return iconSize
}

export default useIconSize