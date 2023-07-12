import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/Tags.module.css'

type CustomProps = {
    post: any
}

const Tags: React.FC<CustomProps> = ({ post }) => {
    const skillTags = post?.attributes?.skillTags
    const tags = skillTags.split(/,| /)

    return (
        <Container>
            <div className={s.tags}>
                <Typography component='div' variant='p'>Tags: </Typography>
                <div className={s.tags_skill}>
                    {tags?.map((tag: any, i: number) => (
                        <Typography component='span' variant='tag' key={i}>{tag}</Typography>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Tags