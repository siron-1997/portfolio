import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { Button, Typography } from '@material-ui/core'
import axios from 'axios'
import cn from 'classnames'
import InputTextFields from './InputTextFields'
import { ContentsContext, SendContext, SendResultContext, StepsContext, IsEditedContext, } from '@/pages/contact'
import s from '@/styles/Contact.module.css'
import g from '@/styles/global.module.css'

export default function Form() {
    /* name、email、message */
    const { contents, contentsDispatch } = useContext(ContentsContext)
    /* send state  */
    const { send, sendDispatch } = useContext(SendContext)
    /* send result */
    const { sendResult, setSendResult } = useContext(SendResultContext)
    /* steps */
    const { steps, stepsDispatch } = useContext(StepsContext)
    /* 編集中を管理 */
    const { isEdited, setIsEdited } = useContext(IsEditedContext)
    /* 送信メッセージ */
    const [sendMessage, setSendMessage] = useState('')
    const [description, setDescription] = useState('')

    const classNames = cn(s.form_custom_container, g.custom_container, { [s.end_form]: steps.second.end })

    let edited
    const confirmMessage = '編集中の内容は削除されますが、よろしいですか？'

    for (const bool in isEdited) {
        if (isEdited[bool]) { // isEdited「true」
            if (!edited) { // edited「false」
                edited = isEdited[bool]
                break
            }
        }
    }

    /* ブラウザバッグ */
    const handlePopstate = () => {
        const isDiscardedOK = window.confirm(confirmMessage)
        if (isDiscardedOK) { // e.type === 'popstate'
            window.history.back()
            setIsEdited(false)
        }
        history.pushState(null, '', null)
    }
    /* ブラウザ更新 */
    const handleBeforeunload = e => {
        e.preventDefault()
        const confirmationMessage = confirmMessage
        e.returnValue = ''
        e.returnValue = confirmationMessage
        setIsEdited(false)
        return confirmMessage
    }

    const handleEndInput = () => {
        // 全ての要件を満たすとき「true」、修正ボタンを押下したとき「false」
        if (contents.name.isError !== undefined && !contents.name.isError &&
            contents.email.isError !== undefined && contents.email.isError === false && contents.email.isError !== null &&
            contents.message.isError !== undefined && !contents.message.isError) 
        {
            stepsDispatch({ type: 'FIRST_END', first: { end: true } })
            stepsDispatch({ type: 'SECOND_START', second: { start: true } })
        }
        // 全ての要件を満たさない
        stepsDispatch({ type: 'FIRST_START', first: { start: true } })
    }

    const handleEndConfirmation = () => {
        stepsDispatch({ type: 'FIRST_END', first: { end: false } })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(`Name: ${contents.name.text}\nEmail: ${contents.email.text}\nMessage: ${contents.message.text}`)

        const values = {
            name: contents.name.text,
            email: contents.email.text,
            message: contents.message.text
        }

        sendDispatch({ type: 'START_LOADING', isLoading: true })

        setTimeout(async () => {
            await sendDispatch({ type: 'END_LOADING', isLoading: false })
            await stepsDispatch({ type: 'SECOND_END', second: { end: true } })
        }, 4000)

        return await axios.post('/api/sendEmail', {
            body: JSON.stringify({ values }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                setSendMessage(() => '送信完了')
                setDescription(() => 'お問い合わせは正常に送信されました。')
            }
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 404) {
                console.log('test')
                setSendResult(false)
                setSendMessage(() => '送信エラー')
                setDescription(() => '送信に失敗しました。時間をおいて再度お試し下さい。')
            }
        })
    }

    
    /* フォームのバリデーションを管理 */
    useEffect(() => {
        const errors = {
            name: contents.name.isError === undefined && steps.first.start,
            email: contents.email.isError === null ? null : contents.email.isError === undefined && steps.first.start,
            message: contents.message.isError === undefined && steps.first.start
        }
        if (steps.first.start) {
            contentsDispatch({
                type: 'END_INITIAL_STEP',
                name: { isError: errors.name },
                email: { isError: errors.email },
                message: { isError: errors.message },
                total: { isComplete: errors.total }
            })
        }
    }, [steps.first.start])

    /* 編集中の内容を破棄するかを確認 */
    useEffect(() => {
        if (edited) {
            history.pushState(null, '', null)
            window.addEventListener('popstate', handlePopstate)
            window.addEventListener('beforeunload', handleBeforeunload)
        }

        return () => {
            window.removeEventListener('popstate', handlePopstate)
            window.removeEventListener('beforeunload', handleBeforeunload)
        }
    }, [edited])

    return (
        <div className={s.form_container}>
            <div className={classNames}>
                {!steps.second.end ?
                    <form className={s.form} onSubmit={handleSubmit}>
                        <InputTextFields />
                        <div className={s.btn_container}>
                            {steps.first.start && steps.first.end ?
                                <>
                                    <Button
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => handleEndConfirmation()}
                                    >
                                        修正する
                                    </Button>
                                    <Button
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={e => handleSubmit(e)}
                                    >
                                        送信
                                    </Button>
                                </>
                                :
                                <Button
                                    type='button'
                                    variant='contained'
                                    color='primary'
                                    onClick={() => handleEndInput()}
                                >
                                    入力内容の確認
                                </Button>
                            }
                        </div>
                    </form>
                    :
                    <>
                        <div className={s.txt_container}>
                            <Typography component='h2'>{sendMessage}</Typography>
                            <Typography component='p'>{description}</Typography>
                            {sendResult && (
                                <>
                                    <Typography component='p'>土日祝を除き、1～2日以内にご返信しています。</Typography>
                                    <Typography component='p'>サーバートラブルなどにより、メールが正常に送付されないことがあります。</Typography>
                                    <Typography component='p'>その際は junpei.oue@gmail.com に直接お問い合わせください。</Typography>
                                </>
                            )}
                        </div>
                        <div className={s.btn_container}>
                            <Link href='/'>
                                <Button type='button' variant='contained' color='primary'>Homeへ戻る</Button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}