import { useContext } from 'react' 
import { TextField, InputLabel } from '@material-ui/core'
import cn from 'classnames'
import { ContentsContext, StepsContext, IsEditedContext } from '@/pages/contact'
import s from '@/styles/Contact.module.css'

const Label = ({ title, id, endSteps}) => {
    const indispensable = '※ 必須'

    return (
        <InputLabel htmlFor={id}>
            {!endSteps && <span className={s.indispensable}>{indispensable}</span>}
            <span className={s.title}>{title}</span>
        </InputLabel>
    )
}

export default function InputTextFields() {
    /* name、email、message */
    const { contents, contentsDispatch } = useContext(ContentsContext)
    /* second step */
    const { steps } = useContext(StepsContext)
    /*  */
    const { isEdited, setIsEdited } = useContext(IsEditedContext)
    /* end input */
    const endSteps = steps.first.end && steps.second.start

    const nameClassNames = cn(
            s.content_input,
            {
                [s.content_error]: contents.name.isError,
                [s.content_default]: !contents.name.isError,
                [s.content_end]: endSteps
            }
          ),
          emailClassNames = cn(
            s.content_input,
            {
                [s.content_error]: contents.email.isError || contents.email.isError === null,
                [s.content_default]: !contents.email.isError && contents.email.isError !== null,
                [s.content_end]: endSteps
            }
          ),
          messageClassNames = cn(
            s.content_input, 
            { 
                [s.content_error]: contents.message.isError,
                [s.content_default]: !contents.message.isError,
                [s.content_end]: endSteps
            }
          )

    /* email validation */
    const validation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+[.]+[A-Za-z0-9]{2,}$/

    /* blur name */
    const handleBlurName = value => {
        contentsDispatch({
            type: 'BLUR_NAME',
            name: { text: value, isError: value === '' }
        })
        setIsEdited(() => ({ ...isEdited, name: value ? true : false }))
        console.log(steps)
    }
    /* blur email */
    const handleBlurEmail = value => {
        contentsDispatch({
            type: 'BLUR_EMAIL',
            email: { text: value, isError: value.match(validation) === null && value !== '' ? null : value === '' }
        })
        setIsEdited(() => ({ ...isEdited, email: value ? true : false }))
    }
    /* blur message */
    const handleBlurMessage = value => {
        contentsDispatch({
            type: 'BLUR_MESSAGE',
            message: { text: value, isError: value === '' }
        })
        setIsEdited(() => ({ ...isEdited, message: value ? true : false }))
    }
    
    return (
        <>
            {/* name */}
            <div className={s.input_container}>
                <Label title={'Name'} id={'input-name'} endSteps={endSteps} />
                <TextField
                    id={s['input-name']}
                    className={nameClassNames}
                    type='text'
                    onBlur={e => handleBlurName(e.target.value)}
                    fullWidth
                    helperText={contents.name.isError && <span className={s.error}>Nameは必須項目です。</span>}
                    InputProps={{ readOnly: endSteps, disableUnderline: true, disabled: endSteps }}
                />
            </div>
            {/* email */}
            <div className={s.input_container}>
                <Label title={'E-mail'} id={'input-email'} endSteps={endSteps} />
                <TextField
                    id={s['input-email']}
                    className={emailClassNames}
                    type='email'
                    onBlur={e => handleBlurEmail(e.target.value)}
                    fullWidth
                    helperText={
                        contents.email.isError ? <span className={s.error}>E-mailは必須項目です。</span>
                        :
                        contents.email.isError === null && <span className={s.error}>無効なE-mailです。</span>
                    }
                    InputProps={{ readOnly: endSteps, disableUnderline: true, disabled: endSteps }}
                />
            </div>
            {/* message */}
            <div className={s.input_container}>
                <Label title={'Message'} id={'input-textarea'} endSteps={endSteps} />
                <TextField
                    id={s['input-textarea']}
                    className={messageClassNames}
                    multiline
                    minRows={10}
                    onBlur={e => handleBlurMessage(e.target.value)}
                    fullWidth
                    helperText={contents.message.isError && <span className={s.error}>Messageは必須項目です。</span>}
                    InputProps={{ readOnly: endSteps, disableUnderline: true, disabled: endSteps }}
                />
            </div>
        </>
    )
}