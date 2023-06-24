import { useRef, useState, useEffect } from 'react'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { Typography } from '@mui/material'
import { Cards, LimitTags } from '@/components/works'
import { fetcher } from '@/utils/strapi'
import { worksAnimation } from '@/animations/pages/works'
import s from '@/styles/works/index.module.css'
import g from '@/styles/global.module.css'

export default function WorksPage({ data }) {
    const worksRef = useRef(null),
          contentsRef = useRef(null)
    const [selectTags, setSelectTags] = useState([])

    useEffect(() => {
        const works = worksRef.current,
              title = works.children[0],
              limitTags = works.children[1]
            
        const cleanup = worksAnimation(title, limitTags, contentsRef)

        return () => cleanup()
    }, [])

    return (
        <Layout metaProps={{
            title: 'Junpei Oue | Works',
            description: 'これまでの作品・実績集。',
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.global_root_container}>
                <Container>
                    <div className={s.works_container} ref={worksRef}>
                        <Typography component='h1' variant='h1'>Works</Typography>
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

export async function getServerSideProps() {
    const res = await fetcher('/api/works?populate=*')
    const data = await res?.data?.data

    return {
        props: { data }
    }
}