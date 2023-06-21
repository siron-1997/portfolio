import { useEffect, useRef, useContext } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { WorkDataContext } from '@/pages/works/[work]'
import { toggleButtonAnimation } from '@/animations/components/ui/buttons'
import s from '@/styles/ui/buttons/ToggleButton.module.css'

export default function ToggleButton() {
    const bgRef = useRef(null)
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

    const handleClick = bool => {
        setIsFingerVisible(bool)
        setIsViewerActive(bool)
    }

    useEffect(() => {
        const bg = bgRef.current
        /* アニメーション作成 */
        const cleanup = toggleButtonAnimation(bg, isViewerActive)

        return () => cleanup()
    }, [isViewerActive])

    return (
        <div className={s.toggle} style={{ marginTop: setIsViewerActive ? 'auto' : '0' }}>
            <div className={s.bg} ref={bgRef} />
            <Typography component='div' className={leftButtonClassNames}>
                <Typography
                    component='span'
                    sx={textStyle}
                    onClick={() => handleClick(true)}
                >
                    Start
                </Typography>
            </Typography>
            <Typography component='div' className={rightButtonClassNames}>
                <Typography
                    component='span'
                    sx={textStyle}
                    onClick={() => handleClick(false)}
                >
                    End
                </Typography>
            </Typography>   
        </div>
    )
}