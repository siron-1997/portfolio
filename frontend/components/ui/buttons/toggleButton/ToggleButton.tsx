import React, { useEffect, useRef, useContext } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { WorkDataContext, SectionsContext } from '@/pages/works/[slug]'
import { toggleButtonAnimation } from '@/animations/components/ui/buttons'
import s from '@/styles/ui/buttons/ToggleButton.module.css'

const ToggleButton: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null)
    const { toggleButtonRef } = useContext(SectionsContext)
    const { setIsFingerVisible, isViewerActive, setIsViewerActive } = useContext(WorkDataContext)

    const textStyle = {
        display: 'block',
        position: 'relative',
        fontSize: 20,
        lineHeight: 2,
        width: 130,
        height: 45,
        transition: 'all 0.25s'
    }

    const leftButtonClassNames = cn(s.toggle_button, s.left),
          rightButtonClassNames = cn(s.toggle_button, s.right)

    const handleClick = (bool: boolean): void => {
        setIsFingerVisible(bool)
        setIsViewerActive(bool)
    }

    useEffect(() => {
        const bg = bgRef.current
        /* アニメーション作成 */
        const ctx = toggleButtonAnimation(bg, toggleButtonRef, isViewerActive)

        return () => ctx.revert()
    }, [toggleButtonRef, isViewerActive])

    return (
        <div
            ref={toggleButtonRef}
            className={s.toggle}
            id='toggle-button'
            style={{ marginTop: setIsViewerActive ? 'auto' : '0' }}
        >
            <div className={s.bg} ref={bgRef} />
            <div className={leftButtonClassNames}>
                <Typography
                    id='start'
                    component='span'
                    sx={textStyle}
                    onClick={() => handleClick(true)}
                >
                    Start
                </Typography>
            </div>
            <div className={rightButtonClassNames}>
                <Typography
                    id='end'
                    component='span'
                    sx={textStyle}
                    onClick={() => handleClick(false)}
                >
                    End
                </Typography>
            </div>   
        </div>
    )
}

export default ToggleButton