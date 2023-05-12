import { Typography } from '@material-ui/core'
import s from '@/styles/etc/Sending.module.css'

export default function Sending() {
    return (
        <div className={s.sending}>
            <div className={s.sending_container}>
                <Typography component='h1'>送信中</Typography>
                <div id={s['fountainG']}>
                    <div id={s['fountainG_1']} class={s.fountainG} />
                    <div id={s['fountainG_2']} class={s.fountainG} />
                    <div id={s['fountainG_3']} class={s.fountainG} />
                    <div id={s['fountainG_4']} class={s.fountainG} />
                    <div id={s['fountainG_5']} class={s.fountainG} />
                    <div id={s['fountainG_6']} class={s.fountainG} />
                    <div id={s['fountainG_7']} class={s.fountainG} />
                    <div id={s['fountainG_8']} class={s.fountainG} />
                </div>
            </div>
        </div>
    )
}