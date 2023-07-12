import React from 'react'
import { Typography } from '@mui/material'
import { StepProgressBar } from '@/components/etc'
import { introduction } from '@/assets/contact-contents'
import s from '@/styles/contact/ContactState.module.css'

type CustomProps = {
    contactStateRef: React.RefObject<HTMLDivElement | null>
}

const ContactState: React.FC<CustomProps> = ({ contactStateRef }) => {
    return (
        <div className={s.contact_txt} ref={contactStateRef}>
            <Typography component='h1' variant='h1'>{introduction.title}</Typography>
            <div className={s.step_progress_bar_container}>
                <StepProgressBar
                    wrapperClass={s.wrapper}
                    progressClass={s.progress}
                    labelClass={s.progress_label}
                    contentClass={s.current_step_container}
                    stepPoints={[
                        {
                            label: '内容入力',
                            name: 'step 1',
                            content: <Typography component='p' className={s.current_step}>内容入力</Typography>
                        },
                        {
                            label: '内容確認',
                            name: 'step 2',
                            content: <Typography component='p' className={s.current_step}>内容確認</Typography>
                        },
                        {
                            label: '送信完了',
                            name: 'step 3',
                            content: <Typography component='p' className={s.current_step}>送信完了</Typography>
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default ContactState