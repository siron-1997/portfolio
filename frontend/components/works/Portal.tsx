import React, { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { portalAnimation } from '@/animations/components/works'

type Props = {
    title: string
}

const Portal: React.FC<Props> = ({ title }) => {
    const titleRef = useRef<HTMLHeadingElement | null>(null)

    useEffect(() => {
        const ctx = portalAnimation({
            title: titleRef.current,
            titleRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <Typography component='h1' variant='h1' ref={titleRef}>{title}</Typography>
    )
}

export default Portal