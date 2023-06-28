import { useContext } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Container, ToggleButton } from '@/components/ui'
import { FingerPress } from '@/components/etc'
import { SectionsContext, WorkDataContext } from '@/pages/works/[slug]'
import s from '@/styles/works/work/modelViewer/Introduction.module.css'
import g from '@/styles/global.module.css'

export default function Introduction({ data }) {
    const { introductionRef } = useContext(SectionsContext)
    const { isViewerActive } = useContext(WorkDataContext)

    const rootClassNames = cn(
        g.root_container,
        s.introduction,
        { [s.not_active]: !isViewerActive }
    )

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