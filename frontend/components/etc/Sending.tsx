import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import s from '@/styles/etc/Sending.module.css'

type CustomProps = {
    readonly isLoading: boolean
}

const Sending: React.FC<CustomProps> = ({ isLoading }) => {
    const classNames = cn(s.sending, { [s.sending_visible]: !isLoading })

    useEffect(() => {
        const html: HTMLElement = document.getElementsByTagName('html')[0],
              body: HTMLElement = document.body

        if (isLoading) {
            html.style.overflow = 'hidden'
            body.style.overflow = 'hidden'
            window.scrollTo(0, 0)
        } else {
            html.style.overflow = 'auto'
            body.style.overflow = 'auto'
        }

        return () => {
            html.style.overflow = 'atuo'
            body.style.overflow = 'auto'
        }
    }, [isLoading])

    return (
        <div className={classNames}>
            <div className={s.sending_container}>
                <Typography component='h1' variant='h1'>送信中</Typography>
                <div id={s['fountainG']}>
                    <div id={s['fountainG_1']} className={s.fountainG} />
                    <div id={s['fountainG_2']} className={s.fountainG} />
                    <div id={s['fountainG_3']} className={s.fountainG} />
                    <div id={s['fountainG_4']} className={s.fountainG} />
                    <div id={s['fountainG_5']} className={s.fountainG} />
                    <div id={s['fountainG_6']} className={s.fountainG} />
                    <div id={s['fountainG_7']} className={s.fountainG} />
                    <div id={s['fountainG_8']} className={s.fountainG} />
                </div>
            </div>
        </div>
    )
}

export default Sending