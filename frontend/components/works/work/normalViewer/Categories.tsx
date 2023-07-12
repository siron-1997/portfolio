import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/Categories.module.css'

type CustomProps = {
    post: any
}

const Categories: React.FC<CustomProps> = ({ post }) => {
    const categories = post?.attributes?.categories
    const categoriesArray = categories.split(',')

    return (
        <Container id='categories-container'>
            <div className={s.categories} id='categories'>
                <Typography component='div' variant='p'>Category: </Typography>
                <div className={s.category_tags}>
                    {categoriesArray.map((category: any, i: number) => (
                        <Typography component='span' variant='tag' key={i}>{category}</Typography>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Categories