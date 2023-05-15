import Image from 'next/image'
import Link from 'next/link'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { useWindowSize } from '@/utils/hooks'
import { target } from '@/utils/strapi'
import s from '@/styles/Works.module.css'

export default function Cards({ data }) {
    const { width } = useWindowSize()

    return (
        <div className={s.contents}>
            {data.map((item, i) => (
                <Card className={s.card} key={i}>
                    <CardMedia className={s.card_media}>
                        <Image
                            src={`${target}${item?.attributes?.main?.data?.attributes?.url}`}
                            alt={item?.attributes?.main?.data?.attributes?.alternativeText}
                            width={width > 1024 ? 300 : width > 1280 ? 350 : 300}
                            height={width > 1024 ? 225 : width > 1280 ? 262.5 : 300}
                            quality={100}
                        />
                    </CardMedia>
                    <CardContent className={`${s.txt_container} ${s.background}`}>
                        <Typography gutterBottom component='h3'>{item?.attributes?.title}</Typography>
                        <Typography component='p' color='text.secondary'>{item?.attributes?.description}</Typography>
                    </CardContent>
                    <CardActions className={s.background}>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}