import React, { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import { portalAnimation } from '@/animations/components/home'

type Props = {
    isLoading: boolean
}

const Portal: React.FC<Props> = ({ isLoading }) => {
    const portalRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isLoading) {
            const ctx = portalAnimation({
                title: portalRef.current.querySelector('#portal-title'),
                portalRef
            })
    
            return () => ctx.revert()
        } else {
            window.scrollTo(0, 0)
        }
    }, [isLoading])

    return (
        <Container>
            <section ref={portalRef}>
                <Typography component='h1' variant='h1' id='portal-title'>Symphony</Typography>
            </section>
        </Container>
    )
}

export default Portal