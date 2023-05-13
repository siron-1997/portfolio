import React, { useState, useReducer } from 'react'
import cn from 'classnames'
import { Layout } from '@components/layout'
import { ContactState, Form } from '@/components/contact'
import { Container } from '@/components/ui'
import { Sending } from '@/components/etc'
import g from '@/styles/global.module.css'
import s from '@/styles/Contact.module.css'

const contentsInitialState = { name: false, email: false, message: false }
const sendInitialState = { isLoading: false, isError: false, isComplete: false }
const stepsState = { first: { start: false, end: false }, second: { start: false, end: false } }

export const ContentsContext = React.createContext(),
             SendContext = React.createContext(),
             SendResultContext = React.createContext(),
             StepsContext = React.createContext(),
             IsEditedContext = React.createContext()

/* contents reducer */
const contentsReducer = (currentState, action) => {
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
const sendReducer = (currentState, action) => {
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
const stepsReducer = (currentState, action) => {
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
            
export default function Contact() {
    /* name、email、message */
    const [contents, contentsDispatch] = useReducer(contentsReducer, contentsInitialState)
    /* send state */
    const [send, sendDispatch] = useReducer(sendReducer, sendInitialState)
    /* send result */
    const [sendResult, setSendResult] = useState(null)
    /* second step */
    const [steps, stepsDispatch] = useReducer(stepsReducer, stepsState)
    /* 編集中を管理 */
    const [isEdited, setIsEdited] = useState(false)

    const classNames = cn(g.custom_container, s.contact_container)

    return (
        <Layout>
            <Sending isLoading={send.isLoading} />
            <div className={g.global_container}>
                <Container>
                    <div className={classNames}>
                        <ContentsContext.Provider value={{ contents, contentsDispatch }}>
                            <SendContext.Provider value={{ send, sendDispatch }}>
                                <SendResultContext.Provider value={{ sendResult, setSendResult }}>
                                    <StepsContext.Provider value={{ steps, stepsDispatch }}>
                                        <IsEditedContext.Provider value={{ isEdited, setIsEdited }}>
                                            <ContactState />
                                            <Form />
                                        </IsEditedContext.Provider>
                                    </StepsContext.Provider>
                                </SendResultContext.Provider>
                            </SendContext.Provider>
                        </ContentsContext.Provider>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}