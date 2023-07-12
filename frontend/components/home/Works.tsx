import Link from 'next/link'
import React from 'react'
import { CardActions, Typography } from '@mui/material'
import cn from 'classnames'
import { WorkCard } from '@/components/general'
import { Container } from '@/components/ui'
import { truncateString } from '@/utils'
import { introduction } from '@/assets/works-contents'
import s from '@/styles/Home.module.css'
import g from '@/styles/global.module.css'

type CustomProps = {
    data?: any,
    worksRef: React.RefObject<HTMLElement | null>
}

const Works: React.FC<CustomProps> = ({ data, worksRef }) => {
    const works: any = data?.slice(0, 3)
    const path: string = '/works/'

    const rootClassNames = cn(g.root_container, s.works)

    return (
        <section className={rootClassNames} ref={worksRef}>
            <Typography component='h1' variant='h1'>{introduction.title}</Typography>
            <Container>
                <div className={s.contents}>
                    {works?.map((item: any, i: number) => (
                        <WorkCard
                            key={i}
                            image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.url}`}
                            alternativeText={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.alternativeText}`}
                            link={`${path}${item?.id?.toString()}`}
                            title={item?.attributes?.title}
                            description={truncateString(item?.attributes?.description, 50)}
                            tags={item?.attributes?.tags === 'three' ? '3D' : 'web'}
                            type='home'
                        />
                    ))}
                </div>
                <CardActions className={s.move}>
                    <Link href={path}>
                        <Typography variant='navigation' sx={{ fontSize: { xs: 18, sm: 20, fontWeight: 700 } }}>Learn More &gt;</Typography>
                    </Link>
                </CardActions>
            </Container>
        </section>
    )
}

export default Works