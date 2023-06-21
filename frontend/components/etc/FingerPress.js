import Image from 'next/image'
import { useRef, useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { WorkDataContext } from '@/pages/works/[work]'
import { useWindowSize, useIconSize } from '@/utils/hooks'
import { fingerPressAnimation } from '@/animations/components/etc'
import { BREAK_POINT_MB } from '@/assets/break-points'
import s from '@/styles/etc/FingerPress.module.css'

export default function FingerPress() {
    const imageRef = useRef(null),
          textRef = useRef(null)
    const { isFingerVisible, setIsFingerVisible, isViewerActive } = useContext(WorkDataContext)
    const { width } = useWindowSize()
    const iconSize = useIconSize(75, 85, 95)

    useEffect(() => {
        const image = imageRef.current
        const text = textRef.current
        let currentWidth = 250

        if (width < BREAK_POINT_MB) {
            currentWidth = 130
        } else {
            currentWidth = 250
        }
        /* アニメーション作成 */
        const cleanup = fingerPressAnimation(image, text, currentWidth, isFingerVisible)

        return () => cleanup()
    }, [width < BREAK_POINT_MB, isFingerVisible, isViewerActive])

    return (
        <div className={s.finger_press} id='finger-press'>
            {isViewerActive ? (
                <Image
                    ref={imageRef}
                    src='/icons/finger_press_48x48.svg'
                    alt='finger press'
                    width={iconSize}
                    height={iconSize}
                    quality={1}
                    onMouseDown={() => setIsFingerVisible(false)}
                    style={{ display: !isFingerVisible ? 'none' : 'block' }}
                />
            ) : (
                <Typography component='p' sx={{ fontWeight: 600 }} ref={textRef}>
                    "Start"をタップすると3Dビュワーモードが開始します。<br/>
                    <KeyboardArrowDown sx={{ width: 45, height: 45 }} />
                </Typography>
            )}
        </div>
    )
}