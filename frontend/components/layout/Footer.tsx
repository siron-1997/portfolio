import Image from 'next/image'
import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@/components/ui'
import { useIconSize } from '@/utils/hooks'
import { snsList } from '@/assets/sns-list'
import s from '@/styles/layout/Footer.module.css'

const Footer: React.FC = () => {
    const iconSize = useIconSize(35, 35, 35)

    const currentYear: number = 2023
    const copyright: string = `${currentYear} Junpei Oue`

    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.row}>
                    <div className={s.sns}>
                        {snsList.map((item, i) => (
                            <a key={i} href={item.link} target='_blank' rel='noopener noreferrer nofollow'>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={iconSize}
                                    height={iconSize}
                                    quality={1}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={s.copyright}>
                        <Typography component='p' variant='body1'>{'\u00A9'} {copyright}</Typography>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer