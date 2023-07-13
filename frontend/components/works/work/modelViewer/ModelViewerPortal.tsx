import React, { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { modelViewerPortalAnimation } from '@/animations/components/works/work/modelViewer'

type Props = {
    post?: any
    isLoading: boolean
}

const ModelViewerPortal: React.FC<Props> = ({ post, isLoading }) => {
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isLoading) {
            const ctx = modelViewerPortalAnimation({
                section: sectionRef.current,
                sectionRef
            })
    
            return () => ctx.revert()
        }
    }, [isLoading])

    return (
        <section ref={sectionRef}>
            <Typography component='h1' variant='h2'>{post?.attributes?.title}</Typography>
            <Typography component='p' variant='p'>{post?.attributes?.description}</Typography>
        </section>
    )
}

export default ModelViewerPortal