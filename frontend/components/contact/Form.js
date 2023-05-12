import Link from 'next/link'
import { useState, useRef, useEffect, useContext } from 'react'
import { Button, Typography } from '@material-ui/core'
import cn from 'classnames'
import InputTextFields from './InputTextFields'
import { InputStateContext, NameContext, EmailContext, MessageContext, EndInitialStepContext, IsEditedContext } from '@/pages/contact'
import s from '@/styles/Contact.module.css'
import g from '@/styles/global.module.css'

export default function Form() {
    const formRef = useRef(null)
    /* progress */
    const [confirmationState, setConfirmationState] = useState(false)
    /* progress */
    const { inputState, setInputState } = useContext(InputStateContext)
    /* inputs */
    const { name, setName } = useContext(NameContext)
    const { email, setEmail } = useContext(EmailContext)
    const { message, setMessage } = useContext(MessageContext)
    /* end initial state */
    const { endInitialStep, setEndInitialStep } = useContext(EndInitialStepContext)
    /* 編集中を管理 */
    const { isEdited, setIsEdited } = useContext(IsEditedContext)

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
 
    const classNames = cn(s.form_custom_container, g.custom_container)

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

    const handleEndInput = state => {
        if ( // 全ての要件を満たすとき「true」、修正ボタンを押下したとき「false」
            (name.error !== undefined && !name.error) &&
            (email.error !== undefined && email.error === false && email.error !== null) &&
            (message.error !== undefined && !message.error)
        ) {
            setInputState(() => state)
            setEndInitialStep(() => state)
        } else {  // 全ての要件を満たさない
            setInputState(() => false)
            setEndInitialStep(() => true)
        }
    }

    const handleEndConfirmation = () => setConfirmationState(true)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    }

    /* フォームのバリデーションを管理 */
    useEffect(() => {
        if (endInitialStep) {
            setName({ ...name, error: name.error === undefined && endInitialStep })
            setEmail({ ...email, error: email.error === null ? null : email.error === undefined && endInitialStep })
            setMessage({ ...message, error: message.error === undefined && endInitialStep })
        }
    }, [endInitialStep])

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
            <div className={classNames} style={{ height: confirmationState ? `${formHeight}px` : 'auto' }}>
                {!confirmationState ?
                    <form className={s.form} onSubmit={handleSubmit} ref={formRef}>
                        <InputTextFields inputState={inputState} endInitialStep={endInitialStep} />
                        <div className={s.btn_container}>
                            {inputState ?
                                <>
                                    <Button
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => handleEndInput(false)}
                                    >
                                        修正する
                                    </Button>
                                    <Button
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => handleEndConfirmation()}
                                    >
                                        送信
                                    </Button>
                                </>
                                :
                                <Button
                                    type='button'
                                    variant='contained'
                                    color='primary'
                                    onClick={() => handleEndInput(true)}
                                >
                                    入力内容の確認
                                </Button>
                            }
                        </div>
                    </form>
                    :
                    <>
                        <Typography component='h2'>送信完了</Typography>
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