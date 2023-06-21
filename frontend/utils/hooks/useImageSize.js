import { useState, useEffect } from 'react'
import {
    BREAK_POINT_MB, BREAK_POINT_TB, BREAK_POINT_LG, BREAK_POINT_XL, BREAK_POINT_XXL
} from '@/assets/break-points'

export default function useImageSize({ sm, md, lg, xl, xl2, xl3 }) {
    const [sizes, setSizes] = useState({ pointWidth: 0, pointHeight: 0 })

    useEffect(() => {
        if (window !== undefined) {
            const handleResize = () => {
                const width = window.innerWidth
                switch (true) {
                    case width < BREAK_POINT_MB:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: sm.pointWidth, pointHeight: sm.pointHeight }))
                        break
                    case width >= BREAK_POINT_MB && width < BREAK_POINT_TB:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: md.pointWidth, pointHeight: md.pointHeight }))
                        break
                    case width >= BREAK_POINT_TB && width < BREAK_POINT_LG:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: lg.pointWidth, pointHeight: lg.pointHeight }))
                        break
                    case width >= BREAK_POINT_LG && width < BREAK_POINT_XL:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: xl.pointWidth, pointHeight: xl.pointHeight }))
                        break
                    case width >= BREAK_POINT_XL && width < BREAK_POINT_XXL:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: xl2.pointWidth, pointHeight: xl2.pointHeight }))
                        break
                    case width >= BREAK_POINT_XXL:
                        setSizes(prevSizes => ({ ...prevSizes, pointWidth: xl3.pointWidth, pointHeight: xl3.pointHeight }))
                        break
                    default:
                        break
                }
            }
            handleResize()

            window.addEventListener('resize', handleResize)
    
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return sizes
}