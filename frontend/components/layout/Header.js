import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Container, Hamburger } from '@/components/ui'
import MyDrawer from './MyDrawer'
import Navigation from './Navigation'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_TB } from '@/assets/break-points'
import s from '@/styles/layout/Header.module.css'

export default function Header() {
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize()

    const toggleDrawer = open => e => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return
        }
        setOpen(open)
    }

    useEffect(() => {
        width > BREAK_POINT_TB && setOpen(false)
        
        const html = document.getElementsByTagName('html')[0]

        if (open) {
            html.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
        } else {
            html.style.overflow = 'auto'
            document.body.style.overflow = 'auto'
        }

        return () => {
            html.style.overflow = 'auto'
            document.body.style.overflow = 'auto'
        }
    }, [width, open])

    return (
        <header className={s.header}>
            <Container>
                <div className={s.row}>
                    <div className={s.logo}>
                        <Link href='/'>
                            <Typography component='h1'>
                                <Typography component='strong' variant='logo'>Junpei Oue</Typography>
                            </Typography>
                        </Link>
                    </div>
                    {width > BREAK_POINT_TB ? (
                        <Navigation />
                    ) : (
                        <Hamburger onOpen={toggleDrawer(true)} />
                    )}
                </div>
            </Container>
            <MyDrawer open={open} onClose={toggleDrawer(false)} />
        </header>
    )
}