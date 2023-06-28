import Link from 'next/link'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { siteMap } from '@assets/site-map'
import s from '@styles/layout/Navigation.module.css'

export default function Nav({ className }) {
    const rootClassNames = cn(className, s.navigation)

    return (
        <nav>
            <ul className={rootClassNames}>
                {siteMap.map((item, i) => (
                    <li key={i}>
                        <Link href={item.link}>
                            <Typography variant='navigation'>
                                {item.text}
                            </Typography>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}