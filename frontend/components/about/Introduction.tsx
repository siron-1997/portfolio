import React, { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { introductionAnimation } from '@/animations/components/about'
import { introduction } from '@/assets/about-contents'
import s from '@/styles/about/Introduction.module.css'

const Introduction: React.FC = () => {
    const introductionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = introductionAnimation({
            section: introductionRef.current.querySelector('#about-introduction-section'),
            introductionRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={s.introduction} ref={introductionRef}>
            <section className={s.profile_text} id='about-introduction-section'>
                <Typography component='h1' variant='h1'>{introduction.title}</Typography>
                <Typography component='p' variant='p'>{introduction.description}</Typography>
            </section>
        </div>
    )
}

export default Introduction