import { Typography } from '@material-ui/core'
import { StepProgressBar } from '@/components/etc'
import s from '@/styles/Contact.module.css'

export default function ContactState() {
    return (
        <div className={s.contact_txt}>
            <Typography component='h1'>Contact</Typography>
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