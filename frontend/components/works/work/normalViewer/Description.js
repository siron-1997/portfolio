import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import { colors } from '@/assets/colors'
import s from '@/styles/works/work/normalViewer/Description.module.css'

export default function Description({ url, description, descriptionRef }) {
    return (
        <Container>
            <div className={s.description} ref={descriptionRef}>
                <Typography component='p' variant='p' className={s.link_text}>
                    <span>Link:</span>
                    <a
                        href={url}
                        className={s.link}
                        style={{ color: colors.navigation, opacity: 1 }}
                    >
                        {url}
                    </a>
                </Typography>
                <Typography component='p' variant='p'>{description}</Typography>
            </div>
        </Container>
    )
}