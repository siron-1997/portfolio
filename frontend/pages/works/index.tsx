import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { Cards, LimitTags, Portal } from '@/components/works'
import { fetcher } from '@/utils/strapi'
import { introduction } from '@/assets/works-contents'
import g from '@/styles/global.module.css'

type Props = {
    data?: any
}

export default function WorksPage({ data }: Props) {
    const [selectTags, setSelectTags] = useState<Array<any>>([])

    return (
        <Layout metaProps={{
            title: `Junpei Oue | ${introduction.title}`,
            description: introduction.description,
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.root_container}>
                <Container className={g.top_container}>
                    <Portal title={introduction.title} />
                    <LimitTags setSelectTags={setSelectTags} />
                    <Cards data={data} selectTags={selectTags} />
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