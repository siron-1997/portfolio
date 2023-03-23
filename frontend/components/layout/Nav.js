import Link from 'next/link'
import cn from 'classnames'
import { siteMap } from '@assets/site-map'
import s from '@styles/layout/Layout.module.css'

export default function Nav({ className }) {
    const rootClassName = cn(
        className,
        s.navigation
    )

    return (
        <ul className={rootClassName}>
            {siteMap.map((item, i) => (
                <li key={i}>
                    <Link href={item.link}>
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    )
}