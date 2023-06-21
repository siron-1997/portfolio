import Link from 'next/link'
import { Typography, List, ListItem } from '@mui/material'
import cn from 'classnames'
import { siteMap } from '@assets/site-map'
import s from '@styles/layout/Navigation.module.css'

export default function Nav({ className }) {
    const rootClassNames = cn(className, s.navigation)

    return (
        <List className={rootClassNames}>
            {siteMap.map((item, i) => (
                <ListItem key={i}>
                    <Link href={item.link}>
                        <Typography variant='navigation'>
                            {item.text}
                        </Typography>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}