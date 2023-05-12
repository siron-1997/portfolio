import React, { useState } from 'react'
import cn from 'classnames'
import { Layout } from '@components/layout'
import { ContactState, Form } from '@/components/contact'
import { Container } from '@/components/ui'
import { Sending } from '@/components/etc'
import g from '@/styles/global.module.css'
import s from '@/styles/Contact.module.css'

export const InputStateContext = React.createContext(),
             NameContext = React.createContext(),
             EmailContext = React.createContext(),
             MessageContext = React.createContext(),
             EndInitialStepContext = React.createContext(),
             IsEditedContext = React.createContext()

export default function Contact() {
    /* progress */
    const [inputState, setInputState] = useState(false)
    /* end initial step */
    const [endInitialStep, setEndInitialStep] = useState(false)
    /* 編集中を管理 */
    const [isEdited, setIsEdited] = useState(false)
    /* inputs */
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    const [message, setMessage] = useState({})

    const classNames = cn(g.custom_container, s.contact_container)

    return (
        <Layout>
            {/* <Sending /> */}
            <div className={g.global_container}>
                <Container>
                    <div className={classNames}>
                        <InputStateContext.Provider value={{ inputState, setInputState }}>
                            <NameContext.Provider value={{ name, setName }}>
                                <EmailContext.Provider value={{ email, setEmail }}>
                                    <MessageContext.Provider value={{ message, setMessage }}>
                                        <EndInitialStepContext.Provider value={{ endInitialStep, setEndInitialStep }}>
                                            <IsEditedContext.Provider value={{ isEdited, setIsEdited }}>
                                                <ContactState />
                                                <Form />
                                            </IsEditedContext.Provider>
                                        </EndInitialStepContext.Provider>
                                    </MessageContext.Provider>
                                </EmailContext.Provider>
                            </NameContext.Provider>
                        </InputStateContext.Provider>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}