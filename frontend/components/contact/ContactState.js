import { Typography } from '@material-ui/core'
import s from '@/styles/Contact.module.css'

export default function ContactState() {
    return (
        <div className={s.contact_txt}>
            <Typography component='h1'>Contact</Typography>
        </div>
    )
}