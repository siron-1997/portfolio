import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import g from '@/styles/global.module.css'

export default function Works() {
    return (
        <Layout>
            <div className={g.global_container}>
                <Container>
                    <h1>Works</h1>
                </Container>
            </div>
        </Layout>
    )
}