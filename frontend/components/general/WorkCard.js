import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { gsap } from 'gsap'
import cn from 'classnames'
import { useImageSize, useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import { colors } from '@/assets/colors'
import h from '@styles/Home.module.css'
import s from '@/styles/general/WorkCard.module.css'
import g from '@/styles/global.module.css'

export default function WorkCard({
    index, image, link, title, description, tags, alternativeText, type, contentsRef
}) {
    const { pointWidth, pointHeight } = useImageSize({
        sm: { pointWidth: 320, pointHeight: 240 },
        md: { pointWidth: 360, pointHeight: 270 },
        lg: { pointWidth: 300, pointHeight: 225  },
        xl: { pointWidth: 380, pointHeight: 285 },
        xl2: { pointWidth: 420, pointHeight: 315 },
        xl3: { pointWidth: 520, pointHeight: 390 }
    })
    const { width } = useWindowSize()

    const termsWorks = type === 'works' || (type === 'home' && !(width >= BREAK_POINT_MB && width < BREAK_POINT_TB)),
          termsHome = type === 'home' && width >= BREAK_POINT_MB && width < BREAK_POINT_TB

    const cardClassNames = cn({ [s.card]: termsWorks, [h.card]: termsHome }, g.card),
          cardMediaClassNames = cn({ [s.card_media]: termsWorks }),
          txtClassNames = cn({ [s.txt_container]: termsWorks, [h.card_txt_container]: termsHome })

    /* マウスホバー時 */
    const handleMouseEnter = index => {
        if (contentsRef.current) {
            const child = contentsRef.current.children[index]
            const animate = gsap.to(child, { scale: 1.05, duration: 0.2, })

            return () => animate.kill()
        }
    }
    /* マウスホバー終了 */
    const handleMouseLeave = index => {
        if (contentsRef.current) {
            const child = contentsRef.current.children[index]
            const animate = gsap.to(child, { scale: 1, duration: 0.3, })

            return () => animate.kill()
        }
    }

    useEffect(() => {
        return () => {
            if (contentsRef.current) {
                for (let i = 0; i < contentsRef.current.children.length; i ++) {
                    handleMouseEnter(i)?.()
                    handleMouseLeave(i)?.()
                }
            }
        }
    }, [])

    return (
        <Card
            className={cardClassNames}
            sx={{ bgcolor: colors.bgColor.dark.sub }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
        >
            <CardMedia className={cardMediaClassNames}>
                <Link href={link}>
                    <Image
                        src={image}
                        alt={alternativeText}
                        width={pointWidth}
                        height={pointHeight}
                        quality={100}
                        priority={
                            width < BREAK_POINT_MB && index === 0 ? true :
                            width >= BREAK_POINT_MB && width < BREAK_POINT_TB && index <= 1 ? true :
                            width >= BREAK_POINT_TB && index <= 2 && true
                        }
                    />
                </Link>
            </CardMedia>
            <CardContent className={txtClassNames}>
                <Link href={link}>
                    <Typography component='h4' variant='h4'>{title}</Typography>
                    <Typography component='p' variant='p' className={g.card_paragraph}>{description}</Typography>
                </Link>
            </CardContent>
            {termsWorks && (
                <CardActions className={s.tags}>
                    <Typography variant='tag'>{tags}</Typography>
                </CardActions>
            )}
        </Card>
    )
}