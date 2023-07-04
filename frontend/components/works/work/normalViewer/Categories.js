import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/Categories.module.css'

export default function Categories({ post }) {
    const categories = post?.attributes?.categories
    const categoriesArray = categories.split(',')

    return (
        <Container>
            <div className={s.categories}>
                <Typography component='div' variant='p'>Category: </Typography>
                <div className={s.category_tags}>
                    {categoriesArray.map((category, i) => (
                        <Typography component='span' variant='tag' key={i}>{category}</Typography>
                    ))}
                </div>
            </div>
        </Container>
    )
}