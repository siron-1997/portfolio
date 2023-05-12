import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { StepProgressBar } from '@/components/etc'
import { Typography } from '@material-ui/core'
import g from '@/styles/global.module.css'

export default function Works() {
    return (
        <Layout>
            <div className={g.global_container}>
                <Container>
                    <h1>Works</h1>
                    <div style={{ position: 'relative', zIndex: '1000' }}>
                        <StepProgressBar
                            startingStep={0}
                            steps={[
                                {
                                    label: '内容入力',
                                    name: 'step 1',
                                    content: <Typography component='p'>内容入力</Typography>,
                                    validator: false
                                },
                                {
                                    label: '内容確認',
                                    name: 'step 2',
                                    content: <Typography component='p'>内容確認</Typography>,
                                    validator: false
                                },
                                {
                                    label: '送信完了',
                                    name: 'step 3',
                                    content: <Typography component='p'>送信完了</Typography>,
                                    validator: false
                                },
                            ]}
                        />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}