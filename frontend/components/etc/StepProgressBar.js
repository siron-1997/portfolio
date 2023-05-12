import { useState, useEffect, useContext, useReducer } from 'react'
import cn from 'classnames'
import { InputStateContext, EndInitialStepContext } from '@/pages/contact'
import s from '@/styles/etc/StepProgressBar.module.css'

const StepStates = {
    NOT_STARTED: 'not_started',
    CURRENT: 'current',
    ERROR: 'error',
    COMPLETED: 'completed'
}

const stepsReducer = (steps, action) => {
    return steps.map((step, i) => {
        switch (true) {
            case i < action.payload.index:
                step.state = StepStates.COMPLETED
                break
            case i === action.payload.index:
                step.state = action.payload.state
                break
            default:
                step.state = StepStates.NOT_STARTED
                break
        }
        return step
    })
}

export default function StepProgressBar({
    steps,
    onSubmit,
    wrapperClass,
    progressClass,
    stepClass,
    labelClass,
    subtitleClass,
    contentClass,

}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [state, dispatch] = useReducer(stepsReducer, steps)
    /* progress */
    const { inputState } = useContext(InputStateContext)
    /* initial step */
    const { endInitialStep } = useContext(EndInitialStepContext)

    const wrapperClassNames = cn(s.progress_bar_wrapper, wrapperClass),
          progressClassNames = cn(s.step_progress_bar, progressClass),
          stepClassNames = cn(s.progress_step, stepClass),
          labelClassNames = cn(s.step_label, labelClass),
          subtitleClassNames = cn(s.step_label_subtitle, subtitleClass),
          contentClassNames = cn(s.step_content, contentClass)

    const handleNext = () => {
        if (currentIndex === steps.length - 1) {
            return
        }
        let isStateValid = inputState
        dispatch({
            type: 'next',
            payload: {
                index: isStateValid ? currentIndex + 1 : currentIndex,
                state: isStateValid ? StepStates.CURRENT : StepStates.ERROR
            }
        })
        isStateValid && setCurrentIndex(currentIndex + 1)
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            return
        } else if (!inputState) {
            dispatch({
                type: 'previous',
                payload: {
                    index: currentIndex - 1,
                    state: StepStates.CURRENT
                }
            })
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleSubmit = () => onSubmit()

    useEffect(() => {
        dispatch({
          type: 'init',
          payload: { index: currentIndex, state: StepStates.CURRENT }
        })
        endInitialStep && (inputState || !inputState) && handleNext()
        !endInitialStep && !inputState && handlePrev()
    }, [endInitialStep, inputState])

    return (
        <div className={wrapperClassNames}>
            <ul className={progressClassNames}>
                {state.map((step, i) => (
                    <li
                        key={i}
                        className={`${stepClassNames}${step.state === StepStates.COMPLETED ? ` ${s.completed}` : ''}${step.state === StepStates.CURRENT ? ` ${s.current}` : ''}${step.state === StepStates.ERROR ? ` ${s.has_error}` : ''}`}
                    >
                        {step.state === StepStates.COMPLETED && (
                            <span className={s.step_icon}>
                                <svg
                                    width='1.5rem'
                                    viewBox='0 0 13 9'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M1 3.5L4.5 7.5L12 1' stroke='white' strokeWidth='1.5' />
                                </svg>
                            </span>
                        )}
                        {step.state === StepStates.ERROR && <span className={s.step_icon}>!</span>}
                        {step.state !== StepStates.COMPLETED && step.state !== StepStates.ERROR && <span className={s.step_index}>{i + 1}</span>}
                        <div className={labelClassNames}>
                            {step.label}
                            {step.subtitle && <div className={subtitleClassNames}>{step.subtitle}</div>}
                        </div>
                    </li>
                ))}
            </ul>
            <div className={contentClassNames}>{steps[currentIndex].content}</div>
        </div>
    )
}