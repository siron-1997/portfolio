import { GetServerSideProps } from 'next'
import { useRef, useState, useEffect } from 'react'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { Typography } from '@mui/material'
import { Cards, LimitTags } from '@/components/works'
import { fetcher } from '@/utils/strapi'
import { worksAnimation } from '@/animations/pages/works'
import { introduction } from '@/assets/works-contents'
import g from '@/styles/global.module.css'

type CustomProps = {
    data?: any
}

export default function WorksPage({ data }: CustomProps) {
    const worksRef = useRef<HTMLDivElement | null>(null),
          contentsRef = useRef<HTMLDivElement | null>(null)
    const [selectTags, setSelectTags] = useState<Array<any>>([])

    useEffect(() => {
        const ctx = worksAnimation({
            title: worksRef.current.querySelector('h1'),
            limitTags: worksRef.current.querySelector('#limit-tags'),
            contents: contentsRef.current,
            worksRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <Layout metaProps={{
            title: `Junpei Oue | ${introduction.title}`,
            description: introduction.description,
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.root_container}>
                <Container className={g.top_container}>
                    <div ref={worksRef}>
                        <Typography component='h1' variant='h1'>{introduction.title}</Typography>
                        <LimitTags setSelectTags={setSelectTags} />
                        <Cards
                            data={data}
                            selectTags={selectTags}
                            contentsRef={contentsRef}
                        />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetcher('/api/works?populate=*')
    const data = await res?.data?.data

    return {
        props: { data }
    }
}