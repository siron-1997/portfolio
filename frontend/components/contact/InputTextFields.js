import { useContext } from 'react' 
import { TextField, InputLabel } from '@material-ui/core'
import cn from 'classnames'
import { NameContext, EmailContext, MessageContext, IsEditedContext } from '@/pages/contact'
import s from '@/styles/Contact.module.css'

const Label = ({ title, id, inputState }) => {
    const indispensable = '※必須'

    return (
        <InputLabel htmlFor={id}>
            {!inputState && <span className={s.indispensable}>{indispensable}</span>}
            <span className={s.title}>{title}</span>
        </InputLabel>
    )
}

export default function InputTextFields({ inputState, endInitialStep }) {
    /* inputs */
    const { name, setName } = useContext(NameContext)
    const { email, setEmail } = useContext(EmailContext)
    const { message, setMessage } = useContext(MessageContext)
    /*  */
    const { isEdited, setIsEdited } = useContext(IsEditedContext)

    const nameClassNames = cn(
            s.content_input,
            { [s.content_error]: name.error, [s.content_default]: !name.error, [s.content_end]: inputState && endInitialStep }
          ),
          emailClassNames = cn(
            s.content_input,
            { [s.content_error]: email.error || email.error === null, [s.content_default]: !email.error && email.error !== null, [s.content_end]: inputState && endInitialStep }
          ),
          messageClassNames = cn(
            s.content_input, 
            { [s.content_error]: message.error, [s.content_default]: !message.error, [s.content_end]: inputState && endInitialStep })

    /* email validation */
    const validation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+[.]+[A-Za-z0-9]{2,}$/
    /* end input */
    const endInput = inputState && endInitialStep

    /* blur */
    const handleBlurName = value => {
        setName(() => ({
            text: value,
            error: value === ''
        }))
        setIsEdited(() => ({ ...isEdited, name: value ? true : false }))
    }

    const handleBlurEmail = value => {
        setEmail(() => ({
            text: value,
            error: value.match(validation) === null && value !== '' ? null : value === '', // バリデーションにマッチしない及び空でない場合「null」、空の場合「false」
        }))
        setIsEdited(() => ({ ...isEdited, email: value ? true : false }))
    }

    const handleBlurMessage = value => {
        setMessage(() => ({
            text: value,
            error: value === ''
        }))
        setIsEdited(() => ({ ...isEdited, message: value ? true : false }))
    }
    
    return (
        <>
            <div className={s.input_container}>
                <Label title={'Name'} id={'input-name'} inputState={inputState} />
                <TextField
                    id={s['input-name']}
                    className={nameClassNames}
                    type='text'
                    onBlur={e => handleBlurName(e.target.value)}
                    fullWidth
                    helperText={name.error && <span className={s.error}>Nameは必須項目です。</span>}
                    InputProps={{ readOnly: inputState, disableUnderline: true, disabled: endInput }}
                />
            </div>
            <div className={s.input_container}>
                <Label title={'E-mail'} id={'input-email'} inputState={inputState} />
                <TextField
                    id={s['input-email']}
                    className={emailClassNames}
                    type='email'
                    onBlur={e => handleBlurEmail(e.target.value)}
                    fullWidth
                    helperText={
                        email.error ? <span className={s.error}>E-mailは必須項目です。</span>
                        :
                        email.error === null && <span className={s.error}>無効なE-mailです。</span>
                    }
                    InputProps={{ readOnly: inputState, disableUnderline: true, disabled: endInput }}
                />
            </div>
            <div className={s.input_container}>
                <Label title={'Message'} id={'input-textarea'} inputState={inputState} />
                <TextField
                    id={s['input-textarea']}
                    className={messageClassNames}
                    multiline
                    minRows={10}
                    onBlur={e => handleBlurMessage(e.target.value)}
                    fullWidth
                    helperText={message.error && <span className={s.error}>Messageは必須項目です。</span>}
                    InputProps={{ readOnly: inputState, disableUnderline: true, disabled: endInput }}
                />
            </div>
        </>
    )
}