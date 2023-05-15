import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { Card, Typography } from '@material-ui/core'
import { Cards } from '@/components/works'
import { fetcher } from '@/utils/strapi'
import s from '@/styles/Works.module.css'
import g from '@/styles/global.module.css'

export default function Works({ data }) {
    return (
        <Layout>
            <div className={g.global_container}>
                <Container>
                    <div className={s.custom_container}>
                        <Typography component='h1'></Typography>
                        <Cards data={data} />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetcher('/api/works?populate=*')
    const data = await res?.data.data

    return {
        props: { data }
    }
}