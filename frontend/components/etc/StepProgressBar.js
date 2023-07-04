import Image from 'next/image'
import { useState, useEffect, useContext, useReducer, useCallback } from 'react'
import cn from 'classnames'
import { useIconSize } from '@/utils/hooks'
import { ContactDataContext } from '@/pages/contact'
import s from '@/styles/etc/StepProgressBar.module.css'

const StepStates = {
    NOT_STARTED: 'not_started',
    CURRENT: 'current',
    ERROR: 'error',
    COMPLETED: 'completed'
}

const stepsReducer = (stepPoints, action) => {
    return stepPoints.map((stepPoint, i) => {
        switch (true) {
            case i < action.payload.index: // ステップが現在のステップカウントより前の場合コンプリート
                stepPoint.state = StepStates.COMPLETED
                break
            case i === action.payload.index: // ステップが現在のステップカウントと同じ場合変更なし
                stepPoint.state = action.payload.state
                break
            default: // ステップが現在のステップカウントより後の場合未開始
                stepPoint.state = StepStates.NOT_STARTED
                break
        }
        return stepPoint
    })
}

export default function StepProgressBar({ stepPoints, wrapperClass, progressClass, labelClass, contentClass }) {
    const [currentIndex, setCurrentIndex] = useState(0) // ステップカウント
    const [state, dispatch] = useReducer(stepsReducer, stepPoints)
    const { sendResult, steps } = useContext(ContactDataContext)
    const iconSize = useIconSize(25, 25, 25)

    const wrapperClassNames = cn(s.progress_bar_wrapper, wrapperClass),
          progressClassNames = cn(s.step_progress_bar, progressClass),
          labelClassNames = cn(s.step_label, labelClass),
          contentClassNames = cn(s.step_content, contentClass)

    const handleInitial = useCallback(() => {
        dispatch({
            type: 'init',
            payload: { index: currentIndex, state: StepStates.CURRENT }
          })
    }, [currentIndex])

    /* ステップアップ */
    const handleNext = useCallback(() => {
        /* 最終ステップの場合は終了 */
        if (currentIndex === stepPoints.length - 1) {
            return
        /* ファーストステップが終了したときステップをカウントアップ */
        } else {
            steps.first.end && setCurrentIndex(currentIndex + 1)
            dispatch({
                type: 'next',
                payload: {
                    index: steps.first.end ? currentIndex + 1 : currentIndex,
                    state: steps.first.end && sendResult === null || sendResult ? StepStates.CURRENT : StepStates.ERROR
                }
            })
        }
    }, [currentIndex, sendResult, stepPoints.length, steps.first.end])

    /* ステップアップ */
    const handlePrev = useCallback(() => {
        /* ファーストステップの場合は終了 */
        if (currentIndex === 0) {
            return
        /* ファーストステップが終了していない場合、ステップをカウントダウン */
        } else if (!steps.first.end) {
            setCurrentIndex(currentIndex - 1)
            dispatch({
                type: 'previous',
                payload: {
                    index: currentIndex - 1,
                    state: StepStates.CURRENT
                }
            })
        }
    }, [currentIndex, steps.first.end])

    /* ステップバーの初期化および進捗状況を管理 */
    useEffect(() => {
        handleInitial()
        steps.first.start && handleNext() // ファーストステップ開始以降実行する
        !steps.first.start && !steps.first.end && handlePrev() // ファーストステップ開始および終了ではない場合実行
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [steps.first.start, steps.first.end])

    return (
        <div className={wrapperClassNames}>
            <ul className={progressClassNames}>
                {state.map((step, i) => (
                    <li
                        key={i}
                        className={cn( // 状態に応じてクラスを付与
                            s.progress_step,
                            {
                                [s.completed]: step.state === StepStates.COMPLETED,
                                [s.current]: step.state === StepStates.CURRENT,
                                [s.has_error]: step.state === StepStates.ERROR
                            }
                        )}
                    >
                        {step.state === StepStates.COMPLETED ? ( // コンプリート時のアイコン
                            <span className={s.step_icon}>
                                <Image
                                    src='/icons/step_check.svg'
                                    alt='check'
                                    width={iconSize}
                                    height={iconSize}
                                    quality={1}
                                    priority={true}
                                />
                            </span>
                        ) : step.state === StepStates.ERROR ? ( // エラー時のアイコン
                            <span className={s.step_icon}>!</span>
                        ) : ( // デフォルトアイコン
                            <span className={s.step_index}>{i + 1}</span>
                        )}
                        {/* 最終ステップの送信結果に応じてテキストを変更 */}
                        <div className={labelClassNames}>
                            {i === state.length - 1 && sendResult !== null && !sendResult ? '送信失敗' : step.label}
                        </div>
                    </li>
                ))}
            </ul>
            {/* モバイル用ステップテキスト */}
            <div className={contentClassNames}>{stepPoints[currentIndex].content}</div>
        </div>
    )
}