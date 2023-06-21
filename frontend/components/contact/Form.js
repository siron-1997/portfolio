import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import cn from 'classnames'
import InputTextFields from './InputTextFields'
import { ContactDataContext } from '@/pages/contact'
import { colors } from '@/assets/colors'
import s from '@/styles/contact/Form.module.css'
import g from '@/styles/global.module.css'

export default function Form({ formRef }) {
    const {
        contents, contentsDispatch, // name、email、message、を管理・更新
        sendDispatch, // 送信ステータスを更新
        sendResult, setSendResult, // 送信結果を管理
        steps, stepsDispatch, // ステップを管理
        isEdited, setIsEdited // 編集中かを管理
    } = useContext(ContactDataContext)
    /* 送信メッセージ */
    const [sendMessage, setSendMessage] = useState('')
    const [description, setDescription] = useState('')

    const classNames = cn(s.form_custom_container, g.global_shadow_container, { [s.end_form]: steps.second.end })

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
    /* 入力内容の確認 */
    const handleEndInput = () => {
        // 全ての要件を満たす
        if (contents.name.isError !== undefined && !contents.name.isError &&
            contents.email.isError !== undefined && contents.email.isError === false && contents.email.isError !== null &&
            contents.message.isError !== undefined && !contents.message.isError)
        {
            stepsDispatch({ type: 'FIRST_END', first: { end: true } })
            stepsDispatch({ type: 'SECOND_START', second: { start: true } })
        }
        stepsDispatch({ type: 'FIRST_START', first: { start: true } })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    /* 修正する */
    const handleEndConfirmation = () => {
        stepsDispatch({ type: 'FIRST_START', first: { start: false } })
        stepsDispatch({ type: 'FIRST_END', first: { end: false } })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    /* 送信 */
    const handleSubmit = async e => {
        e.preventDefault()
        const values = {
            name: contents.name.text,
            email: contents.email.text,
            message: contents.message.text
        }
        // ロード開始
        sendDispatch({ type: 'START_LOADING', isLoading: true })
        // 送信結果
        const handleResult = (result, title, description, type, loading) => {
            setSendResult(() => result)
            setSendMessage(() => title)
            setDescription(() => description)
            sendDispatch({ type: type, isLoading: loading })
            stepsDispatch({ type: 'SECOND_END', second: { end: true } })
        }
        // 送信開始
        setTimeout(async () => {
            return await axios.post('/api/send-email', values, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                if (res.status === 200) {
                    handleResult(true, '送信完了', 'お問い合わせは正常に送信されました。', 'END_LOADING', false)
                }
            })
            .catch(error => {
                if (error.response.status === 404 || error.response.status === 500) {
                    handleResult(false, '送信エラー', '送信に失敗しました。時間をおいて再度お試し下さい。', 'END_LOADING', false)
                }
            })
        }, 4000)
    }

    /* フォームのバリデーションを管理 */
    useEffect(() => {
        const errors = {
            // name: 名前が未選択か未入力且つファーストステップ開始
            name: contents.name.isError === undefined || contents.name.text === '' && steps.first.start,
            // Eメールが未選択か未入力または無効なアドレス且つファーストステップ開始
            email: contents.email.isError === null ? null : contents.email.isError === undefined || contents.email.text === '' && steps.first.start,
            // メッセージが未選択か未入力且つファーストステップ開始
            message: contents.message.isError === undefined || contents.message.text === '' && steps.first.start
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
            <Typography
                component='div'
                className={classNames}
                sx={{ bgcolor: colors.bgColor.dark.sub }}
                ref={formRef}
            >
                {!steps.second.end ?
                    <form className={s.form} onSubmit={handleSubmit} name='form'>
                        <InputTextFields />
                        <div className={s.btn_container}>
                            {steps.first.start && steps.first.end ?
                                <>
                                    <Button
                                        type='button'
                                        onClick={() => handleEndConfirmation()}
                                    >
                                        修正する
                                    </Button>
                                    <Button
                                        type='button'
                                        onClick={e => handleSubmit(e)}
                                    >
                                        送信
                                    </Button>
                                </>
                                :
                                <Button
                                    type='button'
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
                            <Typography component='h3' variant='h3'>{sendMessage}</Typography>
                            <Typography component='p' variant='p'>{description}</Typography>
                            <br/>
                            {sendResult && (
                                <>
                                    <Typography component='p' variant='p'>土日祝を除き、1～2日以内にご返信しています。</Typography>
                                    <Typography component='p' variant='p'>サーバートラブルなどにより、メールが正常に送付されないことがあります。</Typography>
                                    <Typography component='p' variant='p'>その際は junpei.oue@gmail.com に直接お問い合わせください。</Typography>
                                </>
                            )}
                        </div>
                        <div className={s.btn_container}>
                            <Link href='/'>
                                <Button variant='contained' color='primary'>
                                    <Typography variant='button'>
                                        Homeへ戻る
                                    </Typography>
                                </Button>
                            </Link>
                        </div>
                    </>
                }
            </Typography>
        </div>
    )
}