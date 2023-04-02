
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { Container } from '@components/ui'
import NextNProgress from 'nextjs-progressbar'
import s from '@styles/etc/Progress.module.css'

export default function Progress() {
    const progressRef = useRef()
    const router = useRouter()
    const [isPageLoading, setIsPageLoading] = useState(false)

    const options = {
        showAfterMs: false,
        speed: 500,
        // template: '<div className="bar" role="bar">%</div>'
      }

    useEffect(() => {
        // const progress = progressRef.current
        // progress.style.display = 'none'
        // const handleStart = () => {
        //     console.log('start')
        //     setIsPageLoading(true)
        // }
        // const handleStop = () => {
        //     console.log('stop')
        //     setIsPageLoading(false)
        // }

        // window.addEventListener('beforeunload', handleStart)
        // window.addEventListener('load', handleStop)
        // router.events.on('beforeHistoryChange', () => console.log('start load'))
        // Router.events.on('beforeHistoryChange', () => console.log('start load 2'))
        // window.onload = () => console.log('loaded page')
        Router.reload()
    
        // return () => {
        //     window.removeEventListener('beforeunload', handleStart)
        //     window.removeEventListener('load', handleStop)
        // }
    })

    return (
        <div className={s.progress} ref={progressRef}>
            <Container>
                <div className={s.bar_container}>
                    <NextNProgress
                        color="#29D"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={50}
                        showAfterMs={500}
                        options={options}
                        
                    />
                </div>
            </Container>
        </div>
    )
}