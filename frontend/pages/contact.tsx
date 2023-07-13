import React, { useState, useReducer } from 'react'
import { Layout } from '@/components/layout'
import { ContactState, Form } from '@/components/contact'
import { Container } from '@/components/ui'
import { Sending } from '@/components/etc'
import { introduction } from '@/assets/contact-contents'
import { contentsInitialState, sendInitialState, stepsState } from '@/assets/contact-initial-states'
import g from '@/styles/global.module.css'

type ContactDataContextProps = {
    contents: any,
    contentsDispatch: any,
    send: any,
    sendDispatch: any,
    sendResult: any,
    setSendResult: any,
    steps: any,
    stepsDispatch: any,
    isEdited: any,
    setIsEdited: any
}

export const ContactDataContext = React.createContext<ContactDataContextProps | null>(null)

/* contents reducer */
const contentsReducer = (currentState: any, action: any) => {
    switch (action.type) {
        case 'END_INITIAL_STEP':
            return  {
                ...currentState,
                name: { ...currentState.name, isError: action.name.isError },
                email: { ...currentState.email, isError: action.email.isError },
                message: { ...currentState.message, isError: action.message.isError }
            }
        case 'BLUR_NAME':
            return {
                ...currentState,
                name: { ...currentState.name, text: action.name.text, isError: action.name.isError }
            }
        case 'BLUR_EMAIL':
            return  {
                ...currentState,
                email: { ...currentState.email, text: action.email.text, isError: action.email.isError }
            }
        case 'BLUR_MESSAGE':
            return {
                ...currentState,
                message: { ...currentState.message, text: action.message.text, isError: action.message.isError }
        }
        default:
            return currentState
    }
}

/* send reducer */
const sendReducer = (currentState: any, action: any) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...currentState, isLoading: action.isLoading }
        case 'END_LOADING':
            return { ...currentState, isLoading: action.isLoading, isComplete: true }
        default:
            return currentState
    }
}

/* steps reducer */
const stepsReducer = (currentState: any, action: any) => {
    switch (action.type) {
        case 'FIRST_START':
            return {
                ...currentState,
                first: { ...currentState.first, start: action.first.start }
            }
        case 'FIRST_END':
            return {
                ...currentState,
                first: { ...currentState.first, end: action.first.end }
            }
        case 'SECOND_START':
            return {
                ...currentState,
                second: { ...currentState.second, start: action.second.start }
            }
        case 'SECOND_END':
            return {
                ...currentState,
                second: { ...currentState.second, end: action.second.end }
            }
        default:
            return currentState
    }
}
            
export default function ContactPage() {
    /* name、email、message */
    const [contents, contentsDispatch] = useReducer(contentsReducer, contentsInitialState)
    /* send state */
    const [send, sendDispatch] = useReducer(sendReducer, sendInitialState)
    /* send result */
    const [sendResult, setSendResult] = useState<any>(null)
    /* second step */
    const [steps, stepsDispatch] = useReducer(stepsReducer, stepsState)
    /* 編集中を管理 */
    const [isEdited, setIsEdited] = useState<boolean>(false)

    return (
        <Layout metaProps={{
            title: `Junpei Oue | ${introduction.title}`,
            description: introduction.description,
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <Sending isLoading={send.isLoading} />
            <div className={g.root_container}>
                <Container className={g.top_container}>
                    <div className={g.container}>
                        <ContactDataContext.Provider
                            value={{
                                contents, contentsDispatch,
                                send, sendDispatch,
                                sendResult, setSendResult,
                                steps, stepsDispatch,
                                isEdited, setIsEdited
                            }}
                        >
                            <ContactState />
                            <Form />
                        </ContactDataContext.Provider>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}