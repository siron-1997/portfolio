import Link from 'next/link'
import React from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { siteMap } from '@/assets/site-map'
import s from '@/styles/layout/Navigation.module.css'

type Props = {
    className?: string
}

const Navigation: React.FC<Props> = ({ className }) => {
    const rootClassNames = cn(className, s.navigation)

    return (
        <nav>
            <ul className={rootClassNames}>
                {siteMap.map((item, i) => (
                    <li key={i}>
                        <Link href={item.link}>
                            <Typography component='p' variant='navigation'>
                                {item.text}
                            </Typography>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation