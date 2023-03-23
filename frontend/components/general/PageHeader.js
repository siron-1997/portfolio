import { Container } from '@components/ui'
import s from '@styles/general/PageHeader.module.css'

export default function PageHeader({ Background, children }) {
    return (
        <figure className={s.figure}>
            {Background}
            <figcaption className={s.figcaption}>
                <Container>
                    {children}
                </Container>
            </figcaption>
        </figure>
    )
}