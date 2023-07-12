import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Container, Hamburger } from '@/components/ui'
import MyDrawer from './MyDrawer'
import Navigation from './Navigation'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_TB } from '@/assets/break-points'
import s from '@/styles/layout/Header.module.css'

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { width } = useWindowSize()

    const toggleDrawer = (open: boolean) => (e: any) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return
        }
        setOpen(open)
    }

    useEffect(() => {
        width > BREAK_POINT_TB && setOpen(false)
        
        const html: HTMLElement = document.getElementsByTagName('html')[0],
              body: HTMLElement = document.body

        if (open) {
            html.style.overflow = 'hidden'
            body.style.overflow = 'hidden'
        } else {
            html.style.overflow = 'auto'
            body.style.overflow = 'auto'
        }

        return () => {
            html.style.overflow = 'auto'
            body.style.overflow = 'auto'
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

export default Header