import { useState } from 'react'
import { TextField, Button, InputLabel } from '@material-ui/core'
import cn from 'classnames'
import { inputTextStyle, inputLabelStyle } from '@/assets/styles'
import s from '@/styles/Contact.module.css'
import g from '@/styles/global.module.css'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const classNames = cn(s.form_custom_container, g.custom_container)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    }

    return (
        <div className={s.form_container}>
            <div className={classNames}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <div style={{ width: '100%' }}>
                        <InputLabel htmlFor='input-name'>Name</InputLabel>
                        <TextField
                            id='input-name'
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            fullWidth
                            InputProps={{ style: inputTextStyle }}
                            InputLabelProps={{ style: inputLabelStyle }}
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <InputLabel htmlFor='input-email'>E-mail</InputLabel>
                        <TextField
                            id='input-email'
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                            InputProps={{ style: inputTextStyle }}
                            InputLabelProps={{ style: inputLabelStyle }}
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <InputLabel htmlFor='textarea'>Message</InputLabel>
                        <TextField
                            id='textarea'
                            multiline
                            rows={10}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            fullWidth
                            InputProps={{ style: inputTextStyle }}
                            InputLabelProps={{ style: inputLabelStyle }}
                        />
                    </div>
                    <div className={s.btn_container}>
                        <Button type='submit' variant='contained' color='primary'>入力内容の確認</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}