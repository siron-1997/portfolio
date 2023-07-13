import Image from 'next/image'
import React, { useRef, useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { WorkDataContext } from '@/pages/works/[slug]'
import { useWindowSize, useIconSize } from '@/utils/hooks'
import { fingerPressAnimation } from '@/animations/components/etc'
import { BREAK_POINT_MB } from '@/assets/break-points'
import s from '@/styles/etc/FingerPress.module.css'

const FingerPress: React.FC = () => {
    const fingerPressRef = useRef<HTMLDivElement | null>(null),
          imageRef = useRef<HTMLImageElement | null>(null),
          textRef = useRef<HTMLParagraphElement | null>(null)
    const { isFingerVisible, setIsFingerVisible, isViewerActive } = useContext(WorkDataContext)
    const { width } = useWindowSize()
    const iconSize = useIconSize(75, 85, 95)
    const breakPoint: boolean = width < BREAK_POINT_MB

    useEffect(() => {
        let currentWidth: number = 250
        if (width < BREAK_POINT_MB) {
            currentWidth = 130
        } else {
            currentWidth = 250
        }
        /* アニメーション作成 */
        const ctx = fingerPressAnimation({
            image: imageRef.current,
            text: textRef.current,
            fingerPressRef,
            currentWidth,
            isFingerVisible
        })

        return () => ctx.revert()
    }, [width, breakPoint, isFingerVisible, isViewerActive])

    return (
        <div className={s.finger_press} id='finger-press' ref={fingerPressRef}>
            {isViewerActive ? (
                <Image
                    ref={imageRef}
                    src='/icons/finger_press_48x48.svg'
                    alt='finger press'
                    width={iconSize}
                    height={iconSize}
                    quality={1}
                    onMouseDown={() => setIsFingerVisible(false)}
                    onTouchStart={() => setIsFingerVisible(false)}
                    style={{ display: !isFingerVisible ? 'none' : 'block' }}
                />
            ) : (
                <Typography component='p' sx={{ fontWeight: 600 }} ref={textRef}>
                    「Start」をタップすると3Dビュワーモードが開始します。<br/>
                    <KeyboardArrowDown sx={{ width: 45, height: 45 }} />
                </Typography>
            )}
        </div>
    )
}

export default FingerPress