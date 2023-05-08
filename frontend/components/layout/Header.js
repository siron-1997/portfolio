import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Drawer, Paper, makeStyles, Typography } from  '@material-ui/core'
import { Container, Close, Hamburger } from '@/components/ui'
import { useWindowSize } from '@/utils/hooks'
import Nav from './Nav'
import s from '@/styles/layout/Layout.module.css'

const useStyles = makeStyles((theme) => ({
    
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 300
    }
}))

export default function Header() {
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const { width } = useWindowSize()

    const toggleDrawer = open => e => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return
        }
        setOpen(open)
    }

    useEffect(() => {
        width > 1024 && setOpen(false)
    }, [width])

    return (
        <header className={s.header}>
            <Container>
                <div className={s.row}>
                    <div className={s.logo}>
                        <Link href={'/'}>
                            <Typography component='strong'>Siron-1997</Typography>
                        </Link>
                    </div>
                    { width > 1024 && <Nav />}
                    { width < 1024 && <Hamburger onOpen={toggleDrawer(true)} />}
                </div>
            </Container>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                style={{ zIndex: 9000 }}
            >
                <Paper style={{ backgroundColor: '#281D41', borderRadius: '0' }} className={s.paper}>
                    <div className={s.close_container}>
                        <Close onClose={toggleDrawer(false)} />
                    </div>
                    <div className={classes.list} role='presentation'>
                        <Nav />
                    </div>
                </Paper>
            </Drawer>
        </header>
    )
}