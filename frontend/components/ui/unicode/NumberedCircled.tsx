import React, { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { modelAnimation } from '@/animations/components/ui/canvas/work'

type Props = {
    index: number
    sx: any
    onClick: any
    isNavigationVisible: boolean
}

const NumberedCircled: React.FC<Props> = ({ index, sx, onClick, isNavigationVisible }) => {
    const navigationRef = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const navigation = navigationRef.current
        const cleanup = modelAnimation(navigation, isNavigationVisible)

        return () => cleanup()
    }, [isNavigationVisible])

    return (
        <Typography
            component='span'
            ref={navigationRef}
            sx={{
                ...sx,
                display: isNavigationVisible ? 'block' : 'none',
                lineHeight: 1.2,
                letterSpacing: 1,
                borderRadius: 8,
                cursor: 'pointer',
                backgroundColor: 'rgb(0, 0, 0, 0.3)'
            }}
            onClick={onClick}
        >
                {index + 1}
        </Typography>
    )
}

export default NumberedCircled