import { useContext } from 'react' 
import { TextField, InputLabel, FormHelperText, Typography } from '@mui/material'
import { ContactDataContext } from '@/pages/contact'
import { colors } from '@/assets/colors'
import s from '@/styles/contact/InputTextFields.module.css'

export default function InputTextFields() {
    const {
        contents, contentsDispatch, // name、email、message、を管理・編集
        steps, // ステップを管理
        isEdited, setIsEdited // 編集中かを管理
    } = useContext(ContactDataContext)
    /* end input */
    const endSteps = steps.first.end && steps.second.start
    /* default style */
    const textFieldStyles = {
        position: 'relative',
        borderRadius: 4,
        boxSizing: 'border-box'
    }
    /* email validation */
    const validation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+[.]+[A-Za-z0-9]{2,}$/
    /* input setting */
    const getInputSettings = (height = 35, padding = '4px 10px') => ({
        readOnly: endSteps,
        disabled: endSteps,
        sx: {
            height: height,
            padding: padding,
            border: endSteps ? `1px solid ${colors.bgColor.dark.textField}` : null,
            backgroundColor: endSteps ? colors.bgColor.dark.textField : null,
            '& .MuiInputBase-input': {
                padding: 0
            }
        }
    })
    /* blur name */
    const handleBlurName = value => {
        contentsDispatch({
            type: 'BLUR_NAME',
            name: { text: value, isError: value === '' }
        })
        setIsEdited(() => ({ ...isEdited, name: value ? true : false }))
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
                <Label title={'name'} id={'input-name'} endSteps={endSteps} />
                <TextField
                    id={'input-name'}
                    name='name'
                    type='text'
                    onBlur={e => handleBlurName(e.target.value)}
                    fullWidth
                    error={contents.name.isError}
                    InputProps={getInputSettings()}
                    sx={textFieldStyles}
                />
                <FormHelperText
                    error={contents.name.isError}
                    className={s.error}
                    sx={{ display: contents.name.isError ? 'block' : 'none' }}
                >
                    Nameは必須項目です。
                </FormHelperText>
            </div>
            {/* email */}
            <div className={s.input_container}>
                <Label title={'E-mail'} id={'input-email'} endSteps={endSteps} />
                <TextField
                    id={'input-email'}
                    name='email'
                    type='email'
                    onBlur={e => handleBlurEmail(e.target.value)}
                    fullWidth
                    error={contents.email.isError || contents.email.isError === null}
                    InputProps={getInputSettings()}
                    sx={textFieldStyles}
                />
                <FormHelperText
                    error={contents.email.isError}
                    className={s.error}
                    sx={{ display: contents.email.isError || contents.email.isError === null ? 'block' : 'none' }}
                >
                    {contents.email.isError ? 'E-mailは必須項目です。' : contents.email.isError === null && '無効なE-mailです。'}
                </FormHelperText>
            </div>
            {/* message */}
            <div className={s.input_container}>
                <Label title={'Message'} id={'input-textarea'} endSteps={endSteps} />
                <TextField
                    id={'input-textarea'}
                    name='message'
                    multiline
                    minRows={8}
                    onBlur={e => handleBlurMessage(e.target.value)}
                    fullWidth
                    error={contents.message.isError}
                    InputProps={getInputSettings(200, '8px 10px')}
                    sx={textFieldStyles}
                />
                <FormHelperText
                    error={contents.message.isError}
                    className={s.error}
                    sx={{ display: contents.message.isError ? 'block' : 'none' }}
                >
                    Messageは必須項目です。
                </FormHelperText>
            </div>
        </>
    )
}

const Label = ({ title, id, endSteps}) => {
    const indispensable = '※ 必須'

    return (
        <InputLabel
            htmlFor={id}
            disableAnimation
        >
            {!endSteps && (
                <Typography component='span' variant='label'>
                    {indispensable}
                </Typography>
            )}
            <Typography component='span' variant='label_name'>{title}</Typography>
        </InputLabel>
    )
}