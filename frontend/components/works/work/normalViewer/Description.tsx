import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import { colors } from '@/assets/colors'
import s from '@/styles/works/work/normalViewer/Description.module.css'

type CustomProps = {
    post: any,
    descriptionRef: any
}

const Description: React.FC<CustomProps> = ({ post, descriptionRef }) => {
    const url = post?.attributes?.url,
          description = post?.attributes?.description

    return (
        <Container>
            <div ref={descriptionRef}>
                <div className={s.description}>
                    {url !== null && (
                        <Typography component='p' variant='body1' className={s.link_text}>
                            <span>Link:</span>
                            <a
                                href={url}
                                className={s.link}
                                style={{ color: colors.navigation, opacity: 1 }}
                            >
                                {url}
                            </a>
                        </Typography>
                    )}
                    <Typography component='p' variant='body1'>{description}</Typography>
                </div>
            </div>
        </Container>
    )
}

export default Description