import React, { useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Container, ToggleButton } from '@/components/ui'
import { FingerPress } from '@/components/etc'
import { SectionsContext, WorkDataContext } from '@/pages/works/[slug]'
import { introductionAnimation } from '@/animations/components/works/work/modelViewer'
import s from '@/styles/works/work/modelViewer/Introduction.module.css'
import g from '@/styles/global.module.css'

type Props = {
    post?: any
    isLoading: boolean
}

const Introduction: React.FC<Props> = ({ post, isLoading }) => {
    const { introductionRef } = useContext(SectionsContext)
    const { isViewerActive } = useContext(WorkDataContext)
    const rootClassNames = cn(
        g.root_container,
        s.introduction,
        { [s.not_active]: !isViewerActive }
    )
    const data = post?.attributes?.sections?.filter((item: any) => item?.__component.match(/.introduction$/))[0]

    useEffect(() => {
        if (!isLoading) {
            const ctx = introductionAnimation({
                section: introductionRef.current.querySelector('section'),
                introductionRef
            })
    
            return () => ctx.revert()
        }
    }, [isLoading, introductionRef])

    return (
        <div className={rootClassNames} id='introduction' ref={introductionRef}>
            <Container style={{ position: 'relative', height: '100%' }}>
                <section>
                    <Typography component='h2' variant='h2'>{data?.title}</Typography>
                    <Typography component='p' variant='p' sx={{ maxWidth: 650 }}>{data?.description}</Typography>
                    <FingerPress />
                    <ToggleButton />
                </section>
            </Container>
        </div>
    )
}

export default Introduction