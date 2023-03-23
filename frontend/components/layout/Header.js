import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Drawer } from 'antd'
import { Container, Close, Hamburger } from '@components/ui'
import { useWindowSize } from '@utils/hooks'
import Nav from './Nav'
import s from '@styles/layout/Layout.module.css'

export default function Header() {
    const [visible, setVisible] = useState(false)

    const { width } = useWindowSize()

    const onOpen = () => setVisible(true)
    const onClose = () => setVisible(false)

    useEffect(() => {
        width > 1024 && setVisible(false)
    }, [width])

    return (
        <header className={s.header}>
            <Container>
                <div className={s.row}>
                    <div className={s.logo}>
                        <Link href={'/'}>
                            <h1>Siron-1997</h1>
                        </Link>
                    </div>
                    { width > 1024 && <Nav />}
                    { width < 1024 && <Hamburger onOpen={onOpen} />}
                </div>
            </Container>
            { width < 1024 && (
                <Drawer
                    placement='right'
                    open={visible}
                    onClose={onClose}
                    className={s.drawer}
                    closeIcon={<Close onClose={onClose} />}
                    width={width < 768 ? '80%' : '60%'}
                    zIndex={9999}
                    style={{backgroundColor: '#413C4F'}}
                    headerStyle={{padding: width < 768 ? '12.5px 0' : '15px 0', width: '40px', margin: '0 35px 0 auto'}}
                >
                    <Nav className={s.drawer_nav} />
                </Drawer>
            ) }
        </header>
    )
}