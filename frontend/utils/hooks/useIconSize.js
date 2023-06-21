import { useState, useEffect } from 'react'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'

export default function useIconSize(mb, tb, pc) {
    const [iconSize, setIconSize] = useState(0)

    const resize = () => {
        const width = window.innerWidth
        switch (true) {
            case width >= BREAK_POINT_MB && width < BREAK_POINT_TB:
                setIconSize(tb)
                break
            case width >= BREAK_POINT_TB:
                setIconSize(pc)
                break
            default:
                setIconSize(mb)
                break
        }
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return iconSize
}