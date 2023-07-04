import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/Tags.module.css'

export default function Tags({ post }) {
    const skillTags = post?.attributes?.skillTags
    const tags = skillTags.split(/,| /)

    return (
        <Container>
            <div className={s.tags}>
                <Typography component='div' variant='p'>Tags: </Typography>
                <div className={s.tags_skill}>
                    {tags?.map((tag, i) => (
                        <Typography component='span' variant='tag' key={i}>{tag}</Typography>
                    ))}
                </div>
            </div>
        </Container>
    )
}