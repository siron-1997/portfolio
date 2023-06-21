import Link from 'next/link'
import { useRef } from 'react'
import { CardActions, Typography } from '@mui/material'
import cn from 'classnames'
import { WorkCard } from '@/components/general'
import { Container } from '@/components/ui'
import { truncateString } from '@/utils'
import { target } from '@/utils/strapi/consts'
import s from '@/styles/Home.module.css'
import g from '@/styles/global.module.css'

export default function Works({ data, worksRef }) {
    const contentsRef = useRef(null)

    const works = data?.slice(0, 3)
    const path = '/works/'

    const rootClassNames = cn(g.global_root_container, s.works)

    return (
        <section className={rootClassNames} ref={worksRef}>
            <Typography component='h1' variant='h1'>Works</Typography>
            <Container>
                <div className={s.contents} ref={contentsRef}>
                    {works?.map((item, i) => (
                        <WorkCard
                            key={i}
                            index={i}
                            image={`${target}${item?.attributes?.main?.data?.attributes?.url}`}
                            alternativeText={`${target}${item?.attributes?.main?.data?.attributes?.alternativeText}`}
                            link={`${path}${item.attributes.link}`}
                            title={item?.attributes?.title}
                            description={truncateString(item?.attributes?.description, 50)}
                            tags={item?.attributes?.tags === 'three' ? '3D' : 'web'}
                            type='home'
                            contentsRef={contentsRef}
                        />
                    ))}
                </div>
                <CardActions className={s.move}>
                    <Link href={path}>
                        <Typography variant='navigation' sx={{ fontSize: { xs: 18, sm: 20, fontWeight: 700 } }}>Lean more &gt;</Typography>
                    </Link>
                </CardActions>
            </Container>
        </section>
    )
}