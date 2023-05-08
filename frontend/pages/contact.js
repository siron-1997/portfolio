import cn from 'classnames'
import { Layout } from '@components/layout'
import { ContactState, Form } from '@/components/contact'
import { Container } from '@/components/ui'
import g from '@/styles/global.module.css'
import s from '@/styles/Contact.module.css'

export default function Contact() {
    const classNames = cn(g.custom_container, s.contact_container)

    return (
        <Layout>
            <div className={g.global_container}>
                <Container>
                    <div className={classNames}>
                        <ContactState />
                        <Form />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}