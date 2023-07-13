import React, { useState, useEffect } from 'react'
import { Fab, styled } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'
import { colors } from '@/assets/colors'
import s from '@/styles/ui/buttons/ScrollToTopButton.module.css'

type Props = {
    isViewerActive: boolean
}

const StyledFab = styled(Fab)(() => ({
    width: '50px',
    height: '50px',
    color: colors.text.dark,
    backgroundColor: colors.main.hover,
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.15)',
    '&:hover': {
        backgroundColor: colors.main.default,
        boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.3)'
    }
}))

const ScrollToTopButton: React.FC<Props> = ({ isViewerActive }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleVisible = (): void => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    const handleClick = (): void => {
        // ページトップにスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisible)

        return () => window.removeEventListener('scroll', handleVisible)
    }, [])

    return (
        <StyledFab
            color='primary'
            onClick={handleClick}
            aria-label='scroll to top'
            className={s.scroll_to_top}
            style={{ zIndex: isViewerActive ? 0 : 1000, opacity: isVisible ? 1 : 0, transition: 'all 0.25s' }}
        >
            <KeyboardArrowUp />
        </StyledFab>
    )
}

export default ScrollToTopButton