import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { Typography } from '@material-ui/core'
import g from '@/styles/global.module.css'

export default function Works() {
    return (
        <Layout>
            <div className={g.global_container}>
                <Container>
                    <Typography component='h1'></Typography>
                </Container>
            </div>
        </Layout>
    )
}