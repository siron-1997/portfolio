import Link from 'next/link'
import React from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { siteMap } from '@/assets/site-map'
import s from '@styles/layout/Navigation.module.css'

type CustomProps = {
    className?: any
}

const Navigation: React.FC<CustomProps> = ({ className }) => {
    const rootClassNames = cn(className, s.navigation)

    return (
        <nav>
            <ul className={rootClassNames}>
                {siteMap.map((item, i) => (
                    <li key={i}>
                        <Link href={item.link}>
                            <Typography variant='body2'>
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